import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BoxCartEmpty, CartBoxTable, CartMaxWidth, CartSection, TableBoxIcon, TableBoxProduct, TableDiv, TableHeader, TextCartEmpty, TextPrecio, TextProducto } from './CartStyled';
import { BOLSA_ICON, TARJETA_ICON } from '../../../assets/img/images';
import Button from '../../general/Buttons/button/Button';
import CurrencySelector from '../../general/currency/CurrencySelector';
import { CartContext } from '../../../context/CartContext';
import ItemCart from '../../general/item/ItemCart';
import { CurrencyContext } from '../../../context/CurrencyContext';
import { UserContext } from '../../../context/UserContext';
import { handleOrder } from '../../../helpers/order';
import { calculateTotalValue, formatPrice } from '../../../helpers/prices';

const Cart = () => {
  const { state, setRequireLogin, setOrder, setPreferenceId } = useContext(CartContext)
  const { userData } = useContext(UserContext)
  const { selectedCurrency, dolarValue } = useContext(CurrencyContext);
  const navigate = useNavigate();

  const totalValue = calculateTotalValue(state.cart, selectedCurrency, dolarValue)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <CartSection>
      <CartMaxWidth>
        {state.cart.length > 0 ? (
          <>
            <CurrencySelector />

            <CartBoxTable>
              <TableHeader>
                <TableDiv></TableDiv>
                <TextProducto>Producto</TextProducto>
                <TextPrecio>Precio</TextPrecio>
                <TableBoxIcon></TableBoxIcon>
              </TableHeader>

              {state.cart.map((producto) => (
                <ItemCart
                  key={producto.nombre}
                  imagen={producto.portada}
                  nombre={producto.nombre}
                  precio={selectedCurrency === "ARS" ? formatPrice.format((producto.precio * dolarValue)) : formatPrice.format(producto.precio)}
                  producto={producto}
                />
              ))}

              <TableBoxProduct>
                <TableDiv />
                <TextProducto>Total:</TextProducto>
                <TextPrecio>{(formatPrice.format(totalValue))}$</TextPrecio>
                <TableBoxIcon>
                </TableBoxIcon>
              </TableBoxProduct>

            </CartBoxTable>

            <Button
              handleClick={() => { handleOrder(state, userData, selectedCurrency, dolarValue, totalValue, setRequireLogin, setOrder, setPreferenceId, navigate) }}
              icono="true"
              iconoEnlace={TARJETA_ICON}
              texto="Finalizar compra"
              style="A"
              top="15px"
            />

            <Button
              icono="true"
              iconoEnlace={BOLSA_ICON}
              texto="Volver a la tienda"
              enlace="/tienda"
              style="B"
              type="Link"
              top="15px"
            />
          </>
        ) : (
          <BoxCartEmpty>
            <TextCartEmpty>Tu carrito está vacío. Visita nuestra tienda!</TextCartEmpty>
          </BoxCartEmpty>
        )}


      </CartMaxWidth>
    </CartSection>
  );
};

export default Cart;