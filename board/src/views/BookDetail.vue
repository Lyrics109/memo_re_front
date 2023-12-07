<template>
  <div>
    <p>{{ book.id }}</p>
    <p>{{ book.title }}</p>
    <p>{{ book.author }}</p>
    <button @click="goBack">Back</button>
  </div>
</template>

<script>
import apiBoard from "@/api/board";

export default {
  data() {
    return {
      book: {},
    };
  },
  async mounted() {
    console.log("mounted...");
    this.book = await apiBoard
      .getArticle(this.$route.params.id)
      .then((response) => {
        console.log("getArticle", response);
        return response.data;
      })
      .catch(function (e) {
        console.log(e);
      });
    console.log(this.book);
  },

  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>
