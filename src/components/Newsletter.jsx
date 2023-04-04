import {  Send } from "@mui/icons-material";
import styled from "styled-components"
import { mobile } from "../responsive";

const Container = styled.div`
    height: 60vh;
    width:100%;  
    display: flex;
    flex-direction: column; 
    background-color: #fcf5f5;
    justify-content: center;
    align-items: center; 
    
`;

const Title = styled.h1`
    font-size: 24px;
    margin-bottom: 20px;
`;

const Description = styled.p`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    ${mobile({textAlign:"center" })}

`;
const InputContainer = styled.div`
    width:50%;
    height:40px;
    background-color:white;
    display:flex;
    align-items: center;
    justify-content: space-between;
    border : 1px solid lightgray;
    ${mobile({width:"80%" })}

`;

const Input = styled.input`
    border: none;
    flex:8;
    padding-left: 20px;
    height: 100%;
`;

const Button = styled.button`
    flex:1;
    border:none;
    background-color : teal;
    color: white;
    padding:5px;
    height: 100%;
    cursor: pointer;
`;

const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Description>Get timely updates from your favorite products.</Description>
        <InputContainer>
            <Input placeholder="Your email"/>
            <Button>
                <Send />
            </Button> 
        </InputContainer>
    </Container>
  )
}

export default Newsletter;
