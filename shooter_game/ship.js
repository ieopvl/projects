game.ship = {
  x: game.width / 2,
  y: game.height * 4/5,

  width: 56,
  height: 45,
  r: game.width / 30,

  moving: false,
  speed: 4,
  dx: 0,
  dy: 0,

  active: true,
  elems: [],


  draw() {

    if (this.active) {
      if (this.moving) {
        game.ctx.strokeStyle = "orange";
        game.ctx.lineCap='round';
        game.ctx.lineWidth = this.r*1.1;
  
        game.ctx.shadowColor='red';
        game.ctx.shadowOffsetX= 0;
        game.ctx.shadowOffsetY=0;
        game.ctx.shadowBlur=10;
  
        game.ctx.beginPath();
        game.ctx.moveTo(
          this.x,
          this.y
        );
        game.ctx.lineTo(
          this.x,
          this.y + this.width/4,
        );
        game.ctx.stroke();
      }

      //reset
      game.ctx.shadowBlur= 0;
      game.ctx.lineWidth = 1;

      game.ctx.strokeStyle = "goldenrod";
      game.ctx.fillStyle='goldenrod';
      game.ctx.fillRect(this.x - this.width /2,
                        this.y - 15 /2,
                        this.width,
                        15);

      game.ctx.fillStyle='aqua';
      game.ctx.beginPath();
      game.ctx.arc(this.x, this.y - 20, this.height*0.85, 45*Math.PI/180, 135*Math.PI/180, false);
      game.ctx.fill();

      game.ctx.fillStyle='aquamarine';
      game.ctx.beginPath();
      game.ctx.arc(this.x, this.y + 20, this.height*0.85, 315*Math.PI/180, 225*Math.PI/180, true);
      game.ctx.fill();

      game.ctx.fillStyle='blue';
      game.ctx.beginPath();
      game.ctx.arc(this.x, this.y - 15, this.height/4.5, 0, Math.PI, true);
      game.ctx.fill();

      game.ctx.fillStyle='indigo';
      game.ctx.beginPath();
      game.ctx.arc(this.x, this.y, this.r/6, 0, Math.PI*2, false);
      game.ctx.arc(this.x - 20, this.y, this.r/6, 0, Math.PI*2, false);
      game.ctx.arc(this.x + 20, this.y, this.r/6, 0, Math.PI*2, false);
      game.ctx.fill();

          //reset
          game.ctx.shadowBlur= 0;
          game.ctx.lineWidth = 1;

      game.ctx.strokeStyle = "purple";
      game.ctx.lineCap='round';
      game.ctx.lineWidth = 4;
      game.ctx.beginPath();
      game.ctx.moveTo(
        this.x - 20,
        this.y - 12
      );
      game.ctx.lineTo(
        this.x - 30,
        this.y - 20,
      );
      game.ctx.stroke();

      game.ctx.strokeStyle = "purple";
      game.ctx.lineCap='round';
      game.ctx.lineWidth = 4;
      game.ctx.beginPath();
      game.ctx.moveTo(
        this.x + 20,
        this.y - 12
      );
      game.ctx.lineTo(
        this.x + 30,
        this.y - 20,
      );
      game.ctx.stroke();

      game.ctx.fillStyle='red';
      game.ctx.beginPath();
      game.ctx.shadowColor='orange';
        game.ctx.shadowOffsetX= 0;
        game.ctx.shadowOffsetY=0;
        game.ctx.shadowBlur=7;
      game.ctx.arc(this.x + 30, this.y - 20, this.r/7, 0, Math.PI*2, false);
      game.ctx.arc(this.x - 30, this.y - 20, this.r/7, 0, Math.PI*2, false);
      game.ctx.fill();
    }
  },
  start(direction) {
    if(direction === KEYS.LEFT) {
      this.dx = -this.speed;
      this.moving = true;
    } else if (direction === KEYS.RIGHT) {
      this.dx = this.speed;
      this.moving = true;
    } else if (direction === KEYS.TOP) {
      this.dy = -this.speed;
      this.moving = true;
    } else if (direction === KEYS.BOTTOM) {
      this.dy = this.speed;
      this.moving = true;
    } else if (direction === KEYS.SPACE) {
      game.playerBullets.create();
      game.sounds.fire.play();
    }
  },
  stop(direction) {
    this.moving = false;
    this.dx = 0;
    this.dy = 0;
  },
  move() {
    if (this.dx || this.dy) {
      this.x += this.dx;
      this.y += this.dy;
    }
    if (this.da) {
      this.a += this.da;
    }
  },
  collideMapBounds() {
    let x = this.x + this.dx;
    let y = this.y + this.dy;

    let shipLeftSide = x - this.width/2;
    let shipRightSide = x + this.width/2;
    let shipTopSide = y - this.r;
    let shiptBottomSide = y + this.r;

    let mapLeftSide = 0;
    let mapRightSide = game.width;
    let mapTopSide = 0;
    let mapBottomSide = game.height;

    if (shipLeftSide < mapLeftSide ||
        shipRightSide > mapRightSide ||
        shipTopSide < mapTopSide ||
        shiptBottomSide > mapBottomSide) {
      this.stop();
    }
  },
  creatExplosing() {
      for(let i = 0; i < 30; i++) {
        this.elems.push({
          x: game.ship.x - game.ship.width / 2,
          y: game.ship.y - game.ship.height / 2,
          speedX: (Math.random()-0.5)*2*5,
          speedY: (Math.random()-0.5)*2*5,
          size: Math.random()*10  + 5,
          opacity: 1
        });
    }
  },
  drawExplosing() {
  if(!this.active) {
    if(this.elems) {
      for(let elem of this.elems) {
        elem.x += elem.speedX;
        elem.y += elem.speedY;
        game.ctx.shadowColor='8, 141, 158';
        game.ctx.shadowOffsetX= 0;
        game.ctx.shadowOffsetY=0;
        game.ctx.shadowBlur=10;
        game.ctx.fillStyle = 'rgba(24, 176, 196,' + elem.opacity + ')';
        game.ctx.fillRect(elem.x, elem.y, elem.size, elem.size);
        if(elem.opacity > 0) elem.opacity -= 0.01
      }
      if(this.elems.every((elem) => elem.opacity < 0)) game.running = false;
    }
  }

  },
  collide(){
    let x = this.x + this.speed;
    let y = this.y + this.speed;

    for(let asteroid of game.asteroids.asteroid) {
      if(x + this.width /2 > asteroid.x &&
          x - this.width /2 < asteroid.x + asteroid.r &&
          y + this.height / 2> asteroid.y &&
          y < asteroid.y + asteroid.r) {
            this.creatExplosing();
            game.asteroids.creatExplosing(asteroid.x, asteroid.y);
            asteroid.r = 0;
            this.active = false;
            game.sounds.gameover.play();
            game.user.drawForm();
      }
    }
  }
}





