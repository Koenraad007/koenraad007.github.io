# koenraad007.github.io

Persoonlijke website van **Koen Van Aken**, gehost via GitHub Pages op
<https://koenraad007.github.io/>.

De site is in de eerste plaats een **online cv**: een overzicht van opleidingen,
werkervaring, vaardigheden, talen en hobby's, met contactgegevens en een foto.
Het cv kan met één klik als PDF worden geëxporteerd (via de printfunctie van de
browser, met een aparte A4-printopmaak). Daarnaast is er een **Games**-pagina,
die voorlopig nog een placeholder is.

## Pagina's

| Route     | Bestand                        | Inhoud                                       |
| --------- | ------------------------------ | -------------------------------------------- |
| `/home/`  | `src/pages/home/index.astro`   | Het cv (standaardpagina, `/` verwijst hiernaar door) |
| `/games/` | `src/pages/games/index.astro`  | Placeholder voor toekomstige games           |
| —         | `src/pages/404.astro`          | Foutpagina voor onbestaande adressen         |

## Technologie

- [Astro](https://astro.build/): bij elke build wordt elke pagina omgezet naar
  gewone HTML. Er wordt geen JavaScript naar de browser gestuurd, tenzij een
  pagina daar zelf om vraagt (bijvoorbeeld later een game).
- Elke map of `.astro`-bestand onder `src/pages/` wordt automatisch een pagina.
- De navigatiebalk, `<head>`-tags en footer staan één keer in
  `src/layouts/BaseLayout.astro`.
- Eigen CSS zonder framework: algemene stijlen in `src/styles/global.css`,
  paginastijlen in een `<style>`-blok onderaan elke pagina (alleen geldig voor
  die pagina).
- Iconen van [Font Awesome Free](https://fontawesome.com/) (CC BY 4.0),
  rechtstreeks als inline SVG.

## Lokaal ontwikkelen

Vereist Node.js 22 of nieuwer.

```bash
npm install
```

```bash
npm run dev
```

De dev-server draait op <http://localhost:4321/home/> en herlaadt automatisch
bij wijzigingen.

## Inhoud van het cv aanpassen

- **Opleidingen, werkervaring, vaardigheden, talen en hobby's** — in
  [`src/data/cv.ts`](src/data/cv.ts). Opleidingen en jobs worden automatisch
  gesorteerd op einddatum (nieuwste eerst). Gebruik voor `timePeriod` het
  formaat `mmm jjjj - mmm jjjj` met Nederlandse maandafkortingen (`jan`, `feb`,
  `mrt`, …, `okt`, …) of `heden` als einddatum. Een fout in dat formaat laat de
  build mislukken met een duidelijke foutmelding.
- **Naam en contactgegevens** — in
  [`src/pages/home/index.astro`](src/pages/home/index.astro).
- **Foto en favicon** — in de map [`public/`](public/).

## Bouwen en publiceren

```bash
npm run build
```

Dit controleert eerst de code (`astro check`) en zet daarna de volledige site
in `dist/`. Met `npm run preview` bekijk je die build lokaal.

### Automatisch (GitHub Actions)

Bij elke push naar `main` bouwt de workflow
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) de site en
publiceert die rechtstreeks op GitHub Pages. Daarvoor moet in de
repo-instellingen **Settings → Pages → Source** op **GitHub Actions** staan.

Manueel publiceren zonder te pushen kan via het tabblad **Actions** op GitHub
(*Run workflow*), of met:

```bash
gh workflow run deploy.yml
```

## Overige bestanden

De bestanden `index.html.old`, `contact.html.old`, `cv.css.old` en
`style.css.old` zijn restanten van de oorspronkelijke statische HTML-versie van
de site. Ze worden niet meer gebruikt.
