import axios from "axios";

export const apiGithubRepos = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: "Bearer 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",
  }
})

export const apiGithubIssues = axios.create({
  baseURL: "https://api.github.com",
})
