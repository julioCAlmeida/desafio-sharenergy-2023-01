import { RiShutDownLine } from "react-icons/ri";
import { Container, Profile, Logout } from "./style";

export function Header() {
    return(
        <Container>
            <Profile>
                <div>
                    <span>Bem-vindo</span>
                    <strong>Nome do usuário</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine/>
            </Logout>
        </Container>
    )
}