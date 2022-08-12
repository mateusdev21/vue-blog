<template>
  <div class="component-testing ml-4 mt-4 mr-4">
    <h1>Component Testing Page</h1>
    <Breadcrumbs />
    <ArticleCard />
    <button @click="showTest()">test</button>
    <div v-if="articles">
      <p>{{ articles }}</p>
    </div>
    <DataTable
      :headers="headers"
      :items="items"
      :item-key="items.title"
    />
  </div>
</template>

<script>
import Breadcrumbs from "../components/Breadcrumb.vue";
import ArticleCard from "../components/ArticleCard.vue";
import DataTable from "../components/DataTable.vue";
import { getNews } from "../api/news";

export default {
  name: "component-testing",
  components: {
    Breadcrumbs,
    ArticleCard,
    DataTable
  },
  data() {
    return {
      articles: "",
      headers: [
        { text: "Source", value: "source", align: "center", sortable: false },
        { text: "Author", value: "author", align: "center", sortable: false },
        { text: "Title", value: "title", align: "left", sortable: false },
      ],
      items: [],
    };
  },
  async mounted() {
    try {
      this.isLoading = true;
      const promises = [this.fetchNews()];
      await Promise.all(promises);
      this.isLoading = false;
    } catch (err) {
      this.isLoading = false;
      console.log(err);
    }
  },
  methods: {
    async fetchNews() {
      const response = await getNews();
      const { data } = response;
      this.articles = data;
      this.items = data.articles;

      this.items.map(getSourceName);
      function getSourceName(item){
        return item.source = item.source.name
      }
    },
  },
};
</script>
