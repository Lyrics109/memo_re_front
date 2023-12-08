import axios from "axios";

const BASE_URL = "http://localhost:8080/";

export default {
  getArticle: function (id) {
    return axios.get(BASE_URL + `api/books/${id}`);
  },

  getArticles: function (page) {
    console.log(page);
    return axios.get(BASE_URL + `api/books`);
  },
  postArticle: function (userId, title, content) {
    return axios.post(BASE_URL + "posts", {
      userId: userId,
      title: title,
      content: content,
    });
  },
  patchArticle: function (id, title, content) {
    return axios.patch(BASE_URL + `posts/${id}`, {
        title: title,
        content: content,
    });
},
};
