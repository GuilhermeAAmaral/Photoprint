import styled from 'styled-components'

export const C_Principal = styled.div `
display: flex;
flex-direction: column;
align-items: center;

img {
    margin-top: 70px;
    width: 15.1vw;
    padding: 25px;

    @media (max-width: 450px) {
    margin-top: 50vw;
    padding: 25px;
    }  
}

h1 {
    color: #221E1F;
    font-size: 4.5vw;

    @media (max-width: 450px) {
    font-size: 8vw;
    }   
   
}

p { 
    color: #221E1F;
    font-size: 1.6vw;
    padding: 5px;

    @media (max-width: 450px) {
    font-size: 4vw;
    }  
}
`

export const C_ButtonPrincipal = styled.div`
display: flex;

`
export const C_Button = styled.div`
margin: 30px 10px;
width: 160px;

@media (max-width: 450px) {
    margin-bottom: 38vh;;
    }  
`


