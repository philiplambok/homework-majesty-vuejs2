app = new Vue({
  el: "#app",
  data: {
    mayors: [
      {name: "Mr.Blank", upvote: 0},
      {name: "Mr.Pink", upvote: 0},
      {name: "Mr.White", upvote: 0},
      {name: "Mr.Brown", upvote: 0}
    ]
  },
  methods: {
    reset(){
      this.mayors.forEach(function(el){
        el.upvote = 0
      })
    },
  },
  computed: {
    currentMayor(){
      sortedMayors = this.mayors.sort(function(a, b){
        return b.upvote - a.upvote
      })

      return sortedMayors[0]
    }
  }
})