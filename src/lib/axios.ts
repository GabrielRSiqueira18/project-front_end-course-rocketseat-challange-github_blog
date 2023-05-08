import axios from "axios";

export const apiGithubRepos = axios.create({
  baseURL: "https://api.github.com",
})

export const apiGithubIssues = axios.create({
  baseURL: "https://api.github.com",
})
