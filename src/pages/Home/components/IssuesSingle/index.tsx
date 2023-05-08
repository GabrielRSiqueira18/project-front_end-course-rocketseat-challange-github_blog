import { Link, useParams } from "react-router-dom"
import { IssuesMainContent, IssuesSingleContainer, MenuTitleIssueSingle, TitleContainerIssueSingle, TitleContentIssuesSingle } from "./style"
import { faArrowUpRightFromSquare, faCalendarDay, faChevronLeft, faComment } from "@fortawesome/free-solid-svg-icons"
import { faGithub  } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react";
import { apiGithubIssues } from "../../../../lib/axios";
import { formatDate } from "../../../../utils/formatter";

interface IssuesSingle {
  title: string
  body: string
  created_at: string
  html_url: string
  login: string
  comments: number
}

export function IssuesSingle() {
  const params = useParams()
  const { id } = params

  const [ issueSingleData, setIssueSingleData ] = useState({} as IssuesSingle)

  async function fetchIssueSingleData() {
    const response = await apiGithubIssues.get(`https://api.github.com/repos/GabrielRSiqueira18/github-blog-desafio-3/issues/${id}`)
    
    const { title, body, created_at, html_url, user: { login }, comments } = response.data
    setIssueSingleData({title, body, created_at, html_url,login, comments})
  }

  useEffect(() => {
    fetchIssueSingleData()
  }, [])
  
  let date
  let formattedCreatedAt

  if(issueSingleData.created_at) {
    date = new Date(issueSingleData.created_at)
  
    formattedCreatedAt = formatDate(date)
  }
  


  return (
    <IssuesSingleContainer>
      <TitleContainerIssueSingle>
        <MenuTitleIssueSingle>
          <Link to={"/"}>
            <FontAwesomeIcon icon={faChevronLeft} />
            VOLTAR
          </Link>
          <a target="_blank" href={issueSingleData.html_url}>
            VER NO GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
          </a>
        </MenuTitleIssueSingle>
        <TitleContentIssuesSingle>
          <h2>{issueSingleData.title}</h2>
          <section>
            <span>
              <FontAwesomeIcon icon={faGithub} />
              {issueSingleData.login}
            </span>
            <span>
              <FontAwesomeIcon icon={faCalendarDay} />
              {formattedCreatedAt ? formattedCreatedAt : "Aguarde"}
            </span>
            <span>
              <FontAwesomeIcon icon={faComment} />
              {issueSingleData.comments} comentários
            </span>
          </section>
        </TitleContentIssuesSingle>
      </TitleContainerIssueSingle>
      <IssuesMainContent>
        <p>
          {issueSingleData.body}
        </p>
      </IssuesMainContent>
    </IssuesSingleContainer>
  )
}