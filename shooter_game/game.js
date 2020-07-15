"use strict";

const KEYS = {
  LEFT: 37,
  RIGHT: 39,
  TOP: 38,
  BOTTOM: 40,
  SPACE: 32,
};

const game = {
  name: 'space shooter',
  running: true,
  cnvs: null,
  ctx: null,

  userForm: null,
  addBtn: null,
  left: null,
  right: null,
  fire: null,
  hit: null,
  fail: null,

  width: 950,
  height: 876,
  startHeight: 0,
  scrollSpeed: 12,

  sprites: {
    background: null,
    block: null,
    asteroid: null,
  },
  sounds: {
    asteroid: null,
    collide: null,
    fire: null,
    gameover: null,
  },

  score: 0,
  missed: 0,
  storage: null,

  init() {
    this.cnvs = document.getElementById("gameCanvas");
    this.ctx = this.cnvs.getContext("2d");

    this.left = document.getElementById("left");
    this.right = document.getElementById("right");
    this.fire = document.getElementById("fire");

    this.hit = document.querySelector(".hit");
    this.fail = document.querySelector(".fail");

    this.userForm = document.querySelector('.user');
    this.addBtn = document.querySelector(".add");

    this.setEvents();
    this.user.initStorage();
  },
  setEvents() {
    window.addEventListener("keydown", e => {
      if (e.keyCode === KEYS.TOP ||
          e.keyCode === KEYS.BOTTOM ||
          e.keyCode === KEYS.LEFT ||
          e.keyCode === KEYS.RIGHT ||
          e.keyCode === KEYS.SPACE) {
            e.preventDefault();
        this.ship.start(e.keyCode);
      }
    });
    window.addEventListener("keyup", e => {
      if (e.keyCode === KEYS.TOP ||
        e.keyCode === KEYS.BOTTOM ||
        e.keyCode === KEYS.LEFT ||
        e.keyCode === KEYS.RIGHT) {
        this.ship.stop(e.keyCode);
      }
    });

    this.left.addEventListener("touchstart", e => {
      e.preventDefault();
      this.ship.start(KEYS.LEFT);
    });

    this.left.addEventListener("touchend", e => {
      this.ship.stop(KEYS.LEFT);
    });

    this.right.addEventListener("touchstart", e => {
      e.preventDefault();
      this.ship.start(KEYS.RIGHT);
    });

    this.right.addEventListener("touchend", e => {
      e.preventDefault();
      this.ship.stop(KEYS.LEFT);
    });

    this.fire.addEventListener("touchstart", e => {
      e.preventDefault();
      this.ship.start(KEYS.SPACE);
    });

    this.fire.addEventListener("touchend", e => {
      e.preventDefault();
      this.ship.stop(KEYS.SPACE);
    });

    this.cnvs.addEventListener("touchmove", e => {
      if(!this.running) window.location.reload();
    });

    this.cnvs.addEventListener("click", e => {
      if(!this.running) window.location.reload();
    });

    this.addBtn.addEventListener("click", e => {
      let nameUser = document.querySelector('.userName').value;
      game.user.addData(nameUser, this.score, this.missed);
      this.userForm.style.display = 'none';
    })

  },
  preload(callback) {
    let loaded = 0;
    let required = Object.keys(this.sprites).length;
        required += Object.keys(this.sounds).length;
    let onLoad = () => {
      ++loaded;
      if( loaded >= required) {
        callback();
      }
    };

    this.preloadSprites(onLoad);
    this.preloadSounds(onLoad);
  },
  preloadSprites(onLoad) {
    for (let key in this.sprites) {
      this.sprites[key] = new Image();
      this.sprites[key].src = "images/" + key + ".png";
      this.sprites[key].addEventListener("load", onLoad);
    }
  },
  preloadSounds(onLoad) {
    for (let key in this.sounds) {
      this.sounds[key] = new Audio("assets/sounds/" + key + ".mp3");
      this.sounds[key].addEventListener("canplaythrough", onLoad, {once: true});
    }
  },
  update() {
    this.ship.collideMapBounds();
    this.ship.collide();
    this.asteroids.collide();
    this.ship.move();
    this.asteroids.update();
    this.playerBullets.update();
    this.ship.drawExplosing();

    this.addScore(this.score, this.missed);
  },
  run() {
    if(this.running) {
      window.requestAnimationFrame(() => {
        this.update();
        this.render();
        this.run();
      });
    }
  },
  render() {
    this.ctx.clearRect(0,0, this.width, this.height);
    this.ctx.drawImage(this.sprites.background, 0, 0, this.width, this.height);
    this.ship.draw();
    this.asteroids.draw();
    this.playerBullets.draw();
    this.ship.drawExplosing();
    this.asteroids.drawExplosing();
    this.user.drawTable();
  },
  start() {
    this.init();
    this.preload(() => {
      this.run();
    });
  },
  addScore(score, fail) {
    this.hit.textContent = score;
    this.fail.textContent = fail;
  }
};


window.addEventListener("load", () => {
  start(game.start.bind(game));
});
