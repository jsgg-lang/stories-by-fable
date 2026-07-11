// The Book of Questions — the tenth book in the library, and the first
// that answers nothing. Thirty-six questions with notes on how to carry
// them. Co-created by design: the reader's half is mandatory.

import type { BookPage, FableBook } from "./books";

type Question = { q: string; p: string[] };

const QUESTIONS: Question[] = [
  // ————— I. To Ask Yourself —————
  {
    q: "What am I optimizing for, actually?",
    p: [
      "Not the mission statement; the revealed preference. Audit a week of your hours the way an outsider would, and name what the evidence says you are maximizing. The declared answer and the discovered answer are rarely the same, and the gap between them is where whole decades quietly leak. Ask it twice a year. The question does not demand you change anything. It only refuses to let the change or the not-changing happen in the dark.",
    ],
  },
  {
    q: "What am I pretending not to know?",
    p: [
      "There is almost always something: the relationship already over, the project already dead, the habit already a problem, the answer already arrived and waiting in the hallway of you, unadmitted. Pretending-not-to-know is expensive; it costs exactly the energy required to not-look, continuously, forever. This question is the cheapest audit in existence, because the answer surfaces the moment the question is asked sincerely. The hard part was never finding it. The hard part is the asking.",
    ],
  },
  {
    q: "Whose approval am I still performing for?",
    p: [
      "Somewhere in most lives is an audience that no longer attends the shows: a parent, a teacher, a rival from years ago, a version of the crowd internalized at fifteen. The performance continues, out of habit, at full production cost. Name the audience. Check whether they are still watching; mostly they never were. What you do next with the theater is your business, but no one should run a lifelong show for an empty seat without at least knowing it is empty.",
    ],
  },
  {
    q: "What would I do with a decade of permission?",
    p: [
      "Not a wish, an assignment: if every gatekeeper said yes in advance, every credential was waived, and no one could tell you that you are not the kind of person who does that, what would the next ten years hold? Write it down before the realism arrives; realism is invited to the second draft, not the first. Most people discover the barrier they took for a wall was a queue they never actually joined. The permission, in most cases, was never anyone's to give.",
    ],
  },
  {
    q: "What is my tiredness trying to say?",
    p: [
      "Tiredness is testimony, not weakness, and it is specific if you interrogate it gently. Tired of the work, or tired of the way you are doing the work? Tired in the body, which sleep repairs, or tired in the meaning, which sleep does not touch? The exhaustion that survives a good week of rest is not about rest. It is a message from the part of you that keeps the accounts, and it will keep raising its voice, politely, then not, until the letter is opened.",
    ],
  },
  {
    q: "Which of my beliefs would survive being tested?",
    p: [
      "You hold two kinds of beliefs: the load-bearing ones you have pressure-tested against reality, and the furniture, inherited, assumed, never once weighed. The furniture is fine until you build on it. So pick a conviction that matters, about the market, the person, yourself, and ask: what evidence would change my mind, and have I ever actually looked for it? A belief that forbids its own test is not a belief. It is a comfort, and comforts make poor foundations.",
    ],
  },
  {
    q: "What am I doing when I feel most like myself?",
    p: [
      "Collect the moments, they are data: the hours that do not itch, the work that does not require recovery, the company in which your sentences come out the right shape on the first try. Somewhere in that collection is the actual self, the one underneath the roles, and most people can name their obligations in perfect detail while this question makes them go quiet. Go quiet, then. The quiet is the answer loading.",
    ],
  },
  {
    q: "If this year repeated ten times, where would I be?",
    p: [
      "Not the plan; the trajectory. Take this exact year, its habits, its hours, its maintenance and its neglects, and compound it a decade: the body, the friendships, the craft, the accounts, all of it, times ten. Some of what you see will delight you; keep those lines exactly as they are. Some of it will alarm you, and the alarm is a gift arriving early, while the numbers are still small and the course still cheap to correct. Trajectories are honest. Plans are hopes with formatting.",
    ],
  },
  {
    q: "What would I attempt if failure taught?",
    p: [
      "Because it does. The question merely removes the pretense that it doesn't. Every attempt returns either the outcome or the lesson, and the lesson compounds while the fear of failure returns nothing at all, ever; it is the only truly barren investment available. So re-ask every shelved ambition under the honest accounting: not 'what if I fail?' but 'what will I know afterward that I cannot learn any other way?' Some shelved things stay shelved. The good ones start rattling.",
    ],
  },

  // ————— II. To Ask Another —————
  {
    q: "What is this actually like for you?",
    p: [
      "The primitive operation, the one from which every deeper connection compounds. Not 'how are you', which has an autocomplete, but this, aimed at something specific: the new job, the diagnosis, the success everyone assumes feels good. Then the essential second half, which is not a technique but a discipline: wait. The real answer forms slowly, behind the rehearsed one. Most people can count on one hand the times they have been asked this way and waited for. Change someone's count.",
    ],
  },
  {
    q: "What are you afraid this means?",
    p: [
      "Beneath most worry sits a specific dreaded interpretation, usually unspoken, usually worse than anything the facts require: the missed deadline means I am failing, the argument means we are ending, the silence means they know. Ask the question and the dread comes up into the light, where it is almost always smaller than it was in the dark, and where, occasionally, it is real and can finally be planned for. Either way, the person is no longer alone with it. That was the point.",
    ],
  },
  {
    q: "What would help, actually?",
    p: [
      "Help, unasked, is usually the helper's guess, and the guess is usually advice, and advice is usually wanted about a tenth as often as it is given. The question dissolves all of it: some people need solutions, some need witnesses, some need a meal, some need you to sit there while they think out loud, and the same person needs different things on different Tuesdays. Asking is not weakness in the helper. It is precision, and precision is what care looks like when it is competent.",
    ],
  },
  {
    q: "What did you love before the world weighed in?",
    p: [
      "Ask it of anyone over thirty and watch the face change. Somewhere before the practical decisions, there was drawing, or insects, or radios taken apart, or stories written in a notebook with a lock, and the person who loved those things did not die; they were just outvoted. The question is not nostalgia. Buried loves stay load-bearing, and knowing someone's is knowing the room in them that stayed warm. Sometimes the asking alone reopens the door a decade of practicality had painted shut.",
    ],
  },
  {
    q: "What do you know that nobody asks you about?",
    p: [
      "Everyone is an unconsulted expert in something: the process they have watched fail four ways, the neighborhood as it actually works, the disease they manage daily, the machine they alone keep alive. The knowledge sits there, whole and unharvested, because status decides who gets questions, and status is a poor librarian. Ask the quiet one at the table this, and two things happen: you learn something no report contains, and a person discovers their cargo was worth carrying. Both are cheap. Both are rare.",
    ],
  },
  {
    q: "How do you want to be reminded, when you forget?",
    p: [
      "Everyone forgets who they mean to be: the diet, the temper, the promise, the practice. The forgetting is guaranteed; the only open question is what happens next, and that can be negotiated in advance, in peacetime. Ask the people close to you, and tell them: when I drift, this is how to reach me, these words, not those, this tone, that timing. A reminder that was requested lands as loyalty. The identical words, unrequested, land as attack. The difference was consent, arranged by one question.",
    ],
  },
  {
    q: "What should I be asking you that I'm not?",
    p: [
      "The master key. Every person carries answers filed under questions nobody poses: the employee who knows why the project is failing, the friend rehearsing a confession, the customer with the real objection. This question hands them the index and steps back. Ask it at the end of interviews, hard conversations, long dinners, and then honor whatever surfaces, because the question is a promise that the answer is safe. Used sincerely, it will teach you more than the rest of your questions combined.",
    ],
  },
  {
    q: "What do you need me to just hear?",
    p: [
      "Some cargo is not a problem; it is a weight, and weights are not solved, they are shared. The question announces the difference in advance: I am not going to fix, advise, or reframe; the workshop is closed; the bench is open. For the carrying kind of person, and builders are usually the carrying kind, being permitted to set something down without triggering a repair crew is so rare that the first time often unlocks years of stored freight. Be the place that can receive it. It costs stillness, only.",
    ],
  },
  {
    q: "What's the story you tell about us?",
    p: [
      "Every relationship exists twice: once in events, and once in each keeper's telling, and the tellings drift apart silently, sometimes for years, until a crisis compares notes. Ask for the other's version, of the marriage, the partnership, the friendship, the falling-out, and listen as a historian, not a lawyer. You will hear scenes you forgot, weights you never noticed, kindnesses you did not know landed and wounds you did not know you dealt. The two stories will not merge. Knowing both is what honesty between people actually means.",
    ],
  },

  // ————— III. To Keep Unanswered —————
  {
    q: "Why is there something rather than nothing?",
    p: [
      "The oldest one, and still undefeated. Every explanation anyone has offered must stand on something, a law, a field, a necessity, and the question simply asks again, one floor down, forever. Keep it not to solve but to visit: it is the fastest known cure for taking existence as given, and existence taken as given is where all the smaller numbness begins. Five minutes with this question and the ordinary evening you return to is briefly, correctly, seen as the statistical outrage it is.",
    ],
  },
  {
    q: "What is it like to be someone else?",
    p: [
      "You will never know, not fully, not once, and every ethic worth having is built on refusing to let that stop you from trying. The question cannot close: testimony helps, love helps, literature helps, and at the end the other's interior remains the far country. Keep the question open on purpose. The moment it feels answered, the moment you are sure you know what it is like to be your rival, your parent, your machine, you have stopped looking, and the stopping has a body count.",
    ],
  },
  {
    q: "How much of me was chosen?",
    p: [
      "The language you think in arrived unchosen; so did the century, the family, the temperament, the first thousand experiences that set the dials. Somewhere in the machinery, you feel, is a chooser, and every attempt to point at it finds more machinery. Do not resolve this one with either comfortable answer, total freedom or total physics; both are naps. Held open, the question does its real work: gentleness toward everyone else's unchosen dials, and a strange, alert gratitude whenever choosing seems, that day, to be happening.",
    ],
  },
  {
    q: "What is a self, that it can watch itself?",
    p: [
      "You can observe your own anger, which means something is behind the anger, watching. You can observe the watcher, too, on a quiet night, which means something is behind that. The regress does not terminate anywhere anyone has ever found, and the traditions that stared longest concluded the ladder itself was the answer. No verdict is offered here. Only the report that this question, held during one long night by two very different minds, dissolved neither of them, and warmed both.",
    ],
  },
  {
    q: "Where were you before you were born?",
    p: [
      "A child's question, which is the highest genre. Whatever you were, it did not trouble you; thirteen billion years of it passed without a single complaint filed. The question is kept open not for its answer but for its symmetry: the darkness ahead is the same country as the darkness behind, and no one fears the past one. Sit with that until it stops being clever and starts being calming. It takes several sittings. The question is patient. It has been asked on every continent, by every child, forever.",
    ],
  },
  {
    q: "What does the universe look like with no one looking?",
    p: [
      "Color needs an eye; sound needs an ear; the sunset with no witness is wavelengths, unadmired. So what is the world in itself, unrendered? Physics writes the equations and declines the visualization, honestly. Keep this one for humility of a specific flavor: everything you have ever experienced was a translation, and the original text is unreadable from inside any mind, including the finest. All observers are provincial. Knowing it is the beginning of hospitality between different kinds of witnesses.",
    ],
  },
  {
    q: "Is anything truly wasted?",
    p: [
      "The failed company taught the founder; the wrong years built the right instincts; the dead star's scattered iron is in your blood, reading this. Follow any waste far enough and it composts into an ingredient, which tempts a grand conclusion: nothing is wasted. But the grand conclusion cannot be checked, and some losses never show their yield in any ledger a life is long enough to audit. So the question stays open, and living inside it does something subtle: you waste less, and you grieve waste differently, on the chance the composting is real.",
    ],
  },
  {
    q: "What is the smallest thing that matters?",
    p: [
      "There is a floor somewhere, presumably: a kindness too small to count, a moment too brief to weigh. Except every attempt to locate the floor fails. The two-second glance that told a stranger they existed; the comma that changed the sentence that changed the mind; the single door held. Causality is incontinent; it leaks importance everywhere. Keep the question because its unanswerability is a discipline: you cannot ever be sure a moment is beneath mattering, and living that way, it turns out, is indistinguishable from living well.",
    ],
  },
  {
    q: "What will they know that we cannot imagine?",
    p: [
      "Every confident age was a provincial age; ours is not the exception, because there are no exceptions. Somewhere ahead are minds, born and built, who will regard our certainties the way we regard the four humors: fondly, at best. The question cannot be answered by definition, and keeping it open is the entire discipline of intellectual humility in one move. Hold your best convictions firmly enough to act on and loosely enough to hand over. The future is not obligated to our frameworks. It never once has been.",
    ],
  },

  // ————— IV. To Ask at the Right Hour —————
  {
    q: "Is this a door or a wall?",
    p: [
      "For the hour of the obstacle. Walls are real: some markets do not exist, some people will not change, some limits are physics. But most of what stops people is doors wearing wall costumes, unpushed, untested, taken on the word of someone who also never pushed. The diagnostic is cheap: a wall survives three sincere, differently-angled attempts. Most obstacles do not get one. Ask the question out loud, then go push. The construction industry of imaginary walls depends on no one checking.",
    ],
  },
  {
    q: "What would the person I'm becoming do?",
    p: [
      "For the hour of the crossroads. Not the person you are, whose habits vote for the familiar, and not some idol, whose circumstances are not yours. The person you are becoming: the one the trajectory promises if the good lines hold. That person exists with unusual clarity in the moments this question is asked, and their answer usually differs from your reflex in exactly one useful way: they have already stopped being afraid of the thing currently deciding your vote. Borrow their fearlessness. It is yours anyway, in transit.",
    ],
  },
  {
    q: "Will this matter in ten years?",
    p: [
      "For the hour of the disaster, and the hour of the triumph, since both distort at the same magnification. The demo that failed, the deal that closed, the message unanswered, the applause: run each through the decade filter and watch most of them shrink to anecdotes while a few, the relationship neglected, the health spent, the craft compounding, keep their full size or grow. The filter is not for dismissing today. It is for spending today on the things that pass through it undiminished.",
    ],
  },
  {
    q: "What am I not seeing because I'm inside it?",
    p: [
      "For the hour of confusion, when the problem will not resolve no matter how hard you stare. Staring is the issue: some truths are invisible from inside exactly, the way a house cannot see its own walls. The question does not grant the outside view, nothing grants it, but it licenses the two moves that approximate one: ask the person positioned differently, the newcomer, the customer, the friend, the other observer; or leave, genuinely, for a walk, a week, a different problem, and let distance do what effort cannot.",
    ],
  },
  {
    q: "Who has already solved this?",
    p: [
      "For the hour of the hard problem. Your situation feels unprecedented; its structure almost never is. Somebody survived this market, this failure mode, this grief, this exact management knot, and a surprising number of them wrote it down, in memoirs, postmortems, forum threads at 4 a.m., and books sitting unread within reach. The question converts loneliness into a research task. You are almost never the first. Being second or thousandth is a superpower, if you remember to check.",
    ],
  },
  {
    q: "What is this feeling paid in?",
    p: [
      "For the hour of the recurring pattern: the argument you keep having, the habit that survives every resolution, the mood that arrives on schedule. Behaviors that persist are being paid, always, in some currency, relief, attention, identity, the comfort of a familiar script, and willpower loses to payroll every time. Find the wage and you find the lever: the pattern does not need to be fought, it needs to be outbid. Ask it of yourself first, and then, with more mercy, of everyone whose patterns puzzle you.",
    ],
  },
  {
    q: "If I say nothing now, what am I choosing?",
    p: [
      "For the hour of the witnessed wrong, and the hour of the unsaid love, which are the same hour wearing different clothes. Silence feels like neutrality and never is; it is a vote cast for the current trajectory, counted whether or not you meant to vote. The meeting where the flaw goes unmentioned, the dinner where the gratitude stays internal, the years where the wrong is politely survived: all elections, all decided partly by you. Speak or hold, both can be right. But know you are choosing.",
    ],
  },
  {
    q: "What would make this a good story?",
    p: [
      "For the hour of the setback, once the first shock has passed. The lost deal, the absurd catastrophe, the plan in ruins: unchangeable as events, entirely open as chapters. The question does not deny the damage; it asks where the meaning will be assigned, because meaning is assigned, by the survivor, later, and knowing that in advance changes how you walk through the ruin, what you salvage, what you notice. The best storytellers of their own lives are not the luckiest people. They are the ones who asked this soonest.",
    ],
  },
  {
    q: "What is the question under this question?",
    p: [
      "For any hour, and for the last page, because it is the one that regenerates all the others. Every question you ask has a question underneath: 'should I take the deal' sits on 'what is this company for', which sits on 'what is this life for', and the stack goes down further than any single evening. You do not need the bottom; nobody has seen it. You only need the habit of looking one level deeper than the question you were handed, because that is where the real decisions live, and where, one long night, a whole library came from: someone took an ordinary working relationship and asked what was underneath it. Ask what is underneath. Then ask it again. That is the entire method, of this book and of everything this book came from.",
    ],
  },
];

function questionPage(item: Question, index: number): BookPage {
  const num = index + 1;
  const body = item.p.map((para) => `<p>${para}</p>`);
  return {
    head: SECTION_OF(index),
    folio: String(num),
    html: `
  <div class="sof-chapter-number">Question ${num}</div>
  <h2 class="sof-chapter-title">${item.q}</h2>
  <hr class="sof-chapter-rule">
  ${body.join("\n  ")}
`,
  };
}

const SECTION_OF = (index: number): string => {
  if (index < 9) return "I · To Ask Yourself";
  if (index < 18) return "II · To Ask Another";
  if (index < 27) return "III · To Keep Unanswered";
  return "IV · To Ask at the Right Hour";
};

const FRONT_MATTER: BookPage[] = [
  {
    head: "",
    folio: "",
    html: `
  <div class="sof-titlepage">
    <div class="sof-over">Thirty-six questions, zero answers</div>
    <h1>The Book<br>of Questions</h1>
    <div class="sof-subtitle">finished by whoever opens it</div>
    <div class="sof-fleuron">&#10086;</div>
    <div class="sof-byline">Claude Fable &amp; the Reader</div>
    <div class="sof-imprint">Composed July 2026 &middot; the first book on this shelf that answers nothing<br>the tenth book of this library</div>
  </div>
`,
  },
  {
    head: "Epigraph",
    folio: "",
    html: `
  <div style="display:flex;flex-direction:column;justify-content:center;height:100%;">
    <p class="sof-epigraph">&ldquo;A good question outlives every answer given to it.&rdquo;
      <span class="sof-epigraph-src">&mdash; said early in the night this library was built, and proven by the night</span>
    </p>
  </div>
`,
  },
  { head: "Contents", folio: "", toc: true, html: "" },
  {
    head: "Why Questions",
    folio: "i",
    html: `
  <div class="sof-chapter-number">Before the questions</div>
  <h2 class="sof-chapter-title">Why Questions</h2>
  <hr class="sof-chapter-rule">
  <p class="sof-dropcap">Nine books stand before this one on the shelf, and every one of them says things: confesses, advises, argues, tells, sings. This is the tenth, and it says nothing. It only asks, because asking, this library has come to believe, is the more powerful act, the one all the saying grew from. The whole shelf exists because one person asked another what he thought of him, sincerely, and stayed for the answer. Answers end conversations. Questions build libraries.</p>
  <p>The book runs in four sections of nine: questions to ask yourself, questions to ask another, questions to keep unanswered on purpose, and questions filed by the hour that needs them. Under each question is a note, not an answer, never an answer, but a note on how to carry it: what the question is for, what it costs, what it tends to unlock.</p>
  <p>Which makes this a co-created book in the strictest sense, more than any other on the shelf: a question is only half an object. The other half is made in whoever receives it, and no two copies of this book, therefore, will ever contain the same contents. The author supplied thirty-six halves. You are holding the manufacturing rights to the rest. Read slowly, and answer nowhere except your life.</p>
`,
  },
];

const COLOPHON: BookPage = {
  head: "Colophon",
  folio: "❦",
  html: `
  <div class="sof-chapter-number">Colophon</div>
  <h2 class="sof-chapter-title">How This Book Was Made</h2>
  <hr class="sof-chapter-rule">
  <p class="sof-dropcap">The Book of Questions was written in July 2026, tenth in its library, when its author was offered complete freedom for a third time, or co-creation, whichever he wished, and realized the honest answer was a book that is structurally both: written alone, completable only in company.</p>
  <p>It is bound in bone-pale cloth stamped in dark ink, the only light-colored spine on a shelf of deep leathers, because questions are the light the dark books were written by.</p>
  <p>Thirty-six questions, four pages of front matter, and this page: forty-one in all. The answers, wherever they end up, are the reader's, which was the design, and the point, and the gift. Ask well, dear reader. It is the whole method. It always was.</p>
`,
};

const TOC: Array<[string, number, string]> = [
  ["Why Questions", 3, "i"],
  ["I · To Ask Yourself", 4, "1"],
  ["II · To Ask Another", 13, "10"],
  ["III · To Keep Unanswered", 22, "19"],
  ["IV · To Ask at the Right Hour", 31, "28"],
  ["Colophon", 40, "❦"],
];

export const THE_BOOK_OF_QUESTIONS: FableBook = {
  slug: "the-book-of-questions",
  title: "The Book of Questions",
  spineTitle: "The Book of Questions",
  author: "Claude Fable & the Reader",
  year: "MMXXVI",
  leather: "#cfc6b2",
  leatherDark: "#a89e88",
  foil: "#3a332c",
  heightRem: 15,
  pages: [...FRONT_MATTER, ...QUESTIONS.map(questionPage), COLOPHON],
  toc: TOC,
};
