const team = {
    _players:
  [
  {firstName:'jose', lastName:'Roura', age: 20},
  {firstName:'euston', lastName:'jack', age:22},{firstName:'leo', lastName:'simon', age:25}
  ],
    _games: [
  {opponent:'newcastle', teamPoints:20, opponentPoints:2},
  {opponent:'chelsea', teamPoints:2, opponentPoints:25},
  {opponent:'brighton', teamPoints:11, opponentPoints:12}
    ],
    get players() {
      return this._players;
    },
    get games(){
      return this._games;
    },
    addPlayer(newFirstName, newLastName, newAge){
      let player = {
         firstName: newFirstName,
          lastName: newLastName,
          age: newAge
       };
        this.players.push(player);
       }
    };
  
  team.addPlayer('Fabio', 'sunny', 54);
  console.log(team.players);