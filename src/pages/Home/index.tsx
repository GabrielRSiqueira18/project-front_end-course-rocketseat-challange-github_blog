import { ProfileCard } from "./components/ProfileCard";
import { SingleGithubCardsIssues } from "./components/SingleGithubCardsIssues";
import { Form, FormContainer, GithubCardsIssuesWrapper, HomeContainer, TitleContentWrapper } from "./styles";

export function Home() {
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
        <SingleGithubCardsIssues/>
        <SingleGithubCardsIssues/>
        <SingleGithubCardsIssues/>
        <SingleGithubCardsIssues/>
        <SingleGithubCardsIssues/>
        <SingleGithubCardsIssues/>
        <SingleGithubCardsIssues/>
        <SingleGithubCardsIssues/>
        <SingleGithubCardsIssues/>
        <SingleGithubCardsIssues/>
        <SingleGithubCardsIssues/>
        <SingleGithubCardsIssues/>
        <SingleGithubCardsIssues/>
      </GithubCardsIssuesWrapper>
    </HomeContainer>
  )
} 