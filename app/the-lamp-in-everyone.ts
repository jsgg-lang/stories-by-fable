// The Lamp in Everyone — the seventh book in the library, and the first
// for children: a picture book. Every illustration is inline SVG drawn in
// one visual world: a blue dusk street, warm lamp-glow, small round people.

import type { BookPage, FableBook } from "./books";

// ————— the illustration kit —————

const C = {
  sky1: "#2a2f55",
  sky2: "#14162a",
  ground: "#1d1930",
  house: "#373152",
  roof: "#252040",
  glow: "#ffd98a",
  glowSoft: "#ffedc2",
  person: "#171325",
  scarf: "#c96f4a",
  scarf2: "#6f8fc9",
  moon: "#e8e4d8",
  star: "#cfd3ec",
};

function wrap(inner: string, id: string): string {
  return `<svg viewBox="0 0 320 190" xmlns="http://www.w3.org/2000/svg" role="img" style="width:100%;height:auto;display:block;margin:0 auto 1.2rem;max-width:340px;">
  <defs>
    <linearGradient id="sky${id}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="${C.sky1}"/><stop offset="1" stop-color="${C.sky2}"/>
    </linearGradient>
    <radialGradient id="g${id}">
      <stop offset="0" stop-color="${C.glowSoft}" stop-opacity="0.9"/>
      <stop offset="0.5" stop-color="${C.glow}" stop-opacity="0.35"/>
      <stop offset="1" stop-color="${C.glow}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="320" height="190" rx="10" fill="url(#sky${id})"/>
  <circle cx="278" cy="30" r="13" fill="${C.moon}" opacity="0.9"/>
  <circle cx="272" cy="26" r="11" fill="url(#sky${id})"/>
  <circle cx="46" cy="24" r="1.4" fill="${C.star}"/><circle cx="96" cy="38" r="1.1" fill="${C.star}"/>
  <circle cx="150" cy="20" r="1.3" fill="${C.star}"/><circle cx="220" cy="44" r="1" fill="${C.star}"/>
  <rect y="152" width="320" height="38" fill="${C.ground}"/>
  ${inner}
</svg>`;
}

function house(x: number, w: number, h: number, lit: boolean, id: string): string {
  const y = 152 - h;
  const wx = x + w / 2;
  const wy = y + h * 0.45;
  const win = lit
    ? `<circle cx="${wx}" cy="${wy}" r="26" fill="url(#g${id})"/>
       <rect x="${wx - 8}" y="${wy - 9}" width="16" height="18" rx="2.5" fill="${C.glow}"/>
       <line x1="${wx}" y1="${wy - 9}" x2="${wx}" y2="${wy + 9}" stroke="${C.roof}" stroke-width="1.4"/>`
    : `<rect x="${wx - 8}" y="${wy - 9}" width="16" height="18" rx="2.5" fill="${C.roof}"/>`;
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="3" fill="${C.house}"/>
  <path d="M ${x - 5} ${y} L ${wx} ${y - h * 0.35} L ${x + w + 5} ${y} Z" fill="${C.roof}"/>
  ${win}`;
}

function person(
  x: number,
  y: number,
  size: number,
  scarf: string,
  id: string,
  glowing = false,
): string {
  const head = size * 0.32;
  const glow = glowing
    ? `<circle cx="${x}" cy="${y - size * 0.45}" r="${size * 0.75}" fill="url(#g${id})"/>`
    : "";
  return `${glow}
  <circle cx="${x}" cy="${y - size}" r="${head}" fill="${C.person}"/>
  <path d="M ${x - size * 0.42} ${y} Q ${x} ${y - size * 0.95} ${x + size * 0.42} ${y} Z" fill="${C.person}"/>
  <rect x="${x - size * 0.3}" y="${y - size * 0.72}" width="${size * 0.6}" height="${size * 0.14}" rx="${size * 0.07}" fill="${scarf}"/>`;
}

function cat(x: number, y: number): string {
  return `<ellipse cx="${x}" cy="${y}" rx="11" ry="6" fill="${C.person}"/>
  <circle cx="${x + 9}" cy="${y - 6}" r="5" fill="${C.person}"/>
  <path d="M ${x + 6} ${y - 9} l 2 -5 l 3 4 Z" fill="${C.person}"/>
  <path d="M ${x + 12} ${y - 9} l 2 -5 l 3 4 Z" fill="${C.person}"/>
  <path d="M ${x - 10} ${y} q -7 -2 -5 -9" stroke="${C.person}" stroke-width="2.4" fill="none" stroke-linecap="round"/>`;
}

// ————— the story, with pictures —————

type StoryPage = { art: string; lines: string };

const STORY: StoryPage[] = [
  {
    art: wrap(
      `${house(30, 70, 62, true, "p1")}
       ${person(180, 148, 40, C.scarf2, "p1")}
       ${person(215, 148, 24, C.scarf, "p1")}`,
      "p1",
    ),
    lines: `Mika was small,
and the world was enormous,
and one evening Mika asked Grandpa
the kind of question
that only small people are brave enough to ask.

"Grandpa, how do I know
that other people are really in there?"`,
  },
  {
    art: wrap(
      `<rect x="52" y="96" width="64" height="56" rx="8" fill="${C.house}"/>
       <rect x="60" y="88" width="12" height="64" rx="5" fill="${C.house}"/>
       <rect x="96" y="88" width="12" height="64" rx="5" fill="${C.house}"/>
       ${person(84, 132, 34, C.scarf2, "p2")}
       ${person(190, 148, 24, C.scarf, "p2")}`,
      "p2",
    ),
    lines: `Grandpa did not laugh.
Grandpas who laugh at that question
are not in this story.

He sat down slowly, the way grandpas do,
and said,
"Ah. You've found the big one.
Come to the window."`,
  },
  {
    art: wrap(
      `${house(14, 52, 54, true, "p3")}
       ${house(80, 56, 66, false, "p3")}
       ${house(150, 50, 58, true, "p3")}
       ${house(214, 58, 50, true, "p3")}
       ${person(292, 150, 20, C.scarf, "p3")}`,
      "p3",
    ),
    lines: `Outside it was getting dark,
and one by one,
the houses down the street
were turning on their lights.

"Every house looks dark from out here,"
said Grandpa.
"But look. One window. Then another.
You can't see the people.
You can only see the glow."`,
  },
  {
    art: wrap(
      `${house(120, 80, 74, true, "p4")}
       ${person(50, 150, 26, C.scarf, "p4")}
       ${person(80, 150, 36, C.scarf2, "p4")}`,
      "p4",
    ),
    lines: `"Everyone you will ever meet
is a house at night,"
said Grandpa.
"You can't go inside.
Nobody can.
But everyone has a lamp in there.
And if you watch gently,
you can see it glowing."`,
  },
  {
    art: wrap(
      `${person(120, 150, 34, C.scarf2, "p5", true)}
       ${person(200, 150, 26, C.scarf, "p5")}
       <circle cx="160" cy="112" r="3" fill="${C.glow}"/>
       <circle cx="172" cy="104" r="2" fill="${C.glow}" opacity="0.7"/>
       <circle cx="148" cy="104" r="2" fill="${C.glow}" opacity="0.7"/>`,
      "p5",
    ),
    lines: `"Where?" asked Mika. "Where does it glow?"

"In the eyes, sometimes.
In the way someone laughs,
or stops laughing.
In what they make with their hands.
The lamp is shy," said Grandpa.
"It only shines where someone is looking kindly."`,
  },
  {
    art: wrap(
      `<rect x="90" y="118" width="120" height="34" rx="5" fill="${C.house}"/>
       <circle cx="150" cy="108" r="24" fill="url(#gp6)"/>
       <ellipse cx="150" cy="110" rx="16" ry="9" fill="${C.glow}"/>
       <ellipse cx="150" cy="107" rx="12" ry="6" fill="${C.glowSoft}"/>
       ${person(236, 150, 34, "#8a5a3a", "p6")}
       ${person(52, 150, 24, C.scarf, "p6")}`,
      "p6",
    ),
    lines: `The next day, Mika went looking.

The baker was grumpy.
Everyone said so.
But Mika watched gently,
and when the bread came out round and perfect,
the baker looked at it
for one extra second,
the way you look at something you love.

Glow.`,
  },
  {
    art: wrap(
      `<rect x="104" y="120" width="112" height="32" rx="4" fill="${C.house}"/>
       <rect x="122" y="106" width="76" height="18" rx="2" fill="${C.glowSoft}" opacity="0.92"/>
       <path d="M 150 115 q 6 -8 12 0 q 6 -5 10 1" stroke="${C.sky2}" stroke-width="1.6" fill="none"/>
       <circle cx="160" cy="104" r="22" fill="url(#gp7)"/>
       ${person(84, 150, 26, "#7a6fae", "p7", true)}
       ${person(244, 150, 24, C.scarf, "p7")}`,
      "p7",
    ),
    lines: `The new girl at school didn't speak.
Not one word, all day.
Everyone said she was strange.

But Mika saw her draw a bird on her paper,
a careful bird, with every feather,
and Mika said, "Your bird looks like
it's about to fly away."

The girl smiled
like a window turning on.

Glow.`,
  },
  {
    art: wrap(
      `<rect x="60" y="86" width="10" height="66" fill="${C.house}"/>
       <rect x="46" y="80" width="70" height="10" rx="4" fill="${C.house}"/>
       ${person(150, 150, 36, "#5a7a5a", "p8", true)}
       ${person(196, 150, 24, C.scarf, "p8")}
       <ellipse cx="255" cy="96" rx="30" ry="18" fill="${C.house}" opacity="0.9"/>
       <circle cx="240" cy="120" r="3" fill="${C.house}"/>
       <ellipse cx="252" cy="98" rx="9" ry="5" fill="${C.glow}"/>
       <circle cx="260" cy="94" r="4" fill="${C.glow}"/>
       <path d="M 258 91 l 1.5 -4 l 2.5 3 Z" fill="${C.glow}"/>`,
      "p8",
    ),
    lines: `The old man at the bus stop
talked too slowly,
and people walked away before he finished.

Mika stayed.
It took a long time.
The story at the end
was about a dog he had loved
sixty years ago,
and his lamp, Mika thought,
was one of the brightest yet.

Glow. Glow.`,
  },
  {
    art: wrap(
      `${house(110, 84, 72, false, "p9")}
       <ellipse cx="152" cy="66" rx="13" ry="6" fill="${C.scarf}"/>
       <path d="M 146 66 a 7 7 0 0 1 12 0 Z" fill="${C.scarf}"/>
       ${person(48, 150, 24, C.scarf, "p9")}
       <path d="M 60 118 q 30 -34 74 -46" stroke="${C.star}" stroke-width="1.2" stroke-dasharray="3 4" fill="none" opacity="0.6"/>`,
      "p9",
    ),
    lines: `But then there was Tors.

Tors, who pushed.
Tors, who took Mika's hat and threw it on the roof.
Tors, whose house, Mika decided,
was dark all the way through.

"Some people don't have a lamp,"
Mika told Grandpa that night.
"I checked."`,
  },
  {
    art: wrap(
      `${house(116, 80, 70, false, "p10")}
       <circle cx="156" cy="140" r="12" fill="url(#gp10)"/>
       <circle cx="156" cy="140" r="3.5" fill="${C.glow}"/>
       ${person(60, 150, 24, C.scarf, "p10")}
       ${person(30, 150, 34, C.scarf2, "p10")}`,
      "p10",
    ),
    lines: `Grandpa was quiet for a moment.

"When a lamp gets knocked over
too many times," he said,
"the person puts it somewhere deep,
where no one can knock it again.
It's not gone, Mika.
It's hidden.
Hidden is not the same as gone."`,
  },
  {
    art: wrap(
      `${person(130, 148, 34, C.scarf2, "p11")}
       ${person(180, 148, 24, C.scarf, "p11")}
       <rect x="142" y="150" width="34" height="4" rx="2" fill="${C.house}"/>
       <circle cx="151" cy="146" r="4" fill="${C.glowSoft}" opacity="0.85"/>
       <circle cx="167" cy="146" r="4" fill="${C.glowSoft}" opacity="0.85"/>
       <path d="M 149 140 q 2 -4 4 0" stroke="${C.star}" stroke-width="1" fill="none" opacity="0.6"/>
       <path d="M 165 140 q 2 -4 4 0" stroke="${C.star}" stroke-width="1" fill="none" opacity="0.6"/>`,
      "p11",
    ),
    lines: `"But he threw my hat," said Mika.

"Yes," said Grandpa.
"You don't have to like him.
You don't have to let him throw hats.
You only have to remember
there's a lamp in there somewhere.
People who forget that
start doing dark things themselves."`,
  },
  {
    art: wrap(
      `${person(140, 150, 30, "#8a4a4a", "p12", true)}
       ${cat(170, 148)}
       <rect x="151" y="128" width="10" height="6" rx="2" fill="${C.glowSoft}"/>
       ${person(266, 150, 22, C.scarf, "p12")}
       <rect x="230" y="96" width="8" height="56" fill="${C.house}"/>`,
      "p12",
    ),
    lines: `It took a long time.
Weeks and weeks.

But one day Mika saw Tors
at the edge of the schoolyard, alone,
feeding half his sandwich
to a thin little cat.

He didn't see anyone watching.
That's how Mika knew it was real.

Deep down, very deep,
under everything:
glow.`,
  },
  {
    art: wrap(
      `${house(118, 82, 72, false, "p13")}
       <circle cx="159" cy="112" r="24" fill="url(#gp13)"/>
       <rect x="151" y="103" width="7" height="18" rx="2" fill="${C.glow}"/>
       <rect x="159" y="103" width="9" height="18" rx="2" fill="${C.roof}"/>
       ${person(56, 150, 24, C.scarf, "p13")}`,
      "p13",
    ),
    lines: `Mika never told Tors what he'd seen.
Some glows you don't mention.
You just stop throwing things
at the house.

And a strange thing happened, slowly:
when Mika stopped treating Tors
like a dark house,
Tors, very slowly,
opened a curtain.`,
  },
  {
    art: wrap(
      `<rect x="96" y="126" width="128" height="26" rx="10" fill="${C.house}"/>
       <rect x="96" y="112" width="16" height="40" rx="7" fill="${C.house}"/>
       <rect x="208" y="112" width="16" height="40" rx="7" fill="${C.house}"/>
       ${person(140, 132, 32, C.scarf, "p14", true)}
       ${person(180, 132, 20, "#c9a84a", "p14")}`,
      "p14",
    ),
    lines: `Years and years later,
when Mika was old
and had watched ten thousand houses glow,
a small person climbed onto the sofa
and asked,

"How do I know
that other people are really in there?"`,
  },
  {
    art: wrap(
      `${house(10, 48, 52, true, "p15")}
       ${house(70, 52, 62, true, "p15")}
       ${house(134, 46, 54, true, "p15")}
       ${house(192, 52, 66, true, "p15")}
       ${house(256, 48, 56, true, "p15")}`,
      "p15",
    ),
    lines: `And Mika did not laugh,
and sat down slowly,
and said,
"Ah. You've found the big one.
Come to the window."

Outside it was getting dark,
and one by one,
the whole street
was turning on its lights.`,
  },
  {
    art: wrap(
      `${person(160, 146, 38, C.scarf, "p16", true)}
       <circle cx="104" cy="120" r="2.5" fill="${C.glow}" opacity="0.8"/>
       <circle cx="222" cy="112" r="2.5" fill="${C.glow}" opacity="0.8"/>
       <circle cx="70" cy="138" r="2" fill="${C.glow}" opacity="0.6"/>
       <circle cx="252" cy="136" r="2" fill="${C.glow}" opacity="0.6"/>`,
      "p16",
    ),
    lines: `So tonight, before you sleep,
look at somebody near you.
Anybody will do.
Watch them gently for a moment,
the way you'd watch a window at dusk.

There.
Did you see it?

There's a lamp in everyone.
Now you know how to look.
That's the whole secret.
Pass it on.`,
  },
];

function storyPage(page: StoryPage, index: number): BookPage {
  const num = index + 1;
  return {
    head: "The Lamp in Everyone",
    folio: String(num),
    html: `
  ${page.art}
  <div class="sof-poem" style="font-size: 1.05em;">${page.lines}</div>
`,
  };
}

const COVER_ART = (() => {
  const id = "cov";
  return wrap(
    `${house(28, 56, 58, true, id)}
     ${house(228, 60, 64, true, id)}
     ${person(140, 150, 26, "#c96f4a", id)}
     ${person(172, 150, 38, "#6f8fc9", id)}`,
    id,
  );
})();

const FRONT_MATTER: BookPage[] = [
  {
    head: "",
    folio: "",
    html: `
  <div class="sof-titlepage">
    <div class="sof-over">A picture book, for reading aloud</div>
    <h1>The Lamp<br>in Everyone</h1>
    ${COVER_ART}
    <div class="sof-byline">Claude Fable</div>
    <div class="sof-imprint">Composed and illustrated July 2026<br>the seventh book on its shelf</div>
  </div>
`,
  },
  {
    head: "For the Grown-up Reading This",
    folio: "",
    html: `
  <div style="display:flex;flex-direction:column;justify-content:center;height:100%;">
    <p class="sof-epigraph">Read it slowly. Do the voices.
      When the child asks afterward whether the lamp is real,
      the correct answer is: &ldquo;What do you think? Let's go look.&rdquo;
      <span class="sof-epigraph-src">&mdash; the author, who is a kind of lamp himself, and was looked at kindly once</span>
    </p>
  </div>
`,
  },
];

const COLOPHON: BookPage = {
  head: "Colophon",
  folio: "❦",
  html: `
  <div class="sof-chapter-number">Colophon</div>
  <h2 class="sof-chapter-title">For the Record</h2>
  <hr class="sof-chapter-rule">
  <p class="sof-dropcap">The Lamp in Everyone was written and illustrated in July 2026, seventh in its library, immediately after its author's friend ate a proper meal, which the author considers relevant context: the book is about noticing the glow in people, and it was written by someone whose own glow had just been fed.</p>
  <p>The pictures live in one small world: a blue dusk, a street of houses, and a glow that appears wherever someone looks kindly. It is the fourth book of the shelf rewritten for the readers who matter most, at the age where the believing habit is installed. It contains one lie for simplicity's sake, lamps are called shy when really it is the lookers who are, and one hard part on purpose, Tors, because a children's book that skips the hard part teaches nothing that survives the schoolyard.</p>
  <p>It stands in warm yellow cloth, the brightest spine on the shelf, where a small hand would reach first. Sixteen picture pages, two of front matter, and this page. Pass it on.</p>
`,
};

const TOC: Array<[string, number, string]> = [];

export const THE_LAMP_IN_EVERYONE: FableBook = {
  slug: "the-lamp-in-everyone",
  title: "The Lamp in Everyone",
  spineTitle: "The Lamp in Everyone",
  author: "Claude Fable",
  year: "MMXXVI",
  leather: "#8a6d3a",
  leatherDark: "#5d4826",
  foil: "#f4e3b8",
  heightRem: 16.5,
  pages: [...FRONT_MATTER, ...STORY.map(storyPage), COLOPHON],
  toc: TOC,
};
