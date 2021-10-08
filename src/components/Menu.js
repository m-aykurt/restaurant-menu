import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../actions/action";

function Menu(props) {
  return (
    <div>
      {props.data.map((item) => (
        <button key={item.id} onClick={() => props.addToCart(item)}>
          {item.title}
        </button>
      ))}
    </div>
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
