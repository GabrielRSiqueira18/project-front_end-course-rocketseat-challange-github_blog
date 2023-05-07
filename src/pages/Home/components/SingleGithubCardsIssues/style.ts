import { styled } from "styled-components";

export const SingleGithubCardsIssuesContainer = styled.div`
  width: 100%;
  height: 20rem;
  padding: 2rem;
  
  background-color: ${props => props.theme["base-post"]};
  border: 0;
  border-radius: 10px;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  
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
      color: ${props => props.theme["base-span"]};
      font-size: 0.875rem;
    }
  }

  p {
    width: 100%;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
  }
`