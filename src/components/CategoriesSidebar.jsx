import React from "react";
import styled from "styled-components";

const Container = styled.div`
padding: 0px;
width: 180px;
`;

const UlList = styled.ul`
/* display: inline-flex;
flex-direction: column; */
padding: 0px;
`;

const List = styled.li`
list-style: none;
`;
const CategoryName = styled.a`
cursor: pointer;
padding: 4px;
font-size: 0.8rem;
display: block;
align-items: center; 
&:hover {
background-color: #F5F5F5;
};
&:hover {
color: #f85606;
};  
`;
const CategoriesSidebar = () => {
 
  return (
    <Container>
      <UlList>
        <List>
          <CategoryName>Men Fashion</CategoryName>
        </List>
        <List>
          <CategoryName>Women Fashion</CategoryName>
        </List>
        <List>
          <CategoryName>Unisex Accessories</CategoryName>
        </List>
        <List>
          <CategoryName>Children's Clothing</CategoryName>
        </List>
        <List>
          <CategoryName>Babywear</CategoryName>
        </List>
        <List>
          <CategoryName>Sunglasses</CategoryName>
        </List>
        <List>
          <CategoryName>Formal Wear</CategoryName>
        </List>
        <List>
          <CategoryName>Casual Tier</CategoryName>
        </List>
        <List>
          <CategoryName>Retro Looks</CategoryName>
        </List>
      </UlList>
    </Container>
  );
};

export default CategoriesSidebar;
