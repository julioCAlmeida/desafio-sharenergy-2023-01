import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.button`
    background: none;
    color: ${({ theme }) => theme.colors.ORANGE};

    border: none;
    font-size: 16px;
`;