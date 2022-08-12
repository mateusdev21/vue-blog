<template>
  <div class="list ml-4 mt-4 mr-4">
    <h2 class="mb-4">List of Articles</h2>
    <DataTable :headers="headers" :items="items" :item-key="items.title" />
  </div>
</template>

<script>
import DataTable from "../components/DataTable.vue";
import { getNews } from "../api/news";

export default {
  name: "list",
  components: {
    DataTable,
  },
  data() {
    return {
      headers: [
        { text: "Source", value: "source", align: "center", sortable: true },
        { text: "Author", value: "author", align: "center", sortable: true },
        { text: "Title", value: "title", align: "left", sortable: false },
        {
          text: "Published At",
          value: "publishedAt",
          align: "center",
          sortable: true,
        },
        { text: "Action", value: "action", align: "center", sortable: false },
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
      function getSourceName(item) {
        return (item.source = item.source.name);
      }

      this.items.map(addAction);
      function addAction(item) {
        return (item.action = "Read");
      }
    },
  },
};
</script>
