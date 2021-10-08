import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";

const Container = styled.div`
  width: 100%;
  height: 4rem;
  margin: 1rem;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 40px;
  width: 600px;
  padding-left: 100px;
`;
const RightFloat = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 3rem;
`;
const MenuItem = styled.div`
  font-size: 1.5rem;
  cursor: pointer;
  margin: 0 1rem;
`;

function Navbar(props) {
  return (
    <Container>
      <Wrapper>
        <Title>Asian Menu</Title>
        <RightFloat>
          <Link to="/">
            <MenuItem>
              Home
            </MenuItem>
          </Link>
          <Link to="/callus">
            <MenuItem>Call Us</MenuItem>
          </Link>
          <Link to="/register">
            <MenuItem>Register</MenuItem>
          </Link>
          <Link to="login">
            <MenuItem> Sign In </MenuItem>
          </Link>
          <MenuItem>
            <Link to="/cart">
              <Badge color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </Link>
          </MenuItem>
        </RightFloat>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
