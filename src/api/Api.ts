import axios from "axios";

const apiKey = "efbc2b95033e7dde757b6c455744baa2";

export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: apiKey,
  },
});
