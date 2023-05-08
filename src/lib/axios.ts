import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: "Bearer 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",
  }
})