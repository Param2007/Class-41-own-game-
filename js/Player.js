class Player {
  constructor(){
    this.index = null;
    this.points = 0;
    this.name = null;
    this.rank = null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      points: this.points
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }

  getCarsAtEnd() {
    var getCarsAtEndRef = database.ref('CarsAtEnd');
    getCarsAtEndRef.on("value",(data) => {
      this.rank = data.val();
    });
  }

  static updateCarsAtEnd(rank) {
    var updateCarsAtEnd = database.ref('/');
    updateCarsAtEnd.update({
      CarsAtEnd: rank
    });
  }
  
}
