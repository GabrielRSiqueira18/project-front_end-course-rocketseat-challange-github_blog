import { ContentWrapper, InformationsAboutMe, ExtrasInformationsBoutMyGithub, ProfileCardContainer, SingleExtrasInformationsGithub } from "./style";
import { faGithub  } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { GithubReposContext } from "../../../../contexts/GithubReposContext";
import { faUserFriends, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export function ProfileCard() {
  const { githubRepo } = useContext(GithubReposContext)

  return (
    <ProfileCardContainer>
      <img src={githubRepo.avatar_url} alt="" />
      <ContentWrapper>
        <InformationsAboutMe>
          <h1>{githubRepo.name}</h1>
          <p>{githubRepo.bio}</p>
        </InformationsAboutMe>
        <ExtrasInformationsBoutMyGithub>

          <SingleExtrasInformationsGithub>
            <FontAwesomeIcon icon={faGithub}/>
            <p>{githubRepo.login}</p>
          </SingleExtrasInformationsGithub>
          
          <SingleExtrasInformationsGithub>
            <FontAwesomeIcon icon={faUserFriends}/>
            <p>{githubRepo.followers} seguidores</p>
          </SingleExtrasInformationsGithub>
        </ExtrasInformationsBoutMyGithub>
      </ContentWrapper>

      <a target="_blank" href={githubRepo.html_url}>
        GITHUB
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
      </a>
    </ProfileCardContainer>
  )
}
