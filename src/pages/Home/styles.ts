import { styled } from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 1.5rem;


`

export const FormContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const TitleContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 1.125rem;
    color: ${props => props.theme["base-subtitle"]};
    font-weight: 700;
  }

  p {
    font-size: 0.875rem;
  }
`

export const Form = styled.form`
  width: 100%;
  display: flex;

  input {
    flex: 1;
    height: 3.125rem;
    padding: 12px 16px;

    background-color: ${props => props.theme["base-input"]};
    border: 1px solid ${props => props.theme["base-border"]};
    border-radius: 6px;
    color: ${props => props.theme["base-text"]};
    
    &:focus {
    outline: 0;
    box-shadow: none !important;
  }

    &:focus {
      border-color: ${props => props.theme["blue"]};
    }
  }
`

export const GithubCardsIssuesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 3rem;

  a {
    &:focus {
      box-shadow: none;
    }
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`

export const SingleGithubCardsIssuesContainer = styled.div`
  width: 100%;
  height: 20rem;
  padding: 2rem;
  
  background-color: ${props => props.theme["base-post"]};
  border: 2px solid transparent;
  border-radius: 10px;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  &:hover {
    border-color: ${props => props.theme["base-label"]};
  }

  section {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    h2 {
      width: auto;
      max-width: 18rem;
      color: ${props => props.theme["base-title"]};
    }

    span {
      color: ${props => props.theme["base-span"]} !important;
      font-size: 0.875rem;
    }
  }

   p, h2, pre {
    width: auto;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;

    @media screen and (max-width: 600px) {
      width: 25rem;

      h1 {
        max-width: 1rem !important;
      }
    }

    @media screen and (max-width: 500px) {
      width: 20rem;
      height: auto;
    }
  }
`