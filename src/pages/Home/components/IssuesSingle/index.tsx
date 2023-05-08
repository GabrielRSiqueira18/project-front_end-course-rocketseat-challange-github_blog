import { Link, useParams } from "react-router-dom"
import { IssuesMainContent, IssuesSingleContainer, MenuTitleIssueSingle, TitleContainerIssueSingle, TitleContentIssuesSingle } from "./style"
import { faArrowUpRightFromSquare, faCalendarDay, faChevronLeft, faComment } from "@fortawesome/free-solid-svg-icons"
import { faGithub  } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export function IssuesSingle() {
  const params = useParams()

  const { id } = params
  console.log(params)

  return (
    <IssuesSingleContainer>
      <TitleContainerIssueSingle>
        <MenuTitleIssueSingle>
          <Link to={"/"}>
            <FontAwesomeIcon icon={faChevronLeft} />
            VOLTAR
          </Link>
          <Link to={"/"}>
            VER NO GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
          </Link>
        </MenuTitleIssueSingle>
        <TitleContentIssuesSingle>
          <h2>JavaScript data types and data structures</h2>
          <section>
            <span>
              <FontAwesomeIcon icon={faGithub} />
              cameronwll
            </span>
            <span>
              <FontAwesomeIcon icon={faCalendarDay} />
              Há 1 dia
            </span>
            <span>
              <FontAwesomeIcon icon={faComment} />
              5 comentários
            </span>
          </section>
        </TitleContentIssuesSingle>
      </TitleContainerIssueSingle>
      <IssuesMainContent>
        <p>
          Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.
          Dynamic typing
          JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:
        </p>
      </IssuesMainContent>
    </IssuesSingleContainer>
  )
}