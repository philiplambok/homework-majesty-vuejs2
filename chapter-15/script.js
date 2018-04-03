class Anime {
  constructor(name, waifu){
    this.name = name
    this.waifu = waifu
  }

  print(){
    console.log(`${this.name}: ${this.waifu}`)
  }
}

new Anime('Slow Start','Shion').print()