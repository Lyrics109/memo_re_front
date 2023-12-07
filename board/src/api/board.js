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
};
