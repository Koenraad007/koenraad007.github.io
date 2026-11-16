/**
 * Finds the games to list on /games/: every public repo of GITHUB_USER whose
 * name starts with REPO_PREFIX and that has GitHub Pages turned on. Runs in
 * the browser, so a new game repo shows up without rebuilding this site.
 */

const GITHUB_USER = 'koenraad007';
const REPO_PREFIX = 'iogames-';

/** Results are kept for the rest of the browser session to save API calls. */
const CACHE_KEY = 'games:repos';
const CACHE_TTL_MS = 10 * 60 * 1000;

export type Game = {
  title: string;
  description: string | null;
  url: string;
};

type Repo = {
  name: string;
  description: string | null;
  homepage: string | null;
  has_pages: boolean;
  fork: boolean;
  archived: boolean;
};

/** Thrown when GitHub's unauthenticated limit (60 requests/hour per IP) is used up. */
export class RateLimitError extends Error {
  constructor(public readonly resetAt: Date) {
    super(`GitHub API rate limit reached until ${resetAt.toISOString()}`);
  }
}

export async function loadGames(): Promise<Game[]> {
  const cached = readCache();
  if (cached) return cached;

  const repos = await fetchAllRepos();
  const games = repos
    .filter((r) => r.name.startsWith(REPO_PREFIX) && r.has_pages && !r.fork && !r.archived)
    .map(toGame)
    .sort((a, b) => a.title.localeCompare(b.title, 'nl'));

  writeCache(games);
  return games;
}

async function fetchAllRepos(): Promise<Repo[]> {
  const repos: Repo[] = [];
  for (let page = 1; ; page++) {
    const res = await fetch(
      `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&page=${page}`,
      { headers: { Accept: 'application/vnd.github+json' } },
    );
    if (isRateLimited(res)) {
      const reset = Number(res.headers.get('x-ratelimit-reset'));
      throw new RateLimitError(
        reset ? new Date(reset * 1000) : new Date(Date.now() + 60 * 60 * 1000),
      );
    }
    if (!res.ok) throw new Error(`GitHub API returned ${res.status}`);

    const batch = (await res.json()) as Repo[];
    repos.push(...batch);
    if (batch.length < 100) return repos;
  }
}

function isRateLimited(res: Response): boolean {
  return (
    res.status === 429 ||
    (res.status === 403 && res.headers.get('x-ratelimit-remaining') === '0')
  );
}

/** "iogames-space-wars" → "Space Wars" */
function toGame(repo: Repo): Game {
  const title = repo.name
    .slice(REPO_PREFIX.length)
    .split(/[-_]+/)
    .filter(Boolean)
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ');
  return {
    title,
    description: repo.description,
    url: repo.homepage || `https://${GITHUB_USER}.github.io/${repo.name}/`,
  };
}

function readCache(): Game[] | null {
  try {
    const raw = sessionStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const { savedAt, games } = JSON.parse(raw) as { savedAt: number; games: Game[] };
    return Date.now() - savedAt < CACHE_TTL_MS ? games : null;
  } catch {
    return null;
  }
}

function writeCache(games: Game[]): void {
  try {
    sessionStorage.setItem(CACHE_KEY, JSON.stringify({ savedAt: Date.now(), games }));
  } catch {
    // Storage unavailable (private mode, blocked): just skip caching.
  }
}
