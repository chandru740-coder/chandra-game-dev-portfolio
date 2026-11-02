const image = (folder, filename, width, height, alt, caption, fit = "cover") => ({
  src: `/images/echoes/${folder}/${encodeURIComponent(filename)}`,
  width,
  height,
  alt,
  caption,
  fit,
});

export const echoesSections = [
  {
    id: "overview",
    title: "Project overview",
    navLabel: "Overview",
    lead:
      "A third-person action game developed in Unreal Engine 5, with gameplay systems primarily implemented through Blueprints.",
    paragraphs: [
      "The project focuses on melee combat, enemy encounters and cinematic presentation.",
    ],
    images: [
      image(
        "overview",
        "Screenshot 2026-10-31 223129.png",
        1917,
        1043,
        "The Echoes of Tomorrow title over a dark cave environment with the player character.",
        "A title view from the game.",
      ),
      image(
        "overview",
        "Screenshot 2026-10-31 225844.png",
        1917,
        1042,
        "A stone bridge and stairway in a dark environment.",
        "A playable environment.",
      ),
    ],
  },
  {
    id: "combat",
    title: "Combat system",
    lead:
      "A Blueprint-based melee system connected to animation montages and gameplay events.",
    bullets: [
      "Implemented light attacks and attack animation sequences.",
      "Integrated hit detection and enemy hit reactions.",
      "Added hit-pause feedback to make combat interactions more impactful.",
      "Connected combat actions with character animations and gameplay events.",
    ],
    images: [
      image(
        "combat",
        "Screenshot 2026-10-31 222444.png",
        1917,
        1042,
        "The player engages an enemy in a stone arena.",
        "A melee encounter.",
      ),
      image(
        "combat",
        "Screenshot 2026-10-31 222722.png",
        1426,
        770,
        "Unreal Engine Blueprint logic connected to combat and player reactions.",
        "Combat event logic in Blueprints.",
        "contain",
      ),
    ],
  },
  {
    id: "defensive",
    title: "Defensive mechanics",
    lead:
      "Timing-based defenses add another layer of strategy to each encounter.",
    bullets: [
      "Implemented blocking and parrying mechanics.",
      "Created directional dodging with a perfect-dodge detection window.",
      "Developed a posture system with posture accumulation.",
      "Implemented posture breaks and finishing attacks.",
    ],
    images: [
      image(
        "defensive",
        "Screenshot 2026-10-31 225545.png",
        1782,
        866,
        "The player uses a defensive effect during a combat encounter.",
        "A defensive effect in combat.",
      ),
      image(
        "defensive",
        "Screenshot 2026-10-31 230902.png",
        1162,
        892,
        "An Unreal Engine animation montage for the player's parry animation.",
        "Parry animation montage in Unreal Engine.",
        "contain",
      ),
    ],
  },
  {
    id: "enemy-ai",
    title: "Enemy AI",
    lead:
      "Enemy behaviour is driven by AI Controllers, Behaviour Trees and Blueprint logic.",
    bullets: [
      "Implemented player detection and enemy chasing behaviour.",
      "Created attack, blocking and strafing behaviours.",
      "Used conditional checks to manage enemy states and combat decisions.",
      "Developed an attack-token system to coordinate enemy attacks and prevent multiple enemies from attacking simultaneously.",
    ],
    images: [
      image(
        "enemy-ai",
        "Screenshot 2026-10-31 222211.png",
        1917,
        1056,
        "The player faces several enemies in a stone arena.",
        "An enemy encounter.",
      ),
      image(
        "enemy-ai",
        "Screenshot 2026-10-31 222319.png",
        1682,
        860,
        "An Unreal Engine Behaviour Tree with connected enemy behaviour tasks.",
        "Enemy behaviour organised in a Behaviour Tree.",
        "contain",
      ),
    ],
  },
  {
    id: "boss",
    title: "Boss mechanics",
    lead:
      "Boss encounters change as health conditions trigger different attack behaviours.",
    bullets: [
      "Implemented special attacks triggered at specific health thresholds.",
      "Connected boss health conditions with attack behaviour.",
      "Designed encounters that change as the boss loses health.",
      "Integrated boss combat behaviour with the game's existing combat and animation systems.",
    ],
    images: [
      image(
        "boss",
        "Screenshot 2026-10-12 003424.png",
        1615,
        885,
        "A combat encounter in Echoes of Tomorrow.",
        "A combat encounter from the project.",
      ),
    ],
  },
  {
    id: "lock-on-stealth",
    title: "Lock-on and stealth",
    lead:
      "Additional interactions provide alternative ways to engage enemies.",
    bullets: [
      "Developed a lock-on targeting mechanic to maintain focus on selected enemies.",
      "Implemented stealth-kill interactions and integrated them into the player's combat experience.",
    ],
    images: [
      image(
        "lock-on-stealth",
        "Lockon.png",
        1505,
        902,
        "Unreal Engine Blueprint logic for the lock-on targeting system.",
        "Lock-on targeting logic in Blueprints.",
        "contain",
      ),
      image(
        "lock-on-stealth",
        "Stealhth.png",
        1917,
        1041,
        "The player approaches an enemy from behind in a dark environment.",
        "A stealth encounter.",
      ),
    ],
  },
  {
    id: "arena-waves",
    title: "Arena and wave system",
    navLabel: "Arena and Waves",
    lead:
      "Arena encounters structure enemy combat around successive challenges.",
    bullets: [
      "Implemented enemy encounters organised into waves.",
      "Created a progression flow based on defeating enemies.",
      "Connected combat encounters with the XP progression system.",
    ],
    images: [
      image(
        "progression",
        "Screenshot 2026-10-31 225200.png",
        1506,
        847,
        "Unreal Engine Blueprint logic for spawning enemies and managing wave changes.",
        "Wave spawning and progression logic in Blueprints.",
        "contain",
      ),
      image(
        "progression",
        "Screenshot 2026-10-31 231213.png",
        1131,
        856,
        "Unreal Engine Blueprint nodes for the quest progression system.",
        "Quest progression logic in Blueprints.",
        "contain",
      ),
    ],
  },
  {
    id: "abilities",
    title: "Abilities and cooldowns",
    navLabel: "Abilities",
    lead:
      "Cooldowns connect ability availability with readable in-game feedback.",
    bullets: [
      "Developed abilities that can be activated during gameplay.",
      "Integrated cooldown mechanics to manage ability usage.",
      "Connected ability availability with the user interface.",
      "Added visual cooldown feedback for the player.",
    ],
    images: [
      image(
        "abilities",
        "Screenshot 2026-10-31 225225.png",
        505,
        382,
        "The in-game ability icon and cooldown indicator.",
        "Ability cooldown feedback.",
      ),
      image(
        "abilities",
        "Screenshot 2026-10-31 225302.png",
        1917,
        1026,
        "The player activates an ability during a combat encounter.",
        "An ability used during gameplay.",
      ),
    ],
  },
  {
    id: "animation-vfx",
    title: "Animation and visual effects",
    navLabel: "Animation",
    groups: [
      {
        title: "Animation integration",
        paragraphs: [
          "Integrated character and enemy animations into gameplay.",
        ],
        bullets: [
          "Used Animation Montages for combat and character interactions.",
          "Managed movement and gameplay through animation states.",
          "Connected animations to combat events and enemy reactions.",
          "Linked animation behaviour to Blueprint systems.",
        ],
      },
      {
        title: "Visual effects",
        paragraphs: [
          "Integrated Unreal Engine Niagara visual effects into gameplay using Blueprint logic. Programmed the triggering and integration of existing effects with relevant gameplay events to enhance combat feedback and visual presentation.",
        ],
      },
    ],
    images: [
      image(
        "animation-vfx",
        "Screenshot 2026-10-31 223044.png",
        1160,
        888,
        "An Unreal Engine Blend Space for character movement animation.",
        "Movement animation in a Blend Space.",
        "contain",
      ),
      image(
        "animation-vfx",
        "Screenshot 2026-11-01 111612.png",
        1150,
        890,
        "An Unreal Engine animation graph showing connected character animation states.",
        "Character animation graph in Unreal Engine.",
        "contain",
      ),
    ],
  },
  {
    id: "ui-hud",
    title: "UI and HUD",
    lead:
      "Unreal Motion Graphics connects the gameplay interface with game systems.",
    bullets: [
      "Created gameplay HUD elements to communicate important game information.",
      "Implemented menu and quest-related interface elements.",
      "Connected UI elements with gameplay systems.",
    ],
    images: [
      image(
        "ui",
        "Screenshot 2026-10-31 225336.png",
        1451,
        982,
        "An Unreal Engine widget editor showing the game's pause menu.",
        "Pause menu layout in Unreal Motion Graphics.",
        "contain",
      ),
      image(
        "ui",
        "Screenshot 2026-10-31 225401.png",
        1571,
        955,
        "An Unreal Engine widget editor showing the game's main menu.",
        "Main menu layout in Unreal Motion Graphics.",
        "contain",
      ),
    ],
  },
  {
    id: "cinematics",
    title: "Cinematics and storytelling",
    navLabel: "Cinematics",
    lead:
      "Level Sequencer brings camera movement and cinematic shots into the game's presentation.",
    bullets: [
      "Set up cinematic sequences and camera movements.",
      "Integrated cinematic shots into the game's presentation.",
      "Used Sequencer to create more engaging visual storytelling moments.",
    ],
    images: [
      image(
        "cinematics",
        "Screenshot 2026-10-31 225458.png",
        1396,
        522,
        "An Unreal Engine Level Sequencer timeline with camera tracks.",
        "Camera tracks arranged in Level Sequencer.",
        "contain",
      ),
    ],
  },
];

export const caseStudyVideos = [
  {
    id: "game-trailer",
    title: "Game Trailer",
    description:
      "A cinematic introduction to Echoes of Tomorrow, showcasing its atmosphere, combat and visual presentation.",
    playbackId: "m1GltgL02lbltxZgqe1pkQ9Ju9uAUI985ALnWfI9FVDE",
  },
  {
    id: "gameplay-demo",
    title: "Gameplay Demo",
    description:
      "A gameplay demonstration showcasing the implemented combat mechanics, enemy AI, defensive systems, boss encounters and progression.",
    playbackId: "dNmQEoHhkpyOAj5s7DW4auTwjzCYJ5TXH3I2pqpV00q8",
  },
];
