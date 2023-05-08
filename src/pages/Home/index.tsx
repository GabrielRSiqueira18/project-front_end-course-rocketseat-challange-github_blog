import { ProfileCard } from "./components/ProfileCard";
import { Form, FormContainer, GithubCardsIssuesWrapper, HomeContainer, SingleGithubCardsIssuesContainer, TitleContentWrapper } from "./styles";
import { useContext } from "react";
import { GithubReposContext } from "../../contexts/GithubReposContext";
import { Link } from "react-router-dom";
import { formatDate } from "../../utils/formatter";

export function Home() {
  const { githubIssues } = useContext(GithubReposContext)
  
  return (
    <HomeContainer>
      <ProfileCard />
      <FormContainer>
        <TitleContentWrapper>
          <h2>Publicações</h2>
          <p>6 publicações</p>
        </TitleContentWrapper>
        <Form>
          <input type="text" placeholder="Buscar conteúdo" />
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
                <p>
                  {issues.body}
                </p>
              </SingleGithubCardsIssuesContainer>
            </Link>
          )
        })}
      </GithubCardsIssuesWrapper>
    </HomeContainer>
  )
} 