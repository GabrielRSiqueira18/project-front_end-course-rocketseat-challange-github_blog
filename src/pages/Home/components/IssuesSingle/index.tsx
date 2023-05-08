import { Link, useParams } from "react-router-dom"
import { IssuesMainContent, IssuesSingleContainer, MenuTitleIssueSingle, TitleContainerIssueSingle, TitleContentIssuesSingle } from "./style"
import { faArrowUpRightFromSquare, faCalendarDay, faChevronLeft, faComment } from "@fortawesome/free-solid-svg-icons"
import { faGithub  } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react";
import { apiGithub } from "../../../../lib/axios";
import { formatDate } from "../../../../utils/formatter";
import ReactMarkdown from "react-markdown";
import {dracula} from 'react-syntax-highlighter/dist/esm/styles/prism'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'

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
    const response = await apiGithub.get(`/repos/GabrielRSiqueira18/github-blog-desafio-3/issues/${id}`)
    
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
      <ReactMarkdown
        children={issueSingleData.body}
        components={{
          code({node, inline, className, children, ...props}) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <SyntaxHighlighter
                {...props}
                children={String(children).replace(/\n$/, '')}
                style={dracula}
                language={match[1]}
                PreTag="div"
              />
            ) : (
              <code {...props} className={className}>
                {children}
              </code>
            )
          }
        }}
      />
      </IssuesMainContent>
    </IssuesSingleContainer>
  )
}