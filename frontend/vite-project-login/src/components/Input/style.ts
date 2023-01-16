import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.colors.BACKGROUND_900};
    color: ${({ theme }) => theme.colors.GRAY_300};

    margin-botton: 8px;
    border-radius: 10px;

    > input {
        height: 56px;
        width: 100%;

        padding: 16px;

        color: ${({ theme }) => theme.colors.WHITE};
        background: transparent;
        border: 0;

        &:placeholder {
            color: ${({ theme }) => theme.colors.GRAY_300};
            padding: 16px;
        }
    }
    
    > svg {
        margin-left: 16px;
    }
`;