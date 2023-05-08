import { ReactNode, createContext, useEffect, useState } from "react";
import { apiGithubIssues, apiGithubRepos } from "../lib/axios";

interface GithubReposProviderProps {
  children: ReactNode
}

interface GithubRepos {
  bio: string
  avatar_url: string
  followers: number
  html_url: string
  name: string
  login: string
}

interface Issues {
  title: string
  body: string
  comments: number
  html_url: string
  number: number
  url: string
  created_at: string
  user: { login: string }
}


interface githubIssues {
  title: string
  body: string
  comments: number
  html_url: string
  number: number
  url: string
  created_at: string
  login: string
}

interface GithubReposContextType {
  githubRepo: GithubRepos
  githubIssues: githubIssues[]
 }


export const GithubReposContext = createContext({} as GithubReposContextType)

export function GithubReposProvider({children}: GithubReposProviderProps) {

  const [ githubRepo, setGithubRepos ] = useState({} as GithubRepos)
  const [ githubIssues, setGithubIssues ] = useState<githubIssues[]>([])

  async function fetchGithubRepos() {
    const response = await apiGithubRepos.get("/users/GabrielRSiqueira18")
    const { bio, avatar_url, followers, html_url, name, login } = response.data
    const gitHubInfos = { bio, avatar_url, followers, html_url, name, login}
    
    setGithubRepos(gitHubInfos)
  }

  async function fetchGithubIssues() {
    const response = await apiGithubIssues.get("/repos/GabrielRSiqueira18/github-blog-desafio-3/issues")
    const formateResponse: githubIssues[] = []
    response.data.forEach((issue: Issues) => {
      const { title, body, comments, html_url, number, url, created_at, user: { login } } = issue
      const issuesArr = { title, body, comments, html_url, number, url, created_at, login }
      formateResponse.push(issuesArr)
      
    })

    setGithubIssues(formateResponse)
   }

  useEffect(() => {
    fetchGithubRepos()
    fetchGithubIssues()
    
  }, [])

  return(
    <GithubReposContext.Provider value={{ githubRepo, githubIssues }}>
      {children}
    </GithubReposContext.Provider>
  )
}