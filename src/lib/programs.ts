export type ProgramSlug = "7v7" | "speed-lab" | "position-lab";

export type Program = {
  slug: ProgramSlug;
  name: string;
  eyebrow: string;
  shortDescription: string;
  heroDescription: string;
  audience: string;
  seoDescription: string;
  focusAreas: string[];
  outcomes: string[];
  experience: string[];
  idealFor: string[];
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
    focusAreas: [
      "Route depth, spacing, and timing",
      "Coverage recognition and leverage awareness",
      "Ball tracking, finishing, and recovery",
      "Communication, tempo, and sideline-to-huddle consistency",
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
    focusAreas: [
      "Acceleration mechanics and projection angles",
      "Posture, rhythm, and front-side organization",
      "Force application, intent, and recovery positions",
      "Transfer from drill precision to open movement",
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
    focusAreas: [
      "Footwork, leverage, and transition quality",
      "Hand placement, body control, and recovery positions",
      "Visual processing and reaction to live cues",
      "Position language that connects drills to game application",
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
  },
];

export function getProgramBySlug(slug: string) {
  return programs.find((program) => program.slug === slug);
}
