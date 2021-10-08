import React, { useRef } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { categoryClick, search } from "../actions/action";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Category = styled.button`
  background-color: #f6fcabce;
  cursor: pointer;
  width: 100px;
  height: 50px;
  margin: 5px;
  border-radius: 10px;
  :hover {
    background-color: #9afc59ce;
  }
`;

const Input = styled.input`
  width: 50%;
  height: 50px;
  border-radius: 5px;
  border: 2px solid black;
  font-size: 1.6rem;
  &:hover {
    background-color: gainsboro;
  }
`;

function Search(props) {
  const inputEl = useRef();

  const handleSearch = () => {
     console.log(inputEl.current.value)
     search(inputEl.current.value)
  };

  return (
    <>
      <Container>
        {props.category.map((categoryItem) => (
          <Category
            key={categoryItem}
            onClick={() => props.categoryClick(categoryItem)}
          >
            {categoryItem}
          </Category>
        ))}
      </Container>

      <Container>
        <Input
          ref={inputEl}
          type="text"
          placeholder="Plaase enter food's name"
        />
        <Category onClick={handleSearch}>Search</Category>
      </Container>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    category: state.category,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    categoryClick: (category) => {
      dispatch(categoryClick(category));
    },
    search: (word) => {
      dispatch(search(word));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
