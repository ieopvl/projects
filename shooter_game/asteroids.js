game.asteroids = {
  asteroid: [],
  asteroidsCount: 7,
  elems: [],
  

  createAster() {
    return {
      x: Math.floor(Math.random()*game.width),
      y: -5,
      speed: 2 + Math.random()*3,
      r: 35 + Math.random()*50,
      color: "gray",
    }
  },
  create() {
    if(this.asteroid.length < this.asteroidsCount) {
      this.asteroid.push(this.createAster());
    }
  },
  update() {
    for( let elem of this.asteroid) {
      elem.y += elem.speed;
    }
    this.kill();
    this.create();
  },
  kill() {
    for (let elem of this.asteroid) {
      if(elem.y > game.height) {
        elem.y = 0;
        elem.x = Math.random()*game.width;
        elem.r = 20 + Math.random()*30
        game.missed++;
      }
    }

  },
  draw(){

    for (let elem of this.asteroid) {
      game.ctx.shadowColor='red';
      game.ctx.shadowOffsetX= 0;
      game.ctx.shadowOffsetY=0;
      game.ctx.shadowBlur=10;
      game.ctx.drawImage(game.sprites.asteroid, elem.x, elem.y, elem.r, elem.r);
    }
  },
  creatExplosing(x, y) {
    game.sounds.asteroid.play();
    for(let i = 0; i < 20; i++) {
      this.elems.push({
        x,
        y,
        speedX: (Math.random()-0.5)*2*2,
        speedY: (Math.random()-0.5)*2*2,
        size: Math.random()*10  + 15,
        opacity: 1,
        color:  Math.floor(Math.random()*(255 - 50) + 80),
      });
    }
  },
  drawExplosing() {
    if(this.elems) {
      for(let elem of this.elems) {
        elem.x += elem.speedX;
        elem.y += elem.speedY;
        game.ctx.shadowColor='red';
        game.ctx.shadowOffsetX= 0;
        game.ctx.shadowOffsetY=0;
        game.ctx.shadowBlur=7;
        game.ctx.fillStyle = 'rgba('+elem.color+',0,0,' + elem.opacity + ')';
      game.ctx.beginPath();
      game.ctx.arc(elem.x, elem.y, elem.size/2, 0, Math.PI*2, false);
      game.ctx.fill();
        if(elem.opacity > 0) elem.opacity -= 0.02
      }
    }
  },
  collide(){
    let count = 0;
    for(let asteroid of this.asteroid) {
      let x = asteroid.x;
      let y = asteroid.y;

      let bulletCount = 0;
      for( let bullet of game.playerBullets.bullets) {
        if(x + asteroid.r > bullet.x &&
           x < bullet.x + bullet.r && 
           y + asteroid.r > bullet.y &&
           y < asteroid.y + asteroid.r) {
             this.creatExplosing(bullet.x, bullet.y);
             //asteroid.r = 0;
             this.asteroid.splice(count, 1);
             game.playerBullets.bullets.splice(bulletCount, 1);
   
             game.score++;
           }
           bulletCount++
      }
      count++
    }
  }
}