import React from "react";
import styled from "styled-components";
import CategoriesSidebar from "./CategoriesSidebar";
import CarouselSlide from "./Carousel";
const Container = styled.div`
height: 320px;
width: auto;
display: flex;
padding: 20px 80px;
background-color: #f5f5f5;
border-bottom: 1px solid red;
`;
const SideWrapper = styled.div`
height: 100%;
width: 240px;
background-color: white;
`;
const MainWrapper = styled.div`
height: 100%;
width: 900px;
`;
const CatAndCarousel = () => {
 
  return (
    <Container>
      <SideWrapper>
        <CategoriesSidebar />
      </SideWrapper>
      <MainWrapper>
        <CarouselSlide />
      </MainWrapper>
    </Container>
  );
};

export default CatAndCarousel;
