
const skills = [
    {
        name: "Passive – Surge of Life",
        description: "Kalea's abilities help her gather energy and enhance her combat potential."
    },
    {
        name: "Skill 1 – Wavebreaker",
        description: "Kalea performs a powerful attack against nearby enemies."
    },
    {
        name: "Skill 2 – Tidal Strike",
        description: "Kalea uses agile movement and attacks to engage enemies."
    },
    {
        name: "Ultimate – Tsunami Slam",
        description: "Kalea grabs an enemy and performs a powerful finishing move."
    },
      {
        name: "Passive – Mechanical Genius",
        description: "Beatrix can use four different weapons: Renner (Sniper), Bennett (Launcher), Wesker (Shotgun), and Nibiru (Dual Pistols). Each weapon has a unique attack style and ultimate ability."
    },
    {
        name: "Skill 1 – Masterful Gunner",
        description: "Beatrix switches between her two equipped weapons, allowing her to adapt to different combat situations."
    },
    {
        name: "Skill 2 – Tactical Reposition",
        description: "Beatrix dashes in the chosen direction and reloads her current weapon, helping her escape enemies or reposition during battles."
    },
    {
        name: "Ultimate – Weapon-Specific Ultimate",
        description: "Beatrix has four different ultimate abilities depending on her equipped weapon: Renner's Apathy (Sniper), Bennett's Rage (Launcher), Wesker's Elation (Shotgun), and Nibiru's Passion (Dual Pistols)."
    }
    
];

const container = document.getElementById("skillContainer");

skills.forEach(skill => {
    const card = document.createElement("div");

    card.className = "skill-card";

    card.innerHTML = `
        <h3>${skill.name}</h3>
        <p>${skill.description}</p>
    `;

    container.appendChild(card);
});
