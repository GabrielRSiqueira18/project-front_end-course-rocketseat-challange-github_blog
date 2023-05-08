import { styled } from "styled-components";

export const IssuesSingleContainer = styled.div`
  padding: 1rem;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  border: 0;
  transform: translateY(-30%);

  display: flex;
  flex-direction: column;
`

export const TitleContainerIssueSingle = styled.div`
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  background-color: ${props => props.theme["base-profile"]};
  border-radius: 10px;

  
  
`

export const MenuTitleIssueSingle = styled.div`
  display: flex;
  justify-content: space-between;

  a {
    font-size: 0.75rem;
    font-weight: 700;
    color: ${props => props.theme.blue};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    border-top: 1px solid transparent;
    border-bottom: 1px solid transparent;

    &:hover {
      border-bottom-color: ${props => props.theme.blue};
    }
  }
`

export const TitleContentIssuesSingle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h2 {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.3;
    color: ${props => props.theme["base-title"]};
  }

  section {
    display: flex;
    gap: 2rem;

    span {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      color: ${props => props.theme["base-span"]};
    }
  }

`

export const IssuesMainContent = styled.main`
  width: 100%;
  padding: 2.5rem 2rem;
  gap: 1.5rem;
`