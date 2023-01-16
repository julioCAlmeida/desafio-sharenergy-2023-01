import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";

import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/Header/index"
import { Input } from "../../components/Input";

import { Brand, Container, Content, Menu, Search, NewNote } from "./style";
import { ListUsers } from "../../components/ListUsers";

export function Home() {
    return (
        <Container>
            <Brand>
                <h1>SharEnergy</h1>
            </Brand>

            <Header/>

            <Menu>
                <li> <Link to="/"> <ButtonText title="Random User Generator"/> </Link> </li>
                <li> <Link to="/cats"> <ButtonText title="HTTP Cat"/> </Link> </li>
                <li><ButtonText title="Random Dog"/></li>
                <li><ButtonText title="Clientes"/></li>
            </Menu>

            <Search>
                <Input placeholder="Pesquisar por nome, email ou username"/>
            </Search>
            <Content>
                <ListUsers/>
            </Content>

            
            <NewNote>
                <FiPlus/>
                Add User na lista
            </NewNote>
        </Container>
    )
}