import { useContext } from "react";
import { DELETE_ICON } from "../../../assets/img/images";
import { BoxIcon, DeleteIcon, ItemBox, ItemDiv, ItemImg, ItemName, ItemPrice } from "./ItemCartStyled";
import { CartContext } from "../../../context/CartContext";

const ItemCart = ({ imagen, nombre, precio, producto }) => {
  const { dispatch } = useContext(CartContext);

  const removeFromCart = (producto) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: producto
    });
  }

  return (
    <ItemBox>
      <ItemDiv>
        <ItemImg src={imagen} alt="MockUp Producto" />
      </ItemDiv>
      <ItemName>{nombre}</ItemName>
      <ItemPrice>{precio}$</ItemPrice>
      <BoxIcon>
        <DeleteIcon onClick={() => removeFromCart(producto)} src={DELETE_ICON} alt="Delete Icon" />
      </BoxIcon>
    </ItemBox>
  );
};

export default ItemCart;