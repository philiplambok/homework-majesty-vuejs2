Vue.component("chariot", {
  template: "#chariot-template",
  props: ["chariot"],
  methods: {
    isRiding: function(){
      if(this.chariot.number != 2) {
        return false
      }

      return true
    },
  },
  computed: {
    status: function(){
      if(this.chariot.number === 1 ) {
        return "Dismiss"
      }

      if(this.chariot.number == 2) {
        return "Riding !"
      }

      if(this.chariot.number > 2) {
        return "Hire Horses"
      }
    }
  }
})

app = new Vue({
  el: "#app",
  data: {
    chariots: [
      {name: "Olympus", number: 4},
      {name: "Sagitta", number: 3},
      {name: "Icarus", number: 2},
      {name: "Abraxas", number: 1},
    ]
  }
})