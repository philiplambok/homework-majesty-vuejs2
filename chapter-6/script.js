app = new Vue({
  el: "#app",
  data: {
    waifus: [
      {name: "Emilia",age: 240,},
      {name: "Rem",age: 20,},
      {name: "Asuna",age: 24,},
      {name: "Aoba",age: 23,},
      {name: "Vampires",age: 66,},
    ],
  },
  computed: {
    orderedWaifus: function(){
      return _.orderBy(this.waifus, ["age"], ["desc"])
    },
    oldWaifus: function(){
      return this.waifus.filter(function(waifu){
        return waifu.age > 65
      })
    }
  }
})