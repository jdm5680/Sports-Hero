var gameData = { 
    Power: 0,
    PowerPerClick: 1,
    PowerPerClickCost: 10,
    
    Agility: 0,
    AgilityPerClick: 1,
    AgilityPerClickCost: 11,

}

function getPower() {
    gameData.Power += gameData.PowerPerClick
    document.getElementById("PowerGained").innerHTML = gameData.Power + "Power"
}

function buyPowerPerClick () {
    if (gameData.Power >= gameData.PowerPerClickCost) {
        gameData.Power -= gameData.PowerPerClickCost
        gameData.PowerPerClick += 1
        gameData.PowerPerClickCost *= 2
        document.getElementById("PowerGained").innerHTML = gameData.Power + " Power Gained"
        document.getElementById("perClickUpgrade").innerHTML = "Upgrade Weight Training (current level " + gameData.PowerPerClick + ") Cost: " + gameData.PowerPerClickCost + " Power"  
    }
}

function getAgility() {
    gameData.Agility += gameData.AgilityPerClick
    document.getElementById("AgilityGained").innerHTML = gameData.Agility + "Agility"
}

function buyAgilityPerClick () {
    if (gameData.Agility >= gameData.AgilityPerClickCost) {
        gameData.Agility -= gameData.AgilityPerClickCost
        gameData.AgilityPerClick += 1
        gameData.AgilityPerClickCost *= 2
        document.getElementById("AgilityGained").innerHTML = gameData.Agility + " Agility Gained"
        document.getElementById("AgilityperClickUpgrade").innerHTML = "Upgrade Agility Training (current level " + gameData.AgilityPerClick + ") Cost: " + gameData.AgilityPerClickCost + " Power"  
    }
}

var mainGameLoop = window.setInterval(function() {
    getPower()
}, 1000)

var saveGameLoop = window.setInterval(function() {
    localStorage.setItem("SportsHeroSave", JSON.stringify(gameData))
}, 15000)

var savegame = JSON.parse(localStorage.getItem("SportsHeroSave"))
if (savegame !==null) {
    gameData = savegame
}
