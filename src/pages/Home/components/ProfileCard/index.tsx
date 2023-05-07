import { ContentWrapper, InformationsAboutMe, ExtrasInformationsBoutMyGithub, ProfileCardContainer, SingleExtrasInformationsGithub } from "./style";
import me from "../../../../assets/isMe.jpeg"
import { faGithub  } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faUserFriends, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export function ProfileCard() {
  return (
    <ProfileCardContainer>
      <img src={me} alt="" />
      <ContentWrapper>
        <InformationsAboutMe>
          <h1>Gabriel Ribeiro Siqueira</h1>
          <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>
        </InformationsAboutMe>
        <ExtrasInformationsBoutMyGithub>

          <SingleExtrasInformationsGithub>
            <FontAwesomeIcon icon={faGithub}/>
            <p>cameronwll</p>
          </SingleExtrasInformationsGithub>
          
          <SingleExtrasInformationsGithub>
            <FontAwesomeIcon icon={faBuilding} />
            <p>Rocketseat</p>
          </SingleExtrasInformationsGithub>
          
          <SingleExtrasInformationsGithub>
            <FontAwesomeIcon icon={faUserFriends}/>
            <p>32 seguidores</p>
          </SingleExtrasInformationsGithub>
        </ExtrasInformationsBoutMyGithub>
      </ContentWrapper>

      <a href="#">
        GITHUB
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
      </a>
    </ProfileCardContainer>
  )
}
