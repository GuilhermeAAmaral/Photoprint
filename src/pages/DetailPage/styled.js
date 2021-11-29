import styled from 'styled-components'

export const C_Principal = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

img {
    margin-top: 100px;
    margin-bottom: 45px;
    width: 50vw;
    box-shadow: 5px 5px 10px #8A8A8A;
    border-radius: 5px;

    @media (max-width: 450px) {
    margin-top: 120px;
    margin-bottom: 70px;
    width: 95vw;
    box-shadow: 5px 5px 10px #8A8A8A;
    border-radius: 5px;
    }
}
`
export const C_Coment = styled.div`

p {
    text-align: center;
    font-size: 1.5vw;
    font-weight: bold;
    color: #6C6D6F;
}
`
export const C_ButtonPrincipal = styled.div`
display: flex;
`

export const C_Button = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin: 30px;

@media (max-width: 450px) {
margin-top: 15vh;
margin-bottom: 20.5vh;
}
`