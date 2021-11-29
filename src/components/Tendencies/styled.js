import styled from 'styled-components'

export const C_Principal = styled.div`
margin-left: 10px;
`
export const C_Image = styled.div`

img {
    width: 32vw;
    height: 60vh;
    margin-top: 20px;
    box-shadow: 5px 5px 10px #8A8A8A;
    border-radius: 5px;
    transform: scale(0.9);
    transition: ease 0.2s;
    cursor: pointer;

    @media (max-width: 450px) {
    width: 95vw;
    margin-top: 20px;
    box-shadow: 5px 5px 10px #8A8A8A;
    border-radius: 5px;
    transform: scale(0.9);
    transition: ease 0.2s;
    cursor: pointer;
    }
}



img:hover {
    transform: scale(1);
}

`



