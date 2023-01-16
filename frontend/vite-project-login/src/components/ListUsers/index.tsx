import { Container, Lists, List } from "./style";
import { useEffect, useState } from 'react';

import { UserProps } from '../../types/typeListUsers';
import { ButtonDelete } from '../ButtonDelete';


export function ListUsers() {
    const [users, setUsers] = useState<UserProps | null>(null)

    useEffect(() => {
        fetch(`https://randomuser.me/api/`)
            .then(res => res.json())
            .then(data => {   
                const {id, title, picture, name, email, login, dob} = data.results[0]

                const userData: UserProps = {
                    id,
                    title,
                    picture,
                    name,
                    email,
                    login,
                    dob
                }

                setUsers(userData)

            })
    }, [])

    return (
        <Container>
            <Lists>
                <List key={users?.id.value}>
                    <h1>User Generator</h1>
                    <img src={users?.picture.large} alt={users?.name.first}/>
                    <span>{users?.name.title}. {users?.name.first} {users?.name.last}, {users?.dob.age}</span>
                    <span>{users?.login.username}</span>
                    <span>{users?.email}</span>
                    <ButtonDelete  title="Remove User"/>
                </List>
            </Lists>
        </Container>
    )
}