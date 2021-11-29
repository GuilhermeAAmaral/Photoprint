import styled from 'styled-components'

export const C_Principal = styled.div`
height: auto;
`
export const C_PrincipalSearch = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
margin-top: 93px;
height: auto;
`

export const C_Search = styled.div`
width: 60vw;

    @media (max-width: 450px) {
    width: 45vw;
    }
`

export const C_Button = styled.div`
margin: 15px;
`

export const C_lupa = styled.div`
display: flex;
align-items: center;
justify-content: center;

img {
    padding-top: 60px;
    padding-bottom: 70px;
    width: 15vw;
    margin-bottom: 1.vh;
}

@media (max-width: 450px) {
margin-top: 10vh;
}
`

export const C_RenderSearch = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;

@media (max-width: 450px) {
display: flex;
flex-direction: column;
align-items: center;
}
`

export const C_ButtonBack = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top: 10px;
margin-bottom: 35px;

@media (max-width: 450px) {
margin-top: 5vh;
margin-bottom: 28.9vh;
}
`