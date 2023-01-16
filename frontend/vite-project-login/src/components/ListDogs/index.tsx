import { BsSearch } from "react-icons/bs";
import { Container} from "./style";
import { useState } from 'react';


export function ListDogs() {
    
    const [image, setImage] = useState("")
    //const [users, setUsers] = useState<UserProps | null>(null)
    // const dogUrl = fetch("https://dog.ceo/api/breeds/list/all")
    //                     .then(res => res.json)
    //                     .then(data => data)
    // console.log(dogUrl.message)
   
    function handleAdd(){
      setImage("https://random.dog/ece9c4d3-82e7-4bb7-a647-90cbf67a9d15.jpg")
    }
    
    return (
        <Container>
            <h2>Imagens de cães </h2>
            <button type="submit" onClick={handleAdd}>Atualizar</button>
            <img
                src={image}
                alt="Imagem de cães" />
        </Container>
    )
}