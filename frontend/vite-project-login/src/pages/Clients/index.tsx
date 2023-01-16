import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/Header/index"

import { Brand, Container, Content, Menu } from "./style";


export function Clients() {
    return (
        <Container>
            <Brand>
                <h1>SharEnergy</h1>
            </Brand>

            <Header/>

            <Menu>
                <li><ButtonText title="Random User Generator"/></li>
                <li><ButtonText title="HTTP Cat"/></li>
                <li><ButtonText title="Random Dog"/></li>
                <li><ButtonText title="Clientes"/></li>
            </Menu>

            <Content>
                <h1>Cadastro de clientes</h1>
            </Content>  
        </Container>
    )
}