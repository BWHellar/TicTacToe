
//images and canvas
x = new Image();
o = new Image();
background = new Image();
x.src = "img/x.png";
o.src = "img/o.png";
background.src = "img/TicTacToe.png";

//Turn control
playerXTurn = false;

//coordinates
// topLeft = {x: 0, y: 0}
// topMid = {x: 200, y: 0}
// topRight = {x: 400, y:0}
// midLeft = {x: 0, y: 200}
// midMid = {x: 200, y: 200}
// midRight = {x: 400, y: 200}
// botLeft = {x: 0, y: 400}
// botMid = {x: 200, y: 400}
// botRight = {x: 400, y: 400}

var coords = [{id: "topLeft", x: 0, y: 0},
              {id: "topMid", x: 200, y: 0},
              {id: "topRight", x: 400, y:0},
              {id: "midLeft", x: 0, y: 200},
              {id: "midMid", x: 200, y: 200},
              {id: "midRight", x: 400, y: 200},
              {id: "botLeft", x: 0, y: 400},
              {id: "botMid", x: 200, y: 400},
              {id: "botRight", x: 400, y: 400}]

$().ready(function(){

//setup canvas
  var canvas = $("#canvas").get(0);
  var context = canvas.getContext("2d");


  draw();

//Draw game
  function draw(buttonId){

    context.drawImage(background, 0, 0, canvas.width, canvas.height);

  }

  function drawXO(buttonId){

    var xPos;
    var yPos;
    for (var i = 0; i < coords.length; i++) {
      if (buttonId == coords[i].id) {
        xPos = coords[i].x;
        yPos = coords[i].y;

      }
    }

    if(playerXTurn){
      context.drawImage(x, xPos, yPos, 200, 200)

    }
    else if(!playerXTurn){
      context.drawImage(o, xPos, yPos, 200, 200)
    }

    //switch turns
    playerXTurn = !playerXTurn;
  }


  $("button").click(function(){
    console.log(this.id);
    drawXO(this.id)
    this.remove();
  });

});
