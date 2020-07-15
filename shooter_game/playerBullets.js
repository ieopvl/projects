game.playerBullets = {
  bullets: [],

  createBullet() {
    return {
      r: game.ship.height/8,
      speed: 10,
      x: game.ship.x,
      y: game.ship.y - game.ship.height / 2,
    }
  },
  create() {
      this.bullets.push(this.createBullet());
  },
  update() {
    for( let elem of this.bullets) {
      elem.y -= elem.speed;
    }
    this.kill();
  },
  kill() {
    for(let i = 0; i < this.bullets.length; i++ ) {
      let elem = this.bullets[i];
      if(elem.y < 0) {
        this.bullets.splice(i, 1);
        i--;
      }
    }
  },
  draw(){
    for (let elem of this.bullets) {
      game.ctx.shadowColor='limegreen';
      game.ctx.fillStyle = "lime";
      game.ctx.beginPath();
      game.ctx.arc(elem.x, elem.y, elem.r, 0, Math.PI*2, false);
      game.ctx.fill();
    }
  }
}