import { ProfileCard } from "./components/ProfileCard";
import { Footer, Form, FormContainer, GithubCardsIssuesWrapper, HomeContainer, SingleGithubCardsIssuesContainer, TitleContentWrapper } from "./styles";
import { useContext } from "react";
import { GithubReposContext } from "../../contexts/GithubReposContext";
import { Link } from "react-router-dom";
import { formatDate } from "../../utils/formatter";
import ReactMarkdown from "react-markdown";
import {dracula} from 'react-syntax-highlighter/dist/esm/styles/prism'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import * as z from "zod"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const searchIssueFormSchema = z.object({
  query: z.string(),
})

type SearchIssueFormInputs = z.infer<typeof searchIssueFormSchema>

export function Home() {
  const { fetchSearchGithubIssues } = useContext(GithubReposContext)

  const { register, handleSubmit, reset} = useForm<SearchIssueFormInputs>({
    resolver: zodResolver(searchIssueFormSchema),
    defaultValues: {
      query: "",
    }
  })

  function handleSubmitSearchQuery(data: SearchIssueFormInputs) {
    fetchSearchGithubIssues(data.query)
  reset()
  }

  const { githubIssues } = useContext(GithubReposContext)
  
  const issuesLength = githubIssues.length

  return (
    <HomeContainer>
      <ProfileCard />
      <FormContainer>
        <TitleContentWrapper>
          <h2>Publicações</h2>
          <p>{issuesLength} publicações</p>
        </TitleContentWrapper>
        <Form onSubmit={handleSubmit(handleSubmitSearchQuery)}>
          <input
            type="text" 
            placeholder="Buscar conteúdo" 
            {...register("query")}
          />
        </Form>
      </FormContainer>
      <GithubCardsIssuesWrapper>
        {githubIssues.map(issues => {
          let date
          let formattedCreatedAt
        
          if(issues.created_at) {
            date = new Date(issues.created_at)
          
            formattedCreatedAt = formatDate(date)
          }

          return(
            <Link to={`/issues/${issues.number}`} key={issues.number}>
              <SingleGithubCardsIssuesContainer>
                <section>
                  <h2>{issues.title}</h2>
                  <span>{formattedCreatedAt}</span>
                </section>
                <ReactMarkdown
                  children={issues.body}
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
              </SingleGithubCardsIssuesContainer>
            </Link>
          )
        })}
      </GithubCardsIssuesWrapper>
      <Footer>
        <a target="_blank" href="https://github.com/GabrielRSiqueira18/github-blog-desafio-3">Code in Github</a>
        <a target="_blank" href="https://github.com/GabrielRSiqueira18">Profile Github</a>
      </Footer>
    </HomeContainer>
  )
} 