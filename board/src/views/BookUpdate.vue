<template>
  <br />
  <h1>수정임</h1>
  <input type="text" v-model="title" />

  <input type="textarea" v-model="content" />

  <button @click="bookSave" type="text" class="right-button">저장</button>
</template>
<script>
import apiBoard from "@/api/board";
export default {
  //   data() {
  //     return {
  //       title: "",
  //       content: "",
  //     };
  //   },
  mounted() {
    if (this.$route.params.id) {
      apiBoard
        .getArticle(this.$route.params.id)
        .then((response) => {
          console.log("getArticle", response);
          this.title = response.data.title;
          this.content = response.data.content;
        })
        .catch((e) => {
          console.log(e);
        });
    }
  },
  methods: {
    bookSave() {
      if (this.$route.params.id) {
        apiBoard
          .patchArticle(this.$route.params.id, this.title, this.content)
          .then((response) => {
            console.log(response);
            this.$router.push({
              path: `/book/detail/${this.$route.params.id}`,
            });
          })
          .catch((e) => {
            console.log(e);
          });
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
