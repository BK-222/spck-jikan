const theHeader = {
  template:
  '<div class="text-center">\
  <h1 class="text-2xl">Jikan API Database</h1>\
    <form @submit.prevent="search">\
      <input type="search" placeholder="search..." v-model="search_query" v-focus>\
    </form>\
    <div class="flex justify-center flex-wrap">\
      <base-card v-for="anime in localData" :key="anime.mal_id" :anime="anime">\
      </base-card>\
    </div>\
  </div>',
  data: function() {
    return {
      localData: [], 
      search_query: 'mushishi'
    }
  }, 
  methods: {
    search: async function() {
      const response = await fetch(`https://api.jikan.moe/v3/search/anime?q=${this.search_query}`, { method: 'GET' });
      const responseData = await response.json();
      if (!response.ok) {
        console.log(response);
        const error = new Error(responseData.message || 'Something went wrong!');
        throw error;
      }
        console.log(responseData.results);
        this.localData = responseData.results;
      }
  },
  directives: {
    focus: {
      inserted: function(el) {
        el.focus();
      }
    }
  }, 
  mounted() {
    this.search();
  }
};
