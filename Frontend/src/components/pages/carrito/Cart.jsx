import React, { useContext, useState } from 'react';
import { CartBoxTable, CartMaxWidth, CartSection, TableBoxIcon, TableBoxProduct, TableDiv, TableHeader, TextPrecio, TextProducto } from './CartStyled';
import { BOLSA_ICON, TARJETA_ICON } from '../../../assets/img/images';
import Button from '../../general/Buttons/button/Button';
import CurrencySelector from '../../general/currency/CurrencySelector';
import { CartContext } from '../../../context/CartContext';
import ItemCart from '../../general/item/ItemCart';
import { CurrencyContext } from '../../../context/CurrencyContext';

const Cart = () => {
  const { state } = useContext(CartContext)
  const { selectedCurrency, dolarValue } = useContext(CurrencyContext);

  const formatPrice = new Intl.NumberFormat("es-AR", {
    currency: "ARS",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })

  let totalValue = 0
  state.cart.forEach((c) => selectedCurrency === "ARS" ? (totalValue += (c.precio)* dolarValue) : (totalValue += (c.precio)));
  let totalValueFormated = formatPrice.format(totalValue)


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
                <TextPrecio>{totalValueFormated}$</TextPrecio>
                <TableBoxIcon>
                </TableBoxIcon>
              </TableBoxProduct>

            </CartBoxTable>

            <Button
              icono={TARJETA_ICON}
              texto="Finalizar compra"
              type="A"
              top="15px"
            />

            <Button
              icono={BOLSA_ICON}
              texto="Seguir comprando"
              enlace="/tienda"
              type="B"
              top="15px"
            />
          </>
        ) : (
          <TextProducto>Tu carrito está vacío</TextProducto>
        )}


      </CartMaxWidth>
    </CartSection>
  );
};

export default Cart;