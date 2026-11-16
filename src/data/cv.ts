/**
 * All CV content shown on /home/.
 *
 * `timePeriod` must look like "sep 2022 - jul 2024" or "sep 2022 - heden",
 * with Dutch month abbreviations (see `monthMap` in ./period.ts). Entries are
 * sorted by end date, newest first, and the build fails on a period it can't
 * read.
 */

export type CvEntry = {
  name: string;
  description: string;
  location: string;
  timePeriod: string;
};

/** `value` is a percentage (0–100) and sets the width of the bar. */
export type Rating = {
  name: string;
  value: number;
};

export const trainings: CvEntry[] = [
  {
    name: 'Secundair (ASO)',
    description:
      'In het laatste jaar ben ik afgestudeerd in Latijn-Wetenschappen.',
    location: 'Sint-Ritacollege, Kontich',
    timePeriod: 'sep 2011 - jul 2017',
  },
  {
    name: 'Toegepaste Ingenieurswetenschappen (Elektronica-ICT)',
    description:
      'Deze studie heb ik niet afgemaakt wegens enkele tekorten voor bepaalde vakken.',
    location: 'Universiteit Antwerpen, Wilrijk',
    timePeriod: 'sep 2017 - aug 2022',
  },
  {
    name: 'Toegepaste Informatica',
    description:
      'Met mijn passie voor programmeren ben ik verder gaan studeren aan de AP Hogeschool waar er meer toepassingsgerichte vakken gegeven worden. Dit ligt mij beter en dat bewijzen de cijfers ook.',
    location: 'AP Hogeschool, Antwerpen',
    timePeriod: 'sep 2022 - heden',
  },
];

export const jobs: CvEntry[] = [
  {
    name: 'Chauffeur',
    description:
      "Als chauffeur bij Dockx moet ik auto's of camionettes verplaatsen tussen filialen. Wanneer nodig moet ik ook met de voertuigen naar de autokeuring gaan.",
    location: 'Dockx, Wilrijk',
    timePeriod: 'mrt 2024 - heden',
  },
  {
    name: 'Kelner',
    description:
      'Als kelner moest ik bestellingen opnemen, bestellingen rondbrengen rondbrengen en tafels afruimen.',
    location: 'Bier Central, Antwerpen',
    timePeriod: 'okt 2023 - jan 2024',
  },
  {
    name: 'Mede-organisator',
    description:
      'Samen met een team van ongeveer 10 personen organiseren wij jaarlijks het kleine festival San Luce. Doorheen het jaar worden artiesten en allerlei andere zaken vastgelegd. In de periode van het festival moet alles worden opgebouwd, het festival tot een goed einde worden gebracht, en achteraf moet dan alles afgebroken worden.',
    location: 'San Luce, Rumst',
    timePeriod: 'okt 2022 - aug 2024',
  },
  {
    name: 'Animator',
    description:
      'Als animator bij het Speelplein moest je samen met een team van andere animatoren een of meerdere weken een groep van 50 kinderen entertainen. Om dit te doen is er aan het begin van de week een vergadering om alles te plannen zodat de rest van de week vlot verloopt.',
    location: 'Speelplein, Boom',
    timePeriod: 'aug 2021 - aug 2025',
  },
  {
    name: 'Steward',
    description:
      'Als steward moest ik mee het festival in goede banen leiden. Enkele taken die ik kreeg, waren onder andere festivalgangers bedienen aan de bar, festivalgangers veilig naar huis begeleiden en toegangsbandjes controleren.',
    location: 'StuDay, Antwerpen',
    timePeriod: 'sep 2019 - sep 2022',
  },
  {
    name: 'Winkelmedewerker',
    description:
      'Als winkelmedewerker moest ik allerlei taken uitvoeren in de winkel. Dit waren taken zoals werken met een transpallet, rekken bijvullen, achter de kassa zitten,...',
    location: 'Carrefour Express, Antwerpen',
    timePeriod: 'aug 2015 - aug 2016',
  },
  {
    name: 'Kinderoppas',
    description:
      'Wanneer ouders erop uit wilden, kon ik gebeld worden om een avond of namiddag op hun kinderen te letten. Ik moest ze dan bezig houden en in bed stoppen.',
    location: 'Gezinsbond, Boom',
    timePeriod: 'mrt 2015 - mei 2015',
  },
];

export const skills: Rating[] = [
  { name: 'Teamwork', value: 80 },
  { name: 'Flexibiliteit', value: 80 },
  { name: 'Creativiteit', value: 60 },
  { name: 'ICT', value: 100 },
  { name: 'Problem solving', value: 80 },
];

export const languages: Rating[] = [
  { name: 'Nederlands', value: 100 },
  { name: 'Engels', value: 90 },
  { name: 'Frans', value: 30 },
];

export const hobbies: string[] = [
  'Studentenvereniging',
  'Gaming',
  'Jeugdbeweging',
];
