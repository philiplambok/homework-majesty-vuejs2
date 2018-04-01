app = new Vue({
  el: "#app",
  data: {
    color: "#333",
  },
  computed:{
    style: function(){
      return {
        backgroundColor: this.color
      }
    }
  }
})