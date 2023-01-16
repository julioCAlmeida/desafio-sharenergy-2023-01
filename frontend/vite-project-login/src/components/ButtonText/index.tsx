import { Container } from "./style";

export function ButtonText({ title, ...rest }: { title: string })  {

    return (
        <Container 
            type="button" 
            {...rest}>
                {title}
        </Container>
    )
}