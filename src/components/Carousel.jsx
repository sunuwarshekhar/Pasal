import { Carousel } from "antd";
import styled from "styled-components";
import cover12 from "../globals/images/cover12.jpg";
import cover3 from "../globals/images/cover3.jpg";
import cover21 from "../globals/images/cover21.jpg";
import cover4 from "../globals/images/cover4.png";

const Container = styled.div`

`;
const Wrapper = styled.div`
`;
const Img = styled.img`
  height: 320px;
  object-fit: cover;
  position: relative;
`;

const CarouselSlide = () => {
  const contentStyle = {
    color: "#fff",
    textAlign: "center",
    margin: "0px",
    position: "absolute",
  };
  return (
    <Container>
      <Carousel autoplay>
        <Wrapper>
          <h3 style={contentStyle}>1</h3>
          <Img src={cover12}/>
        </Wrapper>
        <Wrapper>
          <h3 style={contentStyle}>2</h3>
          <Img src={cover3} />
        </Wrapper>
        <Wrapper>
          <h3 style={contentStyle}>3</h3>
          <Img src={cover21} />
        </Wrapper>
        <Wrapper>
          <h3 style={contentStyle}>4</h3>
          <Img src={cover4} />
        </Wrapper>
      </Carousel>
    </Container>
  );
};
export default CarouselSlide;
