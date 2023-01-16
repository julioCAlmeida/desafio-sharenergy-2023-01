import { IconType } from "react-icons/lib";
import { Container } from "./style";

export function Input({...rest}) {

    return (
        <Container>
             <input {...rest} />
        </Container>
    )
}