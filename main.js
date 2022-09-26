new Vue({
  el: "#vue-app",
  components: {
    'the-header': theHeader
  }, 
  data: function() {
    return {
      text: 'Hello World!'
    }
  }
});
