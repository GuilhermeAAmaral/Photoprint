import styled from "styled-components"

export const C_Header = styled.div`
position: fixed;
z-index: 999;
top: 0;
left: 0;
right: 0;
height: 30px;
padding: 10px 15px 20px;
background-color: #058ED4;
width: auto;
box-shadow: 2px 2px 10px #8A8A8A;

p {
    color: white;
    padding: 5px;
    font-size: 1.5vw;

    @media (max-width: 450px) {
    font-size: 4vw;  
    }
}
`

export const C_Nav = styled.div`
display: flex;
justify-content: center;

p {
    margin-left: 35px;
    margin-right: 35px;
    text-align: center;
}

p:hover{
    cursor: pointer;
    border-bottom: 3px solid #FABA1C;
}
`
