import { FiPlus, FiSearch } from "react-icons/fi";

import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/Header/index"

import { Brand, Container, Content, Menu } from "./style";
import { ListCats } from "../../components/ListCats";

export function Cat() {
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
                <ListCats/>
            </Content>

        </Container>
    )
}