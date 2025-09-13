let footballTeam={
  "team":"QAQ",
  "year":2025,
  "headCoach":"MQ",
  "players":[{
    "name":"Q",
    "position":"goalkeeper",
    "isCaptain":true
  },
  {
    "name":"W",
    "position":"defender",
    "isCaptain":false
  },
  {
    "name":"E",
    "position":"midfielder",
    "isCaptain":false
  },
  {
    "name":"R",
    "position":"forward",
    "isCaptain":false
  },
  {
    "name":"T",
    "position":"forward",
    "isCaptain":false
  }]
}

const teamSpan=document.querySelector("#team");
const yearSpan=document.querySelector("#year");
const headCoachSpan=document.querySelector("#head-coach");
const playersSelected=document.querySelector("#players")
const playerCardsContainer=document.querySelector("#player-cards")

teamSpan.innerText=footballTeam["team"];
yearSpan.innerText=footballTeam["year"];
headCoachSpan.innerText=footballTeam["headCoach"];
footballTeam.players.forEach(player=> {
  playerCardsContainer.innerHTML+=`
    <div class="player-card">
      <h2>${player["isCaptain"]?"(captain)":""} ${player["name"]}</h2>
      <p>Position: ${player["position"]}</p>
    </div>
  `;
});

playersSelected.addEventListener("change",()=> {
  playerCardsContainer.innerHTML="";
  const playerToShow=playersSelected.value=="all"?footballTeam.players:footballTeam.players.filter(player=>player.position==playersSelected.value);
  playerToShow.forEach(player=> {
    playerCardsContainer.innerHTML+=`
        <div class="player-card">
          <h2>${player["isCaptain"]?"(Captain) ":""}${player["name"]}</h2>
          <p>Position: ${player["position"]}</p>
        </div>
      `;
  });
});
