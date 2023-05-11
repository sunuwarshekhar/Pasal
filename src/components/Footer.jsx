import { Facebook, Instagram, MailOutline, Phone, Room, Twitter } from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "../responsive";


const Container = styled.div`
  display: flex;
  color: #2e2e54;
  background-color: #2E2E54;
  ${mobile({ flexDirection: "column"})}

`;

const Left = styled.div`
  flex:1;  
  padding: 20px;
  /* ${mobile({ backgroundColor:"#f5f5f5"})} */

`;

const Logo = styled.h1`
    color:#f85606;
`;

const Desc = styled.p`
    margin: 20px 0px;
    color:white
      
`;

const SocialContainer = styled.div`
    display:flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display:flex;
    align-Items:center;
    justify-content: center;
    margin:8px;
`;

const Center = styled.div`
    flex:1; 
    padding:20px;
    ${mobile({display:"none" })}

`;

const Title = styled.h3`
  margin-bottom: 30px;
  color:white;
`;

const List = styled.ul`
  margin:0;
  padding:0;
  list-style:none;
  display:flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width:50%;
  margin-bottom: 10px;
  color: white;
`;
const Right = styled.div`
    flex:1;
    padding:20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  
`;
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>PASAL</Logo>
        <Desc>
          Pasal is a one-stop solution for all the goods to shop for in ecommerce world.
        </Desc>
        <SocialContainer>
          <SocialIcon color="385999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title> Useful Links</Title>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Woman Accessories</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
          </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/> Kathmandu, Nepal
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/>+977-9813815431
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> info@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};
export default Footer;
