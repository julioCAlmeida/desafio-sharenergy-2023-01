import { Container } from "./style";

export function ButtonDelete({ title, ...rest }: { title: string })  {

    return (
        <Container 
            type="button" 
            {...rest}>
                {title}
        </Container>
    )
}