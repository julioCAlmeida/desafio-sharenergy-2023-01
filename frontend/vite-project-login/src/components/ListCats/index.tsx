import { BsSearch } from "react-icons/bs";
import { Container} from "./style";
import { useState } from 'react';


export function ListCats() {
    
    const [image, setImage] = useState("")
    const [newImageUrl, setNewImageUrl] =  useState("")
   

    function handleAdd(){
      setImage(`https://http.cat/${newImageUrl}`)
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setNewImageUrl(event.target.value)
    }
    
    return (
        <Container>
            <h2>Random images cats </h2>
            <div>
                <input 
                    type="text" 
                    placeholder="Digite status code"
                    value={newImageUrl}
                    onChange={handleChange}
                />
                <button onClick={handleAdd}>Atualizar</button>
            </div>
            <img
                src={image}
                alt="Imagem de gatos" />
        </Container>
    )
}