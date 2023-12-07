<template>
  <h1>hi</h1>
  <b-button variant="danger" @click="clicked">{{ book.id }}</b-button>
  <h1>{{ book.title }}</h1>
  <h1>{{ books.title }}</h1>
  <h1>{{ books.isbn }}</h1>
</template>

<script>
import apiBoard from "@/api/board";
export default {
  data() {
    return {
      book: {},
      books: [],
    };
  },
  async mounted() {
    this.book = await apiBoard
      .getArticle(5)
      .then(function (response) {
        console.log("getArticle", response);
        return response.data;
      })
      .catch(function (e) {
        console.log(e);
      });

    this.books = await apiBoard
      .getArticles(0)
      .then((response) => {
        console.log("getArticles", response);
        return response.data.list[0];
      })
      .catch(function (e) {
        console.log(e);
      });
  },
  // row 값을 주지 않았었음, 그래서 defined 뜸, id값에 this.book.id값 주면 됨.
  methods: {
    clicked() {
      console.log();
      this.$router.push({
        path: `/book/detail/${this.book.id}`,
      });
    },
  },
};
</script>
