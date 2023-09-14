import axios from "axios"
import { useContext, useEffect, useState } from "react";
import { DOWNLOAD_ICON } from "../../../assets/img/images";
import { BoxCompras, BoxItem, ColumnDownload, ColumnProduct, DownloadBox, DownloadIcon, Product, Section, Title } from "./MisComprasStyled";
import { getToken } from "../../../helpers/token";
import { API_URL } from "../../../env/env";
import { ShopContext } from "../../../context/ShopContext";

const MisCompras = () => {
  const [productos, setproductos] = useState()
  const [descargables, setDescargables] = useState([]);
  const { products } = useContext(ShopContext)


  useEffect(() => {
    if (getToken()) {
      axios.get(`${API_URL}/purchases-user`, {
        headers: {
          Authorization: `Bearer ${getToken()}`
        }
      })
        .then((resp) => {
          // Constante para almacenar todas las compras
          const purchases = resp.data.purchases;

          // Constante para almacenar todos los productos de todas las compras
          const allProducts = [];

          // Iterar a través de las compras y extraer los productos
          purchases.forEach((purchase) => {
            const productsJson = JSON.parse(purchase.products);
            allProducts.push(...productsJson);
          });

          // Guardamos los productos en el estado "compras"
          setproductos(allProducts)

          // Almacenamos los descargables correspondientes a cada producto en una constante:
          const descargablesDeProductos = allProducts.map((producto) => {
            // Buscamos el producto correspondiente en el estado "products" usando el nombre del producto.
            const productoEncontrado = products.find((p) => p.nombre === producto.nombre);
            // Si se encuentra el producto en "products", tomamos su propiedad "descargable", de lo contrario, establecemos una cadena vacía.
            return productoEncontrado ? productoEncontrado.descargable : "";
          });

          // Establecemos el estado "descargables" con la lista de descargables correspondientes a los productos.
          setDescargables(descargablesDeProductos);


        })
        .catch((error) => {
          console.log(`Error al obtener las compras: ${error}`);
        });
    }
  }, [])

  return (
    <Section>
      <BoxCompras>

        <BoxItem>
          <Title>Mis compras</Title>
        </BoxItem>

        <BoxItem>
          <ColumnProduct>Productos</ColumnProduct>

          <ColumnDownload>Descargar</ColumnDownload>
        </BoxItem>

        {productos && (
          productos.map((producto, index) => (

            <BoxItem key={index}>
              <Product>{producto.nombre}</Product>

              <DownloadBox href={descargables[index]} download>
                <DownloadIcon src={DOWNLOAD_ICON} />
              </DownloadBox>
            </BoxItem>
          ))
        )}
        
      </BoxCompras>
    </Section>
  );
};

export default MisCompras;