import { Facebook, Instagram, MailOutline, Phone, Room, Twitter } from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "../responsive";


const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column"})}

`;

const Left = styled.div`
  flex:1;  
  padding: 20px;
  ${mobile({ backgroundColor:"#f5f1f1"})}

`;

const Logo = styled.h1`
    
`;

const Desc = styled.p`
    margin: 20px 0px;
      
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          voluptatem provident perferendis aspernatur vel ipsam, minus quibusdam
          nam qui voluptate?
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
