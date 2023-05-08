import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";

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

interface GithubReposContextType {
  githubRepo: GithubRepos

}


export const GithubReposContext = createContext({} as GithubReposContextType)

export function GithubReposProvider({children}: GithubReposProviderProps) {

  const [ githubRepo, setGithubRepos ] = useState({} as GithubRepos)

  async function fetchGithubRepos() {
    const response = await api.get("/users/GabrielRSiqueira18")
    const { bio, avatar_url, followers, html_url, name, login } = response.data
    const gitHubInfos = { bio, avatar_url, followers, html_url, name, login}
    
    setGithubRepos(gitHubInfos)
  }

  useEffect(() => {
    fetchGithubRepos()
  }, [])

  return(
    <GithubReposContext.Provider value={{ githubRepo }}>
      {children}
    </GithubReposContext.Provider>
  )
}