game.user = {

  initStorage() {
    const localData = JSON.parse(window.localStorage.getItem(this.name));
    game.storage = localData || {"test": {score:1, fail:2}};
  },
  addData(name, score, fail) {
    game.storage[name] = { score, fail };
    this.saveStorage();
  },
  getKeys() {
    return Object.keys(game.storage);
  },
  getValue(key) {
    let value = game.storage[key];
    return value;
  },
  saveStorage() {
      let keys = this.getKeys();
      let hash = {};
      for( let key of keys) {
        hash[key] = this.getValue(key);
      }
      window.localStorage.setItem(this.name, JSON.stringify(hash));
  },
  drawTable(){
    if (!game.running) {
      const table = document.querySelector(".score-table");


      for( let data in game.storage) {
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        td.textContent = data;
        tr.appendChild(td);
        for( let result in game.storage[data]) {
          let td = document.createElement("td");
          td.textContent = game.storage[data][result];
          tr.appendChild(td);
        }
        table.appendChild(tr);
      }
    }
  },
  drawForm(){
    game.userForm.style.display = "block";
  }


  
}