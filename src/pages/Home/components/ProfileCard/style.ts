import { styled } from "styled-components";

export const ProfileCardContainer = styled.div`
  background-color: ${props => props.theme["base-profile"]};
  width: 100%;
  padding: 2rem 2rem 2rem 2.5rem;
  display: flex;
  gap: 2rem;
  border-radius: 10px;
  transform: translateY(-50%);

  @media screen and (max-width: 1024px) {
    flex-wrap: wrap;
    justify-content: center;
    transform: translateY(-35%);
  }

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 1rem;
    color: ${props => props.theme.blue};
    font-size: 0.75rem;
    position: relative;
    gap: 0.5rem;
    text-decoration: none;
    font-weight: 700;
    border-top: 1px solid transparent;
    border-bottom: 1px solid transparent;

    &:hover {
      border-bottom-color: ${props => props.theme.blue};
    }
  }
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media screen and (max-width: 1024px) {
    align-items: center;
    text-align: center;
  }

`

export const InformationsAboutMe = styled.div`
 display: flex;
 flex-direction: column;
 gap: 0.5rem;
 
 @media screen and (max-width: 1024px) {
    align-items: center;
  }

 h1 {
  color: ${props => props.theme["base-title"]};
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.3;
 }
`

export const ExtrasInformationsBoutMyGithub = styled.div`
  display: flex;
  gap: 1.5rem;
`


export const SingleExtrasInformationsGithub = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  p {
    color: ${props => props.theme["base-subtitle"]};
  }

  svg {
    color: ${props => props.theme["base-label"]};
  }
`