import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-columns: 250px auto;
    grid-template-rows: 105px 128px auto 64px;
    grid-template-areas:
    "brand header"
    "menu content"
    "menu content"
    "menu content";

    background-color: ${({ theme }) => theme.colors.BACKGROUND_800};

`;

export const Brand = styled.div`
    grid-area: brand;
    
    display: flex;
    justify-content: center;
    align-items: center;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.colors.BACKGROUND_700};
    background-color: ${({ theme }) => theme.colors.BACKGROUND_900};

    > h1 {
        font-size: 24px;
        color: ${({ theme }) => theme.colors.ORANGE};
    }
`;

export const Menu = styled.ul`
    grid-area: menu;
    background-color: ${({ theme }) => theme.colors.BACKGROUND_900};

    padding-top: 64px;
    text-align: center;

    > li {
        margin-bottom: 24px;
    }
    
`;

export const Content = styled.div`
    grid-area: content;
    
`;

