<template>
  <div class="home">
    <v-carousel
      hide-delimiter-background
      :show-arrows="false"
      height="400"
      class="mb-8"
    >
      <v-carousel-item
        v-for="item in itemsHeadline"
        :key="item.title"
        :src="item.urlToImage"
        reverse-transition="fade-transition"
        transition="fade-transition"
        :href="item.url"
      >
        <v-row class="fill-height mr-4 ml-8" align="center" justify="start">
          <h1 class="headline-title">{{ item.title }}</h1>
        </v-row>
      </v-carousel-item>
    </v-carousel>

    <v-row class="mb-4">
      <v-col v-for="item in itemsNews" :key="item.title" cols="12" md="4">
        <v-card class="mx-auto" max-width="400" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <div class="text-overline mb-4">{{ item.publishedAt }}</div>
              <v-list-item-title class="text-h6 mb-1">
                {{ item.title }}
              </v-list-item-title>
              <v-list-item-subtitle>{{
                item.description
              }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-card-actions>
            <v-btn outlined rounded text @click="readArticle(item.title)">
              Read
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { getNews, getHeadline } from "../api/news";

export default {
  name: "Home",
  components: {},
  data() {
    return {
      itemsHeadline: [],
      itemsNews: [],
    };
  },
  async mounted() {
    try {
      this.isLoading = true;
      const promises = [this.fetchHeadline(), this.fetchNews()];
      await Promise.all(promises);
      this.isLoading = false;
    } catch (err) {
      this.isLoading = false;
      console.log(err);
    }
  },
  methods: {
    async fetchNews() {
      const news = await getNews(6);
      const { data } = news;
      this.articles = data;
      this.itemsNews = data.articles;
    },
    async fetchHeadline() {
      const headlines = await getHeadline();
      const { data } = headlines;
      this.articles = data;
      this.itemsHeadline = data.articles;
    },
    readArticle(title) {
      this.$router.push(`article?${title}`);
    },
  },
};
</script>

<style>
.headline-title {
  color: white;
  background-color: black;
  font-weight: 700 !important;
}
</style>
