export type ProgramSlug = "7v7" | "speed-lab" | "position-lab";

export type Program = {
  slug: ProgramSlug;
  name: string;
  eyebrow: string;
  shortDescription: string;
  heroDescription: string;
  audience: string;
  seoDescription: string;
  atAGlance: { label: string; value: string }[];
  focusAreas: string[];
  sessionFlow: { title: string; description: string }[];
  outcomes: string[];
  experience: string[];
  idealFor: string[];
  nextSteps: string[];
  pendingDetails: string[];
};

export const programs: Program[] = [
  {
    slug: "7v7",
    name: "7v7",
    eyebrow: "Competition track",
    shortDescription:
      "A team-first environment for skill athletes who want football timing, spacing, and competitive reps to match their physical tools.",
    heroDescription:
      "Built for athletes who want to sharpen route detail, coverage recognition, and communication in a fast, game-relevant setting.",
    audience: "Receivers, defensive backs, and quarterbacks preparing for competitive offseason work.",
    seoDescription:
      "Explore Hitmen Athletics 7v7 training focused on timing, competition, and game-speed decision making for skill athletes.",
    atAGlance: [
      {
        label: "Primary lens",
        value: "Team timing, live competition, and football decision making.",
      },
      {
        label: "Best fit when",
        value: "Athletes want reps that connect technique directly to spacing, tempo, and communication.",
      },
      {
        label: "Pending public details",
        value: "Roster size, schedule structure, and registration workflow can be added later if the team wants them public.",
      },
    ],
    focusAreas: [
      "Route depth, spacing, and timing",
      "Coverage recognition and leverage awareness",
      "Ball tracking, finishing, and recovery",
      "Communication, tempo, and sideline-to-huddle consistency",
    ],
    sessionFlow: [
      {
        title: "Install the details",
        description:
          "Start with the technical language, spacing rules, and movement details that shape cleaner competitive reps.",
      },
      {
        title: "Translate into live looks",
        description:
          "Progress into scenarios that force athletes to apply recognition, timing, and communication under pace.",
      },
      {
        title: "Compete with intent",
        description:
          "Use live sequences to reinforce decision making and finish rather than collecting empty reps.",
      },
    ],
    outcomes: [
      "Sharper understanding of how individual technique connects to team execution.",
      "Cleaner transitions between athletic movement and football-specific decision making.",
      "More confidence competing at pace against live bodies and changing looks.",
    ],
    experience: [
      "Structured drills that translate into competitive team periods.",
      "Emphasis on football IQ alongside movement and finish.",
      "A framework ready for future additions like roster details, schedules, and registration flows.",
    ],
    idealFor: [
      "Athletes building chemistry before camps or tournaments",
      "Players who want more than isolated skill work",
      "Families looking for a clear pathway from training to competition",
    ],
    nextSteps: [
      "Confirm whether the athlete needs a competition-first environment right now.",
      "Add any future registration and roster workflow later if the team wants a more operational program page.",
      "Add scheduling details later if they become useful to publish publicly.",
    ],
    pendingDetails: [
      "Official schedule or seasonal cadence",
      "Verified registration destination or inquiry path",
      "Any published roster, age-group, or tournament details",
    ],
  },
  {
    slug: "speed-lab",
    name: "Speed Lab",
    eyebrow: "Performance track",
    shortDescription:
      "A movement-focused program centered on acceleration, projection, posture, and repeatable speed mechanics.",
    heroDescription:
      "Designed for athletes who want to move cleaner, strike the ground with intent, and carry speed confidently into sport.",
    audience: "Multi-sport athletes and football players focused on movement quality and explosive development.",
    seoDescription:
      "Explore Hitmen Athletics Speed Lab training focused on acceleration mechanics, posture, and transferable speed development.",
    atAGlance: [
      {
        label: "Primary lens",
        value: "Movement quality, acceleration mechanics, and transferable speed development.",
      },
      {
        label: "Best fit when",
        value: "Athletes need a strong performance base before or alongside more sport-specific work.",
      },
      {
        label: "Pending public details",
        value: "Scheduling, facility notes, and any booking flow can be added later if needed for the public site.",
      },
    ],
    focusAreas: [
      "Acceleration mechanics and projection angles",
      "Posture, rhythm, and front-side organization",
      "Force application, intent, and recovery positions",
      "Transfer from drill precision to open movement",
    ],
    sessionFlow: [
      {
        title: "Build movement awareness",
        description:
          "Introduce the positions, rhythms, and cues that help athletes understand what efficient speed should feel like.",
      },
      {
        title: "Refine projection and posture",
        description:
          "Coach the shapes and timing that let acceleration stay intentional instead of rushed or disconnected.",
      },
      {
        title: "Carry it into open movement",
        description:
          "Create a bridge from drill execution to more dynamic expressions of speed and athletic intent.",
      },
    ],
    outcomes: [
      "Better awareness of the positions and rhythms that support efficient speed.",
      "A clearer connection between technical coaching and athletic feel.",
      "A premium introduction point for athletes who need a broad performance foundation.",
    ],
    experience: [
      "Coaching cues that stay concise, visual, and athlete-friendly.",
      "Progressions that can scale later with scheduling, registration, or testing content.",
      "A polished route in the site architecture for future media or performance updates.",
    ],
    idealFor: [
      "Athletes early in the offseason or returning to foundational work",
      "Players who want speed instruction without position-specific overload",
      "Families seeking a high-clarity entry point into the Hitmen training ecosystem",
    ],
    nextSteps: [
      "Decide if the athlete's first need is movement development before a more specialized lane.",
      "Confirm how any future testing, onboarding, or registration details should be presented publicly.",
      "Add more operational details later if the team wants a fuller public intake flow.",
    ],
    pendingDetails: [
      "Real testing or onboarding workflow, if desired",
      "Official session timing and location details",
      "Approved registration or contact destination",
    ],
  },
  {
    slug: "position-lab",
    name: "Position Lab",
    eyebrow: "Skill track",
    shortDescription:
      "Position-specific technical development for athletes who want sharper details, cleaner movement, and faster decision making.",
    heroDescription:
      "Created for players who need targeted coaching around the demands of their role while keeping every rep athletic and transferable.",
    audience: "Football athletes looking for focused technical work tied directly to position demands.",
    seoDescription:
      "Explore Hitmen Athletics Position Lab training built around technical details, movement precision, and position-specific development.",
    atAGlance: [
      {
        label: "Primary lens",
        value: "Position-specific movement detail, leverage, and technical confidence.",
      },
      {
        label: "Best fit when",
        value: "Athletes need more targeted role-based coaching than a broad performance lane provides.",
      },
      {
        label: "Pending public details",
        value: "Exact role groupings, scheduling, and intake process can be added later if the team wants them public.",
      },
    ],
    focusAreas: [
      "Footwork, leverage, and transition quality",
      "Hand placement, body control, and recovery positions",
      "Visual processing and reaction to live cues",
      "Position language that connects drills to game application",
    ],
    sessionFlow: [
      {
        title: "Define the position language",
        description:
          "Align the athlete around the details, cues, and movement standards that matter most for the role.",
      },
      {
        title: "Train the technical rep",
        description:
          "Focus on leverage, footwork, hands, and transitions in ways that stay specific without losing athletic freedom.",
      },
      {
        title: "Pressure the decisions",
        description:
          "Add live cues or reactive layers so technique holds up when the rep becomes less predictable.",
      },
    ],
    outcomes: [
      "Improved command of the technical details that separate clean reps from empty reps.",
      "More confident movement under decision pressure.",
      "A clear position-focused content lane for future expansion in later phases.",
    ],
    experience: [
      "Instruction that keeps the athlete's position at the center of the coaching conversation.",
      "Reusable site content blocks that make updating drills, roles, or staff notes straightforward.",
      "Messaging that stays premium without inventing unsupported statistics or claims.",
    ],
    idealFor: [
      "Athletes refining the details of their primary position",
      "Players who want individualized-feeling coaching inside a scalable system",
      "Families comparing program options based on development goals instead of hype",
    ],
    nextSteps: [
      "Confirm that the athlete's main need is role-specific detail rather than broad speed or competition exposure.",
      "Decide later which public-facing role groupings should be shown, if any.",
      "Add intake and schedule details later if the team wants this page to become more operational.",
    ],
    pendingDetails: [
      "Approved role groupings or age splits, if applicable",
      "Official schedule, location, and registration path",
      "Any future coach-bio or staff assignment content",
    ],
  },
];

export function getProgramBySlug(slug: string) {
  return programs.find((program) => program.slug === slug);
}
