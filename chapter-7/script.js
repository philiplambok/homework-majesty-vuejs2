Vue.component('anime',{
  template: "#anime-template",
  props: ["anime"],
  methods: {
    watch: function(){
      this.anime.watch += 1
    },
    isOverWatch: function(){
      if(this.anime.watch < 3){
        return false
      }

      return true
    },
    isWatched: function(){
      if (this.anime.watch == 0) {
        return false
      }

      return true
    }
  }
})


app = new Vue({
  el: "#app",
  data: {
    animes: [
      {name: "Yuru Camp", watch: 0},
      {name: "Just Because", watch: 0},
      {name: "Swort Art Online", watch: 0},
      {name: "Slow Start", watch: 0},
    ]
  }
})