import styled from "styled-components"

export const C_Principal = styled.div`
margin-top: 50px;
height: auto;

h1 {
    text-align: center;
    margin-top: 80px;
    color: #6C6D6F;
}
`

export const C_Tendencies = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;

@media (max-width: 450px) {
display: flex;
flex-direction: column;
align-items: center;
}
`

export const C_Button = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin: 30px
`