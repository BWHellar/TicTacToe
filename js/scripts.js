
//Sets up the images and background
x = new Image();
o = new Image();
background = new Image();
victory = new Audio();
x.src = "img/x.png";
o.src = "img/o.png";
background.src = "img/TicTacToe.png";
victory.src = "img/victory.wav";
//Turn control
playerXTurn = false;

var coords = [{id: "topLeft", x: 0, y: 0, player: 'none'},
              {id: "topMid", x: 200, y: 0, player: 'none'},
              {id: "topRight", x: 400, y:0, player: 'none'},
              {id: "midLeft", x: 0, y: 200, player: 'none'},
              {id: "midMid", x: 200, y: 200, player: 'none'},
              {id: "midRight", x: 400, y: 200, player: 'none'},
              {id: "botLeft", x: 0, y: 400, player: 'none'},
              {id: "botMid", x: 200, y: 400, player: 'none'},
              {id: "botRight", x: 400, y: 400, player: 'none'}]

// Baseline score for both X and O
var exScore = 0;
var ohScore = 0;

$().ready(function() {

//This will setup our canvas
  var canvas = $("#canvas").get(0);
  var context = canvas.getContext("2d");
  background.onload=function(){
    context.drawImage(background, 0, 0, canvas.width, canvas.height);
  }


  //Register Event Handlers
    $("button").click(function(){
      drawXO(this.id);
      $("#"+this.id).hide();
    });

    $("#newGame").click(function(){

      newGame();
    });
// New game
function newGame(){
  context.clearRect(0,0,canvas.width, canvas.height);
  context.drawImage(background, 0, 0, canvas.width, canvas.height);
  $("button").show();
  for (var i = 0; i< coords.length; i++){
    coords[i].player = 'none';
  }
}

//Draw game
  function drawXO(buttonId){

    var xPos;
    var yPos;
    var coordinate;
    var currentPlayer;

    for (var i = 0; i < coords.length; i++) {
      if (buttonId == coords[i].id) {
        xPos = coords[i].x;
        yPos = coords[i].y;
        if(playerXTurn){
          context.drawImage(x, xPos, yPos, 200, 200);
          coordinate = coords[i].id;
          coords[i].player = 'x';
        }
        else if(!playerXTurn){
          context.drawImage(o, xPos, yPos, 200, 200);
          coordinate = coords[i].id;
          coords[i].player = 'o';
        }
      }
    }
    if (playerXTurn){
      currentPlayer = "x";
    }
    else {
      currentPlayer = "o";
    }
    checkForWin(currentPlayer);
    playerXTurn = !playerXTurn;
  }
  // This checks for the win.
  function checkForWin(currentPlayer){

    //Top row
    if(coords[0].player == currentPlayer &&
      coords[1].player == currentPlayer &&
      coords[2].player == currentPlayer){
        winner(currentPlayer);
    }
    //Mid row
    else if(coords[3].player == currentPlayer &&
      coords[4].player == currentPlayer &&
      coords[5].player == currentPlayer){
        winner(currentPlayer);
    }
    //Bot row
    else if(coords[6].player == currentPlayer &&
      coords[7].player == currentPlayer &&
      coords[8].player == currentPlayer){
        winner(currentPlayer);
    }
    // Left col
    else if(coords[0].player == currentPlayer &&
      coords[3].player == currentPlayer &&
      coords[6].player == currentPlayer){
        winner(currentPlayer);
    }
    //Mid col
    else if(coords[1].player == currentPlayer &&
      coords[4].player == currentPlayer &&
      coords[7].player == currentPlayer){
        winner(currentPlayer);
    }
    //Right col
    else if(coords[2].player == currentPlayer &&
      coords[5].player == currentPlayer &&
      coords[8].player == currentPlayer){
        winner(currentPlayer);
    }
    //Diag \
    else if(coords[0].player == currentPlayer &&
      coords[4].player == currentPlayer &&
      coords[8].player == currentPlayer){
        winner(currentPlayer);
    }
    //Diag /
    else if(coords[2].player == currentPlayer &&
      coords[4].player == currentPlayer &&
      coords[6].player == currentPlayer){
        winner(currentPlayer);
    }
  }
  // This is the function to add points and to reset board.
  function winner(player){
    console.log(player + " wins!");

    $(".board").hide()
    victory.play();
    if(player == 'x'){
      exScore++;
      $('#xscore').text(exScore);
    }else if(player == 'o'){
      ohScore++;
      $('#oscore').text(ohScore);
    }
  }
});
