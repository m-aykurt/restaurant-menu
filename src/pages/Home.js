import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";

const Container = styled.div`
  min-height: 100vh;
  background-color: orange;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
`;

function Home() {
  return (
    <Container>
      <Navbar />
      <Menu />
    </Container>
  );
}

export default Home;
