import styled from "styled-components";

export const Container = styled.button`
    background: ${({ theme }) => theme.colors.BACKGROUND_900};
    color: ${({ theme }) => theme.colors.ORANGE};

    border: none;
    font-size: 20px;

    margin-top: 24px;
    padding: 5px;
    border-radius: 10px;
`;