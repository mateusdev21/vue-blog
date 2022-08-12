<template>
  <div class="article ml-4 mt-4 mr-4">
    <h1 class="mb-4">{{ items[0].title }}</h1>
    <h4 class="mb-8">{{ items[0].description }}</h4>
    <div class="d-flex flex-row mt-4">
      <v-img class="mr-4" max-width="400" :src="items[0].urlToImage"></v-img>
      <div>
        <p>{{ items[0].content }}</p>
        <p class="mb-0">See Full Article :</p>
        <a class="news-link">{{ items[0].url }}</a>
        <p class="mb-0 mt-8">Share :</p>
        <div class="d-flex flex-row mt-4">
          <v-btn class="mx-2" fab dark small color="primary" depressed>
            <v-icon dark> mdi-twitter </v-icon>
          </v-btn>
          <v-btn class="mx-2" fab dark small color="#1877f2" depressed>
            <v-icon dark> mdi-facebook </v-icon>
          </v-btn>
          <v-btn class="mx-2" fab dark small color="#ca0067" depressed>
            <v-icon dark> mdi-instagram </v-icon>
          </v-btn>
          <v-btn class="mx-2" fab dark small color="success" depressed>
            <v-icon dark> mdi-whatsapp </v-icon>
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getArticle } from "../api/news";

export default {
  name: "Article",
  data() {
    return {
      items: [],
    };
  },
  async mounted() {
    try {
      this.isLoading = true;
      const promises = [this.fetchArticle()];
      await Promise.all(promises);
      this.isLoading = false;
    } catch (err) {
      this.isLoading = false;
      console.log(err);
    }
  },
  methods: {
    async fetchArticle() {
      const article = await getArticle(this.$route.query.q);
      const { data } = article;
      this.items = data.articles;
    },
  },
};
</script>

<style>
.news-link {
  color: gray !important;
}
.news-link:hover {
  color: black !important;
}
</style>
