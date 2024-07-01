import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "1c17b26262cd46c7ab4fd02a6fc85d06",
  },
});
