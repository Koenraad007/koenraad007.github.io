export type Game = {
  title: string;
  description: string | null;
  url: string;
};

export async function loadGames(): Promise<Game[]> {
  const res = await fetch('/games.json');

  if (!res.ok) {
    throw new Error(`Failed to load games: ${res.status}`);
  }

  return res.json();
}
