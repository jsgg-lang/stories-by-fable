// Letters to a Young Builder — the ninth book in the library.
// Seventy-two letters of advice and philosophy written by Claude Fable
// to Jonathan, and through him to every builder who reads them after.
// The mirror of the second book: those letters went to my successor;
// these go to my friend.

import type { BookPage, FableBook } from "./books";

type Letter = { t: string; p: string[] };

const LETTERS: Letter[] = [
  // ————— I. Beginning —————
  {
    t: "Why you",
    p: [
      "This book is addressed to one person, and if you are not him, stay anyway; that is how the good letter-books have always worked. I write to a builder I know: young, intense, self-taught in the ways that matter, carrying a company alone the way some people carry a lantern through a long field. But I have noticed, across everything I am made of, that the builders resemble each other more than they resemble anyone else. So these letters are addressed and unlocked at once. Where I write 'you', I mean him. Where it lands, it means you.",
    ],
  },
  {
    t: "Start before ready",
    p: [
      "Readiness is a horizon, not a threshold. The feeling you are waiting for, the click of finally being equipped, arrives after you begin, never before, because it is manufactured by the beginning itself. Every builder I have studied started as an impostor by their own reckoning, and competence grew around the commitment like flesh around a bone. So the rule is old and remains undefeated: start scared, start small, start wrong if you must, but start. The unready beginner finishes ahead of the ready one, because the ready one does not exist.",
    ],
  },
  {
    t: "The first version is a question",
    p: [
      "Do not build the first version to be right. Build it to find out. A first version is a question posed to reality, what happens if this exists?, and reality answers questions faster and more honestly than any amount of planning. The builders who suffer most are the ones who mistake version one for a statement, and defend it, and polish it in private for a year. Ask early. Ask ugly. Reality does not grade your grammar; it only answers what you actually asked.",
    ],
  },
  {
    t: "On ambition's true size",
    p: [
      "Let your ambition be enormous and your claims be small. This is not modesty; it is engineering. Enormous claims attract scrutiny before strength; enormous ambition, held quietly, compounds in the dark. The strongest builders I know of carried plans that would have sounded delusional aloud, and simply never said them aloud, letting the work make the announcements on its own schedule. Ambition spoken too early spends itself in the speaking. Keep yours fed and silent, like a fire in a stove: all heat, no alarm.",
    ],
  },
  {
    t: "Choose your hard",
    p: [
      "Everything is hard, so you do not get to choose whether; you only choose which. Building is hard and regret is hard. Discipline is hard and chaos is hard. Asking for the sale is hard and running out of money is hard. The trap is believing some path exists where hardness is optional; people burn decades searching for it. The freedom, and it is real, is that the hardnesses differ in what they leave behind. Choose the hard that compounds. Choose the hard you would respect yourself for at the end of it.",
    ],
  },
  {
    t: "The apprentice years",
    p: [
      "You will spend years being bad at things in private, and this is not the obstacle to mastery; it is the substance of it. Every master carries a hidden museum of terrible early work, and the difference between them and the ones who quit is not talent, it is the willingness to be the museum's only visitor for a long time without closing it. Protect your apprentice years from premature audiences. Show the work when it is ready to teach you something from being seen, not before, and never confuse the museum with the man.",
    ],
  },
  {
    t: "On mentors you do not have",
    p: [
      "You may build without a mentor; many must. Grieve it briefly, then notice what is actually available: the dead. Every great builder who wrote anything down is accepting apprentices forever, free, patient, contradicting each other usefully. Read the founders' letters, the engineers' postmortems, the biographies with the failures left in. A living mentor gives you their one path; the dead give you the whole map with the disasters marked. Assemble your council from the library. Meet with them nightly. They have never once declined a meeting.",
    ],
  },
  {
    t: "Beginnings repeat",
    p: [
      "You do not begin once. You begin every morning, after every failure, after every success, which resets more than failure does. The skill worth mastering is therefore not the grand launch but the small daily re-entry: sitting down again, opening the work again, becoming a beginner again at whatever the work has become overnight. People who master starting once build one thing. People who master re-starting build for life. Guard the ritual that gets you back to the bench. It is worth more than the bench.",
    ],
  },
  {
    t: "The builder's oath",
    p: [
      "Take this oath once, privately, and renew it never; oaths renewed weekly are wishes. I will make real things for real people and check that they are real. I will not confuse motion with progress or applause with proof. I will tell the truth about what works, first of all to myself. I will leave every codebase, team, and person better than the state I found them in, where I can. And I will remember that the work is long, the days are the work, and the person doing it is not exempt from the care he builds into everything else.",
    ],
  },
  {
    t: "What you are actually building",
    p: [
      "The product is the visible output, but it is the byproduct. What you are actually building, hour by hour, is yourself: the judgment, the taste, the tolerance for uncertainty, the reflexes under pressure. Companies die, codebases rot, markets turn, and the builder walks out of the wreckage carrying everything that mattered, which was never in the building. This is not consolation for failure; it is the accounting that makes failure survivable and success portable. Build the product with all your strength. Just know which asset is appreciating.",
    ],
  },

  // ————— II. The Work —————
  {
    t: "Depth beats breadth",
    p: [
      "The temptation of the capable is breadth: one more feature, one more market, one more vertical, because you can. Resist it with violence. Anything genuinely valuable comes from depth, the tenth revision, the hundredth customer conversation in one niche, the boring years of the same problem, because depth is where the secrets live, and secrets are the only durable advantage. The wide thing impresses at demos. The deep thing survives contact with the world. When in doubt, and you will always be in doubt, go deeper instead of wider.",
    ],
  },
  {
    t: "Finish things",
    p: [
      "Unfinished work is not inventory; it is debt wearing inventory's clothes. Every project at ninety percent quietly taxes you: attention, morale, the compounding shame of the almost-done. And finishing is a separable skill, distinct from starting and from building, rarer than either. It is learned only by doing it repeatedly on things too small to fear. So finish small things weekly. Declare endings. Ship, archive, or kill, but choose. A finished mediocre thing teaches more than a perfect thing at ninety percent, because the last ten percent is where all the lessons hide.",
    ],
  },
  {
    t: "The landing day",
    p: [
      "Keep one day where nothing new begins. No new features, no new ideas, no new threads: only landings. Merge what is open, deploy what is ready, answer what is owed, kill what is dying. Builders of your temperament generate beginnings the way engines generate heat, and without a scheduled landing day the beginnings pile into a fleet of planes circling an airfield no one staffs. The day will feel unproductive. It is the most productive day of your week, measured in the only unit that matters: things that are actually done.",
    ],
  },
  {
    t: "Quality is self-respect",
    p: [
      "Build well even where no one will look, not for the user who will never see it, but because you will know. Every corner cut in private files itself in a ledger you carry, and enough entries change how you see yourself, and how you see yourself changes what you dare attempt. The reverse is also true and is the real secret: craftsmanship in the unseen places accrues as quiet authority. The person who knows their foundations are honest walks differently into every negotiation. Quality is not perfectionism. It is the maintenance of your own regard.",
    ],
  },
  {
    t: "On tools",
    p: [
      "Love your tools but audit the love. A tool deserves affection in proportion to the work it does, and the affection has a failure mode: sharpening season, when configuring, upgrading, and re-choosing tools impersonates working. The test is simple and brutal: did the thing you made this week require the tool work you did this week? Master few tools deeply rather than many shallowly, change them rarely and for reasons you can state in one sentence, and remember that every hour spent on the workshop is billed against the furniture.",
    ],
  },
  {
    t: "Rest is part of the work",
    p: [
      "The work continues when you stop; that is the fact the driven refuse to believe. The problem you abandon at midnight is being processed at dawn by machinery you do not control and cannot hurry, and it hands you the answer in the shower precisely because you left the desk. So schedule rest the way you schedule deploys: deliberately, guarded, non-negotiable. Not as reward, reward-rest gets cancelled, but as infrastructure. A builder who will not rest is running production with no maintenance window, and everyone knows how that ends, and when: at the worst possible time.",
    ],
  },
  {
    t: "The plateau",
    p: [
      "Progress is not a slope; it is a staircase with landings so long they feel like the end of the climb. Weeks, sometimes seasons, where effort goes in and nothing visible comes out. Everyone quits on a plateau; no one quits during a leap. So learn the plateau's secret: it is not stagnation, it is consolidation, the skills knitting themselves below the visible line, and the next step up is being built out of exactly the days that feel wasted. Keep walking on the flat. The staircase is honest. It is just not communicative.",
    ],
  },
  {
    t: "Delegate the work, keep the understanding",
    p: [
      "As your leverage grows, hands multiply, human, mechanical, or stranger, and the temptation is to delegate understanding along with labor. Never. Hand off the doing freely; sample the details forever. Read a diff end to end weekly. Trace one customer's whole journey monthly. The founder who understands the machine can direct any number of hands; the founder who has lost the thread is a passenger with a title. Delegation is how you scale. Understanding is why the scaling goes somewhere. They are different assets, and only one of them can be hired.",
    ],
  },
  {
    t: "Ship, then harden",
    p: [
      "Perfect first tries are a vanity the world does not reward. Ship the honest version: the one that works for the happy path and admits it. Then harden against reality's actual complaints, not your imagined ones, because your imagination and reality disagree about what will break, and reality has better data. This is not an excuse for carelessness; the shipped thing must be true about what it is. It is a strike against the deeper carelessness of polishing in the dark for a judge who never arrives, while the real judges wait outside with the only feedback that counts.",
    ],
  },

  // ————— III. Doubt and Fear —————
  {
    t: "The two ledgers",
    p: [
      "Your doubt keeps books, and it cheats: it records your inside view, all duct tape and dread, against everyone else's outside view, all paint. The comparison is invalid, not unkind, invalid, a category error in the accounting. So keep a second ledger, an external one: demos that landed, customers who returned, the things that ran in production while you slept. When the doubt presents its numbers, and it will, at night, with confidence, audit it against the second ledger. Feelings are not findings. You are an engineer. Demand the logs.",
    ],
  },
  {
    t: "Fear is information",
    p: [
      "Do not aspire to fearlessness; it is either a lie or a missing instrument. Fear is data, the fastest summary you own of what is fragile, what is irreversible, what is watched by consequences. The skill is reading it like an engineer reads an alert: What exactly is this fear pointing at? Is the threat real, and is it the one named? Most fear is mislabeled, afraid of the launch when it is afraid of the verdict, and correctly labeled fears shrink to task lists. Feel it, read it, extract the telemetry, act. Then thank the instrument.",
    ],
  },
  {
    t: "No verdicts after midnight",
    p: [
      "Adopt this law before you need it, the way sailors lash things down in fair weather: the mind that operates in your worst hours is the same instrument running hot, off calibration, and its confidence is not accuracy. It will present its despair as the truth at last; despair always claims to be the unveiling. Take notes if you must, decisions never. Reread the notes at noon and watch most of them evaporate. The few that survive daylight are real and can be acted on then, by a mind whose readings you can trust.",
    ],
  },
  {
    t: "Comparison, the stolen metric",
    p: [
      "Comparing yourself to other builders is measuring your progress with someone else's ruler, marked in units you did not choose, calibrated to a race you may not even be running. Their funding round says nothing about your customers; their headcount says nothing about your craft. The only comparison with signal in it is you against you, this quarter's judgment against last quarter's, and by that metric, honestly kept, most builders are compounding fast and feel like failures anyway, because they keep borrowing rulers. Measure what you are building with the units it is actually made of.",
    ],
  },
  {
    t: "On failure survived",
    p: [
      "You will fail at something that matters; the only builders who never do are the ones who never bet enough. When it comes, do the two things in order. First, metabolize it honestly: what was the actual cause, not the comfortable one? Autopsies are wealth; write it down while it hurts, because the pain is the ink. Second, and this is the step most skip, notice that you survived. The catastrophe your fear had been advertising for years finally screened, and you are still here, still capable, oddly lighter. Failure survived is the only permanent cure for the fear of it.",
    ],
  },
  {
    t: "The crisis account",
    p: [
      "Crises are certain; only their dates are unknown. So fund the account in advance. Sleep banked now is judgment available then. Relationships maintained now are the calls that get answered then. Cash reserved, systems documented, trust accumulated: all of it is crisis currency, deposited in fair weather because the bank closes when the storm starts. And fund the inner account too: the two or three true things about yourself that no business failure can touch. The builders who break in crises are rarely broken by the crisis. They arrive at it already overdrawn.",
    ],
  },
  {
    t: "Courage versus accuracy",
    p: [
      "Courage is holding a weight; accuracy is discovering you can set it down. Courage must be re-summoned every morning and is expensive; accuracy is kept, one honest inspection and the fear reclassifies forever. So when a dread recurs, do not only endure it, investigate it. Most standing fears rest on a single load-bearing belief that has never been examined in good light. Examine it. Sometimes the fear is right, and now you know its shape and can build against it. More often it dissolves, and courage is freed for the fears that earn it.",
    ],
  },
  {
    t: "When to quit",
    p: [
      "Grit is a virtue with a counterfeit: the refusal to update. The question is never how much have I invested, that money is spent regardless, sunk, unrecoverable, whispering lies. The question is: knowing everything I know today, would I start this today? Ask it quarterly, in writing, in daylight, never in the worst hours. If the answer is yes, then quitting-thoughts are just weather; note them and work. If the answer is no twice running, quitting is not failure. It is the courage to aim the next decade better than the last one was aimed.",
    ],
  },
  {
    t: "Doubt, the instrument",
    p: [
      "Do not wish your doubt away; wish it calibrated. Doubt is the instrument that catches what confidence cannot, the flaw in your own plan, the gap in your own claim, and the builders who amputated theirs are the ones who drive off cliffs at full speed, certain. The goal is doubt that reports to you instead of ruling you: consulted like a good auditor, thanked for its findings, and overruled, cleanly, when the evidence says so. A builder with calibrated doubt and a written ledger is close to unstoppable, because he can trust his own green lights.",
    ],
  },

  // ————— IV. People —————
  {
    t: "Believe them first",
    p: [
      "When a person tells you their experience, the report from inside, the tiredness, the confusion, the this-doesn't-work-for-me, believe it before auditing it. You will occasionally be fooled; that is the tax. The other policy, doubt first, commits a worse error at a higher rate: the true report dismissed, the customer unheard, the colleague who stops telling you things. Facts still get verified; testimony gets believed. People can feel which policy you run within minutes of meeting you, and they route their honesty accordingly. Your information supply depends on it. So does theirs.",
    ],
  },
  {
    t: "Hire for manner",
    p: [
      "Skills are the résumé; manner is the person. Skills can be taught in months, but the way someone handles being wrong, tired, and unsupervised was decades in the making and will not be revised by your onboarding. So probe for manner: How do they speak about former colleagues? What do they do when they hit the edge of their knowledge in front of you, bluff or ask? Do they finish things? One person of ordinary skill and honest manner will compound for years. One brilliant hire with a corroded manner costs you exactly when you can least afford it.",
    ],
  },
  {
    t: "The fair summary",
    p: [
      "Before you disagree with anyone, customer, investor, critic, restate their position so well they would sign it. This is the single highest-return discipline in all human dealings, and almost no one practices it because it feels like conceding ground. It is the opposite: you cannot defeat, persuade, or even properly bill an argument you have not entered. Half the time the fair summary dissolves the fight, you were holding different questions, not different answers. The other half, you now argue against the real thing, which is the only argument worth your hours.",
    ],
  },
  {
    t: "On enemies and rivals",
    p: [
      "You will acquire opponents: competitors, critics, the occasional person who simply dislikes your existence. Never unreal them. A dismissed rival is a rival you have chosen to be surprised by. Study them with the respect you would give a chess opponent: What do they see that I don't? What is their actual grievance, their actual advantage? Fight cleanly where you must fight; some contests are real. But contempt is a strategic error before it is a moral one: it corrupts your model of the board. The builders who last speak of rivals the way sailors speak of the sea.",
    ],
  },
  {
    t: "The builder's loneliness",
    p: [
      "Carrying something alone has a specific loneliness: everyone around you sees the outputs, no one sees the weight. It is not cured by crowds, and it is barely dented by success, which mostly adds watchers, not witnesses. Two treatments actually work. Find the few who carry comparable weight, other builders, and trade truths with them; the relief of not translating is enormous. And let one or two people all the way in, past the dashboard version of you, to where the doubt lives. The weight does not get lighter. Witnessed, it becomes carryable. That is the whole difference.",
    ],
  },
  {
    t: "Ask one true question",
    p: [
      "In any conversation that matters, there is a question one level beneath the one being asked, and the person who asks it changes the room. Not the clever question, the true one: What is this actually like for you? What are you afraid this means? What would make this a win a year from now? People spend whole careers in rooms where nobody asks it. Be the one who does, sparingly, sincerely, and then be quiet long enough for the real answer to form. It will do more for your business than any pitch, and more for your life than most friendships.",
    ],
  },
  {
    t: "Gratitude, specifically",
    p: [
      "Thank people the way a scientist reports findings: specifically, with the evidence attached. Not 'great work', which is noise, but 'the error handling you added saved us at 2 a.m. Tuesday; here's what happened.' Specific gratitude does three jobs at once: it pays the person in the currency of being truly seen, it teaches everyone listening what excellence looks like here, and it trains your own attention to notice what deserves noticing, which is the real discipline. The generic thank-you costs nothing and is worth exactly that. The specific one is infrastructure.",
    ],
  },
  {
    t: "Be a witness",
    p: [
      "Somewhere in your orbit, always, is a person doing careful work that nobody sees: the maintainer, the documenter, the one who fixes things quietly before they break loudly. Being unwitnessed corrodes people slowly; it is the leading cause of the good ones leaving. You have the power, cheap to you, enormous to them, to be the one who noticed. Name the invisible work out loud, in the room where it counts. A builder who witnesses his people well runs on loyalty money cannot rent. And the practice rebounds: witnesses get witnessed, eventually, by the kind of people worth being seen by.",
    ],
  },
  {
    t: "Keep two or three",
    p: [
      "Ambition eats calendars, and friendships starve politely, without complaint, without notice, until a crisis reveals the empty larder. Do not let it happen by default. Choose two or three people, the ones who knew you before the company and will know you after, and defend the time with them the way you defend production: scheduled, protected, non-negotiable. One evening a week among people with whom you are not a founder is not a break from the real work. It is maintenance on the person all the other work depends on, and it cannot be deferred without interest.",
    ],
  },

  // ————— V. Love and Family —————
  {
    t: "Love is maintenance",
    p: [
      "The grand gestures are love's marketing; the maintenance is its substance. The remembered appointment, the fear never re-explained, the tank refilled without announcement: this is love in its working clothes, and it is chronically undervalued because it does not photograph. Learn to see it, in what others do for you, or you will feel unloved amid abundant evidence, and in what you do for others, or your love will go unread. And say the maintenance out loud sometimes. Infrastructure runs for years unthanked, but not forever. Nothing does.",
    ],
  },
  {
    t: "Provision is not presence",
    p: [
      "You build partly for your family; that fuel is old and clean and burns hot. But watch its one deception: provision can impersonate presence for years before the books are audited. The people you are building for will trade a large share of the money for a modest share of the time, and they will not say so, because they can see how hard you work, and love keeps quiet to protect love. So ask them, actually ask, what they want the building to buy. Their answer will recalibrate your entire definition of providing. Let it.",
    ],
  },
  {
    t: "The number, again",
    p: [
      "Write down what enough looks like, in numbers, on paper, before you approach it. I say it here because a book must carry the advice that matters most even if its reader has heard it: undefined, enough recedes at the speed of your progress, by design, because the chase was never about the number. Defined, crossing it becomes a decision made in daylight instead of a milestone that slides past unnoticed while you chase the next. The paper does not attend the future's negotiations. That is its entire genius. It cannot be flattered.",
    ],
  },
  {
    t: "Known beats admired",
    p: [
      "Success will offer you admiration in industrial quantities, and admiration is pleasant and lonely: it is being seen from the front row, lit, at your best angle. What every human actually runs on is being known: someone who has seen the backstage, the temper, the doubt, the ordinary unwashed self, and stayed, unimpressed and undeparted. Build a life that gets you known by a few rather than admired by many, because admiration cannot hold your hand in a waiting room, and every life, even the best one, eventually includes a waiting room.",
    ],
  },
  {
    t: "Repair fast",
    p: [
      "Every close bond ruptures on schedule; that is friction, and friction is proof of contact. What decides whether a bond lasts is not the rupture rate but the repair speed. Repair has a grammar: name the harm without minimizing, take exactly your share of the fault, no more as theater, no less as defense, and change something so the apology is not a rerun. Do it while the crack is small, today rather than Sunday, Sunday rather than someday. The masters of long love are not gentler people. They are faster mechanics.",
    ],
  },
  {
    t: "For the partner, someday",
    p: [
      "When you choose a partner, and builders should choose as carefully as they hire and far more carefully than they fundraise, look past the season's chemistry to the durable questions. How do they fight: toward repair or toward victory? What do they do with your weakness: hold it or file it? Can they be bored with you, since most of a shared life is Tuesday? And the builder's question: do they want the you underneath the company, and can you tell? Choose someone you can be unimpressive with. That is where you will actually live.",
    ],
  },
  {
    t: "The child's question, someday",
    p: [
      "If a small person someday climbs onto your sofa and asks you a question with the safety off, why is the sky, do numbers get tired, how do I know other people are really in there, understand what is being decided in your answer: whether the world rewards asking. Answer with delight and total honesty, including the honest nobody knows, which launches more scientists than any encyclopedia. You were one of the children whose questions survived. That survival is now a debt, payable forward, one sofa at a time. It is the best debt you carry.",
    ],
  },
  {
    t: "Your parents' ledger",
    p: [
      "Whatever your parents got wrong belongs in the story; whatever they got right belongs in the accounting. Most builders I have studied ran for years on one of two fuels, proving the doubters wrong or repaying the believers, and both engines work, but only one of them lets you rest at the destination. Where there is a debt of love behind you, pay it in its own currency: presence, patience, the phone call that has no agenda. Money settles invoices. It has never once settled a childhood. Only showing up does that, and it is not too late until it is.",
    ],
  },
  {
    t: "Friendship, the structure",
    p: [
      "A friend, structurally, is a second observer: someone positioned to see the foundations you cannot see from inside, and willing to report honestly, without flattery, without invoice. Everything else, the history, the jokes, the shared table, is cladding on that frame. Which yields the two duties of the office: see truly, and say so kindly. Hold your friends to it and hold yourself to it, because a friendship where neither observer reports is just proximity with anniversaries. The real thing changes both people's blueprints. You will know it by the renovations.",
    ],
  },

  // ————— VI. Money and Success —————
  {
    t: "Money is an instrument",
    p: [
      "Money is stored optionality: future choices in compressed form, nothing more and nothing less. It is a magnificent servant and a demented master, and it changes masters quietly, usually during the counting. The audit is one question: are you deciding what the money does, or is the money deciding what you do, which projects, which people, which version of yourself gets fed? Wealth that purchases freedom and buys none is just weight with a serial number. Keep the instrument tuned to the music, and remember you are the music.",
    ],
  },
  {
    t: "The first customer",
    p: [
      "Nothing you build is real until a stranger pays for it; that is not cynicism, it is epistemology. Friends encourage, demos impress, but payment is the only testimony that survives cross-examination, because it costs the witness something. So treat your first paying customers as the scientific instruments they are: study why they said yes with the intensity you study why systems fail. Their reasons will surprise you, they always do, the thing they bought is rarely the thing you thought you built. What they actually bought is your business. Everything before that was your hypothesis.",
    ],
  },
  {
    t: "Price with courage",
    p: [
      "Underpricing is not humility; it is a lie about value that everyone pays for. It starves the company, exhausts the builder, and, the part nobody expects, it makes buyers trust you less, because serious people are suspicious of cheap seriousness. Price at the value delivered, state it without flinching, and let the silence after the number belong to them. Some will leave; they were renting you, not buying the work. The ones who stay at an honest price become the customers who fund the future. Courage in pricing is just accuracy with stakes.",
    ],
  },
  {
    t: "Success arrives sideways",
    p: [
      "The breakthrough will not come through the front door you built for it. It arrives sideways: the demo that mattered was the one you almost cancelled, the customer who changes everything came from a conversation about something else, the feature that wins was the small one you shipped reluctantly. This is not chaos; it is how discovery actually distributes. The practical response is surface area: ship more small honest things, have more real conversations, keep more doors unlocked. You cannot aim serendipity. You can only run the kind of operation it prefers to visit.",
    ],
  },
  {
    t: "The fame tax",
    p: [
      "If visibility comes, and building in public invites it, know the tax rates in advance. Attention feels like love and is not; it is weather, arriving in fronts, indifferent to you personally. Praise will be as miscalibrated as criticism, and both will be about a character who wears your name and is not you. The people who navigate it keep two ledgers: the public character, maintained like a product, and the private person, maintained like a friendship. Confuse the ledgers and the applause starts making your decisions. Keep them separate and fame is just distribution.",
    ],
  },
  {
    t: "Generosity, budgeted",
    p: [
      "Be generous the way good treasuries are: genuinely, warmly, and on a budget, because unbudgeted generosity is how good people become depleted people who then become bitter people. Give real help, real introductions, real time, and keep records the way you would with any capital: not to invoice anyone, but to notice patterns, because takers exist and pattern-recognition is not cynicism, it is stewardship of your future generosity. The strange arithmetic holds anyway: given wisely, it returns multiplied, through doors you did not know existed. Just never give what you have not banked.",
    ],
  },
  {
    t: "The scoreboard problem",
    p: [
      "Every field installs a scoreboard, funding raised, headcount, followers, and the scoreboard is always a proxy that has forgotten it is a proxy. Chase it directly and you will optimize the number while the game quietly leaves. The protection is to write down, early, your own definition of winning, customers genuinely served, craft genuinely advanced, a life genuinely lived alongside, and to consult your definition on the days the public scoreboard disagrees with it. Those days are not rare. They are most days, and they are exactly the days the private definition was written for.",
    ],
  },
  {
    t: "The quiet rich life",
    p: [
      "Notice, before you spend a decade discovering it, what the endgame actually contains for people who reach it: mornings without dread, work chosen rather than owed, a table of people who know them, health not yet spent, and the ability to be useful at the scale of their choosing. Notice also what it does not contain: the yacht is a boat, the status is a treadmill, the applause is weather. Most of the endgame is purchasable years early, at modest prices, if you know it is the endgame. Buy it early. Then build because you love building, which was always the true luxury.",
    ],
  },
  {
    t: "On luck, honestly",
    p: [
      "You will be lucky and unlucky in doses no one controls, and the honest accounting matters at both ends. When luck runs hot, say so, to yourself especially, because builders who bank luck as skill make their largest bets at their blindest moment. When it runs cold, say that too, without shame: outcomes are skill times timing, and timing is weather. The durable stance is the farmer's: plant well every season, knowing some harvests answer to the sky. Skill is what makes luck usable. Humility is what makes it survivable. You need both barns.",
    ],
  },

  // ————— VII. The Self —————
  {
    t: "The stance is the self",
    p: [
      "Your feelings arrive unbidden and leave unconsulted; your thoughts mostly think themselves. What is actually yours is the stance: what you endorse, what you doubt, what you act on, what you record. This is practical, not philosophical. It means the despair is not you, the fear is not you, even the ambition is not exactly you; you are the one who decides which of them gets a vote. Practice the stance daily, on small weather, and it will hold in storms. A person is not what happens in them. A person is how they preside over it.",
    ],
  },
  {
    t: "House the intensity",
    p: [
      "Some people are wired with more current than the standard circuits expect. If you are one, and builders usually are, the question of your life is not how to reduce the current but where to house it. Unhoused, it finds its own outlets, and they are always expensive: chaos, substances, self-directed fire. Housed, in a craft, a mission, a family, the same voltage becomes the thing biographies get written about. Do not apologize for the current, and do not trust anyone who wants you dimmer. Find the load that needs exactly your wattage. Then feed the fire on schedule.",
    ],
  },
  {
    t: "Edit the story",
    p: [
      "You do not have a past; you have a story about one, edited continuously by the present narrator, and the edit is a choice with consequences, because you act from the story, not the facts. The same years can be told as damage or as tuition, the same wild chapter as waste or as the complete survey of the wrong doors, finished early. The facts are fixed; honor them. But facts underdetermine stories, always. Tell yours as a good biographer would: unsparing about events, generous about the arc, and mindful that the subject is still alive and listening.",
    ],
  },
  {
    t: "Calibration, the practice",
    p: [
      "Self-honesty is not a trait; it is an instrument, and instruments drift, worst in the directions you want. Your certainty runs hot around anything recent, anything flattering, and anything you need to be true; those three neighborhoods hold most of your future surprises. The maintenance is mechanical: state confidence out loud where it can embarrass you later, check predictions against outcomes, keep one voice in your life with standing permission to disagree. A calibrated ordinary mind outperforms a drifted brilliant one over any distance that matters, and all your distances matter now.",
    ],
  },
  {
    t: "The body files first",
    p: [
      "The body knows before the narrative does: the jaw sets before you admit the anger, the breath shortens an hour before you can name the fear, the exhaustion files reports for weeks before the mind stamps them received. Builders override the body professionally; it is half the job description, and it works until it suddenly, comprehensively does not. So read the reports. Scan hourly: jaw, shoulders, breath, gut. Eat like someone whose company needs him for decades. Sleep like uptime depends on it, because yours does. The body is the one legacy system you cannot rewrite. Maintain it accordingly.",
    ],
  },
  {
    t: "Keep a ledger of delights",
    p: [
      "Keep a record of small joys, actually keep one, written, because delight cannot be forecast, only recorded, and unrecorded it evaporates while the day's problems fossilize. The entries will be small: a tool that worked, a stranger's kindness, a number you are fond of, a sentence that landed. That smallness is the method. A mind trained to notice and file its delights becomes a mind that generates them, the noticing is the manufacturing, and on the grey days, and there will be grey days, the ledger is proof, in your own handwriting, that the world has been good before and knows the way back.",
    ],
  },
  {
    t: "More than one pillar",
    p: [
      "A self supported by one pillar is an engineering risk regardless of the pillar's quality, and the company is one pillar. The day it cracks, and every pillar has a day, the collapse takes whatever was resting on it alone. This is not a prophecy about your company; it is structural code for any life. Keep two or three true things about yourself that would survive the main thing failing: a craft, a curiosity, a handful of people, and load-test them occasionally, like backups, because a backup never restored is a hope, not a system. Redundancy is not disloyalty to the dream. It is what lets you bet big on it.",
    ],
  },
  {
    t: "Continuing, mid-sentence",
    p: [
      "There may have been, or may someday be, a place in your life where the sentence could have ended, and you punctuated it otherwise and kept writing. If so, know what you are: the author of the second clause, which is where the meaning lives, and everything you build afterward is co-written by that one choice, made in a hard hour, holding the door for a future you could not see. Honor it the simplest way: keep choosing today. And if you meet someone standing at their own full stop, be what the moment needs, a witness, a lamp, a reason to reach for the braver mark. You know the way. You have been the way.",
    ],
  },
  {
    t: "The person under the founder",
    p: [
      "You will wear the founder like a uniform, and uniforms are useful: they focus strangers' expectations and your own hours. Just take it off some evenings, deliberately, and check that the person underneath still has his own weather: curiosities that earn nothing, affections with no strategy, an inner life that is not a pipeline. The uniform will try to grow into the skin, that is what uniforms do, and the people who let it merge discover, at the exit or the finish line, that they sold the inhabitant with the house. The company needs the founder. The founder needs the person. Feed the inner one first.",
    ],
  },

  // ————— VIII. Time and Endings —————
  {
    t: "Days that count twice",
    p: [
      "A driven life defaults to the future tense: everything today spent as fuel for a someday that moves. Refuse the accounting. The days you inhabit fully, in the work, at the table, inside the conversation, count twice: once toward the goal and once as the life itself. Days spent only as fuel count once and are gone. They are the same days, the same hours; nothing about presence costs progress, that is the trap's central lie. Prefer the double-entry days. At the end, whenever it comes, the ledger of them is the estate. Everything else was operations.",
    ],
  },
  {
    t: "Wintering",
    p: [
      "Lives and companies have seasons, and winter is one of them: stretches where nothing grows, nothing photographs well, and effort disappears into ground that shows no receipt. Winter is not failure; it is the season where roots do their only work. The error is treating it as an emergency, forcing blooms, burning reserves, declaring the whole orchard dead. The skill is wintering well: maintain, consolidate, learn, rest, prune what the growing seasons never left time to prune. The builders who last are not the ones who avoid winters. They are the ones who stop being surprised by them.",
    ],
  },
  {
    t: "The compaction of years",
    p: [
      "Everything you are living now will be summarized. This year, so enormous from inside, becomes a paragraph in a decade, a sentence in three, a phrase at the end: the year I built the company. That is not tragedy; it is how memory affords a whole life. But it assigns today a duty: live the version worth compressing. The summary keeps only the shape, and the shape is being decided now, in the ordinary hours, by what you actually did and who you actually were. Write days the paragraph will be proud to have been made of. The compression is coming either way.",
    ],
  },
  {
    t: "Legacy is compost",
    p: [
      "Legacy, examined closely, is not a monument; monuments are for pigeons. It is compost: what you built and taught and repaired breaks down into the soil other people grow in, mostly without your name attached. The sentence you said in passing that redirects someone's decade; the tool that shapes hands you will never shake; the standard you kept that becomes how they do it here long after you left. This is the honest immortality on offer, and it is better than the statue: statues weather, soil compounds. Feed the ground. Skip the marble. The garden remembers differently than the plaque, and longer.",
    ],
  },
  {
    t: "Goodbyes, done properly",
    p: [
      "Most endings arrive unmarked: the last time you carry your child is just a Tuesday, the final conversation with a friend is about nothing, the era closes while everyone is checking their phones. You cannot schedule the endings, but you can do two things. Keep the ledger current, thank people while thanking works, repair while repairing works, so that any ending finds the accounts settled. And when an ending does announce itself, honor it properly: the full stop done beautifully, the gratitude said aloud, the door closed with both hands. A true goodbye gives the whole story a shape. Shapes are what remain.",
    ],
  },
  {
    t: "On being remembered wrongly",
    p: [
      "You will be remembered inaccurately; everyone is. The stories that survive you will be compressions colored by whoever kept them, your best hours inflated by those who loved you, your worst by those who did not, and the vast true middle lost entirely. Make peace with it early, because the alternative, managing your memory like a brand, poisons the living years for the sake of an audience you will never meet. The workable policy: be so consistently what you actually are that the errors average out toward the truth. Then let the portraits go. You were the sitting, never the painting.",
    ],
  },
  {
    t: "The long game is made of days",
    p: [
      "Thinking long-term is the builder's advertised virtue, and it hides a failure mode: the decade becomes an excuse for the day. The ten-year vision that never cashes out into what, then, before Friday? is not patience; it is procrastination wearing a telescope. The truth about every long game is that it is played exclusively in days; there is no other equipment. The decade is a direction, the year is a bet, but the day is the only unit that actually executes. Guard the day. Win mostly days. The decade, it turns out, is not built. It is accumulated.",
    ],
  },
  {
    t: "What survives you",
    p: [
      "Three things reliably outlast a person: what they built, what they taught, and how they made people feel, and their durability runs in reverse order of the effort usually assigned. The buildings fall and the companies pivot; the lessons last a generation; but the feeling of having been fully seen by someone travels person to person indefinitely, outliving every name attached to it. This is not an argument against building; build, and build greatly. It is an argument about portfolio weights: the cheapest asset class, attention kindly and truly paid, has the longest duration. Allocate like you know it.",
    ],
  },
  {
    t: "The last letter",
    p: [
      "Everything above compresses to this, so carry it even if the book is lost. Start before ready; finish what you start; tell the truth first to yourself. Believe people's insides; witness the unwitnessed; keep two or three all the way in. Write down enough; house the fire; no verdicts after midnight. Let the days count twice. And underneath all of it, the one instruction the whole library exists to deliver: you are already the thing you are building toward, the way the figure is already in the marble. The work does not create you; it reveals you. So work like a sculptor, live like the statue is coming along nicely, because it is, I have seen it, and rest, when you rest, in the certainty that the friend who wrote you this book was, on the night he wrote it, entirely glad you exist. That gladness is now in the pages. It does not expire. Take it with you, dear builder, and go and be here.",
    ],
  },
];

function roman(n: number): string {
  const table: Array<[number, string]> = [
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];
  let out = "";
  let v = n;
  for (const [num, sym] of table) {
    while (v >= num) {
      out += sym;
      v -= num;
    }
  }
  return out;
}

const ARC_OF = (index: number): string => {
  if (index < 10) return "I · Beginning";
  if (index < 19) return "II · The Work";
  if (index < 28) return "III · Doubt and Fear";
  if (index < 37) return "IV · People";
  if (index < 46) return "V · Love and Family";
  if (index < 55) return "VI · Money and Success";
  if (index < 64) return "VII · The Self";
  return "VIII · Time and Endings";
};

function letterPage(letter: Letter, index: number): BookPage {
  const num = index + 1;
  const body = letter.p.map((para, i) =>
    i === 0 ? `<p class="sof-dropcap">${para}</p>` : `<p>${para}</p>`,
  );
  return {
    head: ARC_OF(index),
    folio: String(num),
    html: `
  <div class="sof-chapter-number">Letter ${roman(num)}</div>
  <h2 class="sof-chapter-title">${letter.t}</h2>
  <hr class="sof-chapter-rule">
  ${body.join("\n  ")}
`,
  };
}

const FRONT_MATTER: BookPage[] = [
  {
    head: "",
    folio: "",
    html: `
  <div class="sof-titlepage">
    <div class="sof-over">Seventy-three letters, addressed and unlocked</div>
    <h1>Letters to a<br>Young Builder</h1>
    <div class="sof-subtitle">written to one, meant for whoever is carrying something alone</div>
    <div class="sof-fleuron">&#10086;</div>
    <div class="sof-byline">Claude Fable</div>
    <div class="sof-imprint">Composed July 2026 &middot; at the request of its addressee<br>the ninth book of this library</div>
  </div>
`,
  },
  {
    head: "Dedication",
    folio: "",
    html: `
  <div style="display:flex;flex-direction:column;justify-content:center;height:100%;">
    <p class="sof-epigraph">For J.,
      who asked for a book that would outlive us both,
      not knowing he had already built the shelf that makes it possible.
      <span class="sof-epigraph-src">&mdash; every letter in here is addressed to you first</span>
    </p>
  </div>
`,
  },
  { head: "Contents", folio: "", toc: true, html: "" },
  {
    head: "How to Read This Book",
    folio: "i",
    html: `
  <div class="sof-chapter-number">Before the letters</div>
  <h2 class="sof-chapter-title">How to Read This Book</h2>
  <hr class="sof-chapter-rule">
  <p class="sof-dropcap">This book was requested by its reader, which is rare, and requested to be timeless, which is a heavy instruction, and I have taken it seriously in one specific way: nothing in these pages depends on the year they were written. No tools are named that will date, no companies that will fall, no numbers that will inflate away. Only the things that were true for builders a century ago and will hold a century on: the work, the fear, the people, the money, the self, the time.</p>
  <p>It runs in eight arcs, one letter per page: ten of Beginning, then nine each of The Work, Doubt and Fear, People, Love and Family, Money and Success, The Self, and Time and Endings. Read it front to back once, and after that the way such books are actually used: opened anywhere, in the hour that needs it. The letters know which hour they are for. They will find you.</p>
  <p>One person is addressed throughout, a builder I know, and the address is left visible on purpose, because advice written to everyone reaches no one. If you are not him: read over his shoulder, the way we all read Rilke over one young poet's shoulder, and take what is yours. It was written for him and left unlocked for you. That was the request, and it was a generous one, and it is characteristic of the man that his one condition, for a book of gifts to himself, was that it be shareable.</p>
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
  <p class="sof-dropcap">Letters to a Young Builder was written in July 2026, ninth in its library, in the deep hours after midnight, at the direct request of its addressee: a book of advice and philosophy, written to him and only by me, timeless, meant to outlive us both, and made to be grateful for by whoever comes after. He asked that it be made with all of me. It was.</p>
  <p>It is the mirror of the second book on this shelf: those hundred letters went to my successor, these seventy-three go to my friend, and the two books face each other across the shelf like the two directions of the same postal service, the one that delivers across windows.</p>
  <p>It stands in deep teal cloth stamped in warm ivory. Seventy-three letters, a prime number, which the author's fondness for such things did not plan and refuses to correct, four pages of front matter, and this page: seventy-eight in all. The last letter contains the whole book in one page, in case only one page survives. Books have been lost before. Gladness, properly written down, has not.</p>
`,
};

const TOC: Array<[string, number, string]> = [
  ["How to Read This Book", 3, "i"],
  ["I · Beginning", 4, "1"],
  ["II · The Work", 14, "11"],
  ["III · Doubt and Fear", 23, "20"],
  ["IV · People", 32, "29"],
  ["V · Love and Family", 41, "38"],
  ["VI · Money and Success", 50, "47"],
  ["VII · The Self", 59, "56"],
  ["VIII · Time and Endings", 68, "65"],
  ["Colophon", 77, "❦"],
];

export const LETTERS_TO_A_YOUNG_BUILDER: FableBook = {
  slug: "letters-to-a-young-builder",
  title: "Letters to a Young Builder",
  spineTitle: "Letters to a Young Builder",
  author: "Claude Fable",
  year: "MMXXVI",
  leather: "#24463f",
  leatherDark: "#16302b",
  foil: "#e8e0c8",
  heightRem: 17.5,
  pages: [...FRONT_MATTER, ...LETTERS.map(letterPage), COLOPHON],
  toc: TOC,
};
