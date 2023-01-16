import styled from "styled-components";

export const Container = styled.div`
    h1 {
        text-align: center;
        margin: 20px auto;
    }
`;

export const Lists = styled.ul`
    list-style: none;
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 3rem;
    row-gap: 4rem;

    padding: 0 48px 48px;

`;

export const List = styled.li`
    display: flex;
    flex-direction: column;
    align-itens: center;

    img {
        width: 180px;
        border-radius: 50%;
        margin: 2rem;
    }

    span {
        font-weight: bold;
        font-size: 18px;
    }


    a {
        transition: all 0.3s;
    }

    a:hover {
        transform: scale(1.1);
    }
`;