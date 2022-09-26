Vue.component('base-card', {
  template:
  '<div class="flex justify-center basis-1/3 m-4 border rounded-sm border-black border-solid">\
      <a class="flex flex-col items-center" :href="anime.url" target="_blank">\
        <img class="w-16 h-24" :src="anime.image_url" alt="Anime Poster Image">\
        <h3>{{ anime.title }}</h3>\
      </a>\
  </div>', 
  props: {
    anime: { type: Object, required: true }
  }
});
