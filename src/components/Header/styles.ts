import styled from 'styled-components';

export const Container = styled.header`
    background: var(--blue);
`

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto; // Centralização

    padding: 2rem 1rem 10rem; // 16px laterais e 160px a baixo
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
        font-size: 1rem; // 16px
        color: #FFF;
        background: var(--blue-light);
        border:0;
        padding: 0 2rem; // 32px
        border-radius: 0.25rem; // 4px
        height: 3rem; // 48 px

        transition: filter 0.2s; //Aplicando transição para suavisar a mudança 

        &:hover {
            filter: brightness(0.9); //Escurecer a cor do button
        }
    }
`

