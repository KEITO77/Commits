
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
