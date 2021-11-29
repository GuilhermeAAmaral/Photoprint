import styled from "styled-components"

export const C_Footer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
height: 30px;
padding: 10px 15px 20px;
background-color: #009F4F;
width: auto;

p {
    color: white;
    text-align: center;
    padding: 10px;
    font-size: 1.1vw;

    @media (max-width: 450px) {
    font-size: 1vw;  
    }
}
`
export const C_Button = styled.div`
`