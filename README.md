# koenraad007.github.io

Persoonlijke website van **Koen Van Aken**, gehost via GitHub Pages op
<https://koenraad007.github.io/>.

De site is in de eerste plaats een **online cv**: een overzicht van opleidingen,
werkervaring, vaardigheden, talen en hobby's, met contactgegevens en een foto.
Het cv kan met één klik als PDF worden geëxporteerd (via de printfunctie van de
browser, met een aparte A4-printopmaak). Daarnaast is er een **Games**-pagina,
die voorlopig nog een placeholder is.

## Pagina's

| Route    | Component       | Inhoud                                                        |
| -------- | --------------- | ------------------------------------------------------------- |
| `/home`  | `HomeComponent` | Het cv (standaardpagina, `/` verwijst hiernaar door)          |
| `/games` | `GamesComponent`| Placeholder voor toekomstige games                            |

## Technologie

- [Angular](https://angular.dev/) 18 met standalone components en de nieuwe
  control flow (`@for`)
- [Bootstrap 4.3](https://getbootstrap.com/docs/4.3/) via CDN (zie `src/index.html`)
- Iconen van [Font Awesome Free](https://fontawesome.com/) (CC BY 4.0), rechtstreeks
  als inline SVG in de templates
- [`angular-cli-ghpages`](https://github.com/angular-schule/angular-cli-ghpages)
  voor de deployment naar de `gh-pages`-branch

## Lokaal ontwikkelen

```bash
npm install
```

```bash
npm start
```

De dev-server draait op <http://localhost:4200/> en herlaadt automatisch bij
wijzigingen.

## Inhoud van het cv aanpassen

Alle cv-gegevens staan rechtstreeks in de code:

- **Opleidingen, werkervaring, vaardigheden en talen** — arrays in
  [`src/app/home/home.component.ts`](src/app/home/home.component.ts).
  Opleidingen en jobs worden automatisch gesorteerd op einddatum (nieuwste
  eerst). Gebruik voor `timePeriod` het formaat `mmm jjjj - mmm jjjj` met
  Nederlandse maandafkortingen (`jan`, `feb`, `mrt`, …, `okt`, …) of `heden`
  als einddatum.
- **Naam, contactgegevens en hobby's** — in
  [`src/app/home/home.component.html`](src/app/home/home.component.html).
- **Foto en favicon** — in de map [`public/`](public/).

## Bouwen en publiceren

```bash
npm run build
```

De build komt terecht in `dist/website/browser`. Publiceren naar GitHub Pages
(de `gh-pages`-branch) gebeurt met een van de deploy-scripts:

- **macOS / Linux:**

  ```bash
  ./build_and_deploy.sh
  ```

  Het script werkt vanuit elke map, installeert de dependencies als
  `node_modules` ontbreekt, en stopt bij de eerste fout.

- **Windows:** `build_and_deploy.ps1`. Let op: dit script begint met een `cd`
  naar een hardgecodeerd Windows-pad.

Beide scripts voeren in essentie dit uit:

```bash
ng build
```

```bash
npx angular-cli-ghpages --dir=dist/website/browser
```

## Overige bestanden

De bestanden `index.html.old`, `contact.html.old`, `cv.css.old` en
`style.css.old` zijn restanten van de oorspronkelijke statische HTML-versie van
de site, van vóór de overstap naar Angular. Ze worden niet meer gebruikt.
