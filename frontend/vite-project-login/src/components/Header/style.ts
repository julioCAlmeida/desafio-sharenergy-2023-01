import style from "styled-components";

export const Container = style.header`
    grid-area: header;

    height: 105px;
    width: 100%;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.colors.BACKGROUND_700};

    display: flex;
    justify-content: space-between;

    padding: 0 80px;

`;

export const Profile = style.div`
    display: flex;
    align-items: center;

    > img {
        width: 56px;
        height: 56px;
        border-radius: 50%;
    }

    > div {
        display: flex;
        flex-direction: column;
        margin-left: 16px;
        line-height: 24px;

        span {
            font-size: 14px;
            color: ${({ theme }) => theme.colors.GRAY_100};
        }

        strong {
            font-size: 18px;
            color: ${({ theme }) => theme.colors.WHITE};
        }
    }
`;

export const Logout = style.button`
    border: none;
    background: none;

    > svg {
        color: ${({ theme }) => theme.colors.GRAY_100};
        font-size: 36px;
`;