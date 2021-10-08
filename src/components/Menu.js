import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../actions/action";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 30%;
  margin: 1rem 1rem;
`;
const Image = styled.img`
  display: flex;
  width: 40%;
  justify-content: flex-start;
  border-radius: 10px;
  border: 2px solid black;
  height: 175px;
  margin-right: 0.5rem;
`;

const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid gray;
`;
const Desc = styled.p`
  padding-top: 10px;
`;

function Menu(props) {
  return (
    <Container>
      {props.data.map((item)=>(
         <Wrapper key={item.id}>
         <Image src={item.img}/>
         <Content>
             <Title>
               <p>{item.title}</p>
               <p>{item.price}</p>
             </Title>
             <Desc>{item.desc}</Desc>
         </Content>
       </Wrapper>
      ))}
     
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};
const mapDispatchToProps = (dispath) => {
  return {
    addToCart: (item) => dispath(addToCart(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
