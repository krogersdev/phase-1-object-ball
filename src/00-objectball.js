function gameObject(){

    return {
        home: {        
            teamName: "Brooklyn Nets",
            colors:["Black", "White"],
            players:{
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebound: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebound: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks:7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebound: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks:15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebound: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks:5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebound: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks:1
                },
            }



        }, 

        Away: {        
            teamName: "Charlotte Hornets",
            colors:["Turquoise", "Purple"],
            players:{
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebound: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebound: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks:10
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebound: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks:5
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebound: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks:0
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebound: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks:12
                },
            }
        }
    }

};




const teamsCombined = () => Object.assign(gameObject().home, gameObject().Away);      //Object with both teams 
const players = () => Object.assign(gameObject().home.players, gameObject().Away.players);     //object of Players with stats 
const playersArray = Object.entries(players());  //Array of players Objects


// Build a function, numPointsScored that takes in an argument of a player's name and returns the number
function numPointsScored(playerInput) {
    const player = playersArray.find(playerArray => playerArray[0] === playerInput);
   
    return player[1].points    
}


// Build a function, shoeSize, that takes in an argument of a player's name and returns the shoe size fo
function shoeSize(playerInput) {
    const player = playersArray.find(playerArray => playerArray[0] === playerInput);
    
    return player[1].shoe
}


// Build a function, teamColors, that takes in an argument of the team name and returns an array of that teams colors.
function teamColors(teamInput) {
    const teamValues = Object.values(gameObject());
    const team = teamValues.find(teamArray => teamArray.teamName === teamInput);
       
    return team.colors          
}


// Build a function, teamNames, that operates on the game object to return an array of the team names.
function teamNames() {
    const teams = Object.values(gameObject()).map((team) => team.teamName)
    
    return teams
}


// Build a function, playerNumbers, that takes in an argument of a team name and returns an array of the jersey number's for that team
function playerNumbers(targetTeamName) {
    const teams = Object.values(gameObject())
    
    for (const team of teams) {
        if (team.teamName == targetTeamName) {
            let stats = Object.values(team.players);
            return stats.map((stat) => stat.number);
        }
    }
}


// Build a function, playerStats, that takes in an argument of a player's name and returns a object of that player's stats.
function playerStats(playerInput) {
    const player = playersArray.find(playerArray => playerArray[0] === playerInput)
    
    return player[1];
}


// Build a function, bigShoeRebounds, that will return the number of rebounds associated with the player that has the largest shoe size

function bigShoeRebounds() {
    const playersObj = Object.values(players())
 
    const biggest = playersObj.sort((a, b) => {
        if (a.shoe > b.shoe) return -1; 
        if (a.shoe < b.shoe) return 1;
            return 0;
      })[0];
    
      return biggest.rebound;
    }
   