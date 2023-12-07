<template>
  <br />
  <h1>작성인서트임</h1>

  <input type="text" v-model="title" />

  <input type="textarea" v-model="content" />

  <button @click="bookSave" type="text" class="right-button">저장</button>
</template>
<script>
import apiBoard from "@/api/board";
export default {
  data() {
    return {
      title: "",
      content: "",
    };
  },
  methods: {
    bookSave() {
      if (!this.title || !this.content) {
        return;
      }

      apiBoard
        .postArticle(0, this.title, this.content)
        .then((response) => {
          console.log(response);
          this.$router.push({ path: "/" });
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>
