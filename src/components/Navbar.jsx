import React, { useState } from "react";
import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { publicRequest } from "../requestMethods";
import SearchProducts from "./SearchProducts";

const Container = styled.div`
  height: 100px;
  ${mobile({ height: "50px" })};
`;

const Wrapper = styled.div`
  padding: 0px 100px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "0px 0px" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Logo = styled.h1`
  font-weight: 900;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  text-align: center;
  cursor: pointer;
  color: #f85606;
  ${mobile({ fontSize: "24px" })}
`;

const Center = styled.div`
  flex: 3;
`;
const SearchContainer = styled.form`
  align-items: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
`;

const Input = styled.input`
  border: none;
  height: 100%;
  width: 100%;
  outline: none;
  background-color: #f5f5f5;
  padding: 0px 16px;
  ${mobile({ width: "50px" })}
`;

const Right = styled.div`
  flex: 1.5;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  ${mobile({ justifyContent: "center", flex: "2" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Button = styled.button`
  padding: 8px;
  margin-inline: 16px;
  color: white;
  cursor: pointer;
  background-color: #f85606;
  border-radius: 1rem;
  border: none;
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.currentUser);

  const [data, setData] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const [result, setResult] = useState([]);

  const handleLogout = () => {
    localStorage.removeItem("persist:root");
    window.location.reload();
  };
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await publicRequest.get("/products");

        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetch();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    var filteredProducts = data?.filter((product) => {
      return product.title.toLowerCase().includes(inputVal?.toLowerCase());
    });
    console.log(filteredProducts);
    setInputVal("");
    setResult(filteredProducts);
  };

  return (
    <>
      <Container>
        <Wrapper>
          <Left>
            <Logo onClick={() => window.location.reload()}>Pasal</Logo>
          </Left>
          <Center>
            <SearchContainer onSubmit={(e) => handleSubmit(e)}>
              <Input
                placeholder="Search"
                type="search"
                name="search"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
              />
              <Search
                style={{
                  color: "white",
                  height: "100%",
                  width: "40px",
                  borderTopRightRadius: "2px",
                  borderBottomRightRadius: "2px",
                  backgroundColor: "#f85606",
                }}
                onClick={handleSubmit}
              />
            </SearchContainer>
          </Center>
          <Right>
            <Link to="/cart">
              <MenuItem>
                <Badge badgeContent={quantity} color="primary">
                  <ShoppingCartOutlined />
                </Badge>
              </MenuItem>
            </Link>
            {user ? (
              <Button onClick={handleLogout}>LogOut</Button>
            ) : (
              <>
                <MenuItem onClick={() => navigate("/register")}>
                  REGISTER
                </MenuItem>
                <MenuItem onClick={() => navigate("/login")}>SIGN IN</MenuItem>
              </>
            )}
          </Right>
        </Wrapper>
      </Container>
      { result && <SearchProducts result={result} />}
    </>
  );
};

export default Navbar;
