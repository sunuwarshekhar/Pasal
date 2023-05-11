import styled from "styled-components";
import { Link } from "react-router-dom";

const Info = styled.div`

  transition: all 0.5s ease;
  padding:16px;
`;

const Container = styled.div`
  margin: 5px;
  width: 180px;
  height: 240px;
  display: flex;
  &:hover ${Info} {
    opacity: 1;
  }
  flex-direction: column;
  background-color: white;
`;

const Wrapper = styled.div`
   height: 70%;
  width: 100%;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
   object-fit: cover;
`;

const Title = styled.p`
  margin: 0px;
  display: inline;
`;
const Price = styled.p`
  color: #f85606;
  margin: 0px;
  font-weight: 500;
`;

const Product = ({ item }) => {
  const { img, title, price } = item;
  return (
    <Container>
      <Wrapper>
      <Link  to={`/product/${item._id}`}>
        <Image src={img} />
      </Link>
      </Wrapper>
      <Info>
        <Link style={{display:"inline",textDecoration:"none"}} to={`/product/${item._id}`}>
          <Title >{title}</Title>
        </Link>
        <Price>Rs.{price}</Price>
      </Info>
    </Container>
  );
};
export default Product;
