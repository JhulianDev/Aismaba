import axios from "axios"
import { useContext, useEffect, useState } from "react";
import { DOWNLOAD_ICON } from "../../../assets/img/images";
import { BoxCompras, BoxItem, ColumnDownload, ColumnProduct, DownloadBox, DownloadIcon, Product, Section, Title } from "./MisComprasStyled";
import { getToken } from "../../../helpers/token";
import { API_URL } from "../../../env/env";
import { ShopContext } from "../../../context/ShopContext";
import Loader from "../../general/Loader/Loader";

const MisCompras = () => {
  const [productos, setproductos] = useState()
  const [descargables, setDescargables] = useState([]);
  const { products } = useContext(ShopContext)
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    if (getToken()) {
      axios.get(`${API_URL}/purchases-user`, {
        headers: {
          Authorization: `Bearer ${getToken()}`
        }
      })
        .then((resp) => {
          if (resp.data.purchases) {
            // Constante para almacenar todas las compras
            const purchases = resp.data.purchases;
            // Constante para almacenar todos los productos de todas las compras
            const allProducts = [];
            // Iterar a través de las compras y extraer los productos
            purchases.forEach((purchase) => {
              // Removemos caracteres al principio y al final de la cadena
              const jsonString = purchase.products.slice(2, -2);
              // Reemplazamos las comillas escapadas para obtener un JSON válido
              const cleanedString = jsonString.replace(/\\"/g, '"');

              try {
                // Analizamos la cadena como JSON
                const productJson = JSON.parse(cleanedString);
                allProducts.push(productJson);
              } catch (error) {
                console.error('Error al analizar JSON:', error);
              }
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
          }

        })
        .catch((error) => {
          console.log(`Error al obtener las compras: ${error}`);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [])

  if (loading)
    return (
      <Loader
        height={"100vh"}
        bgColor={true}
      />
    )

  return (
    <Section>
      <BoxCompras>

        <BoxItem>
          <Title>Mis compras</Title>
        </BoxItem>

        {productos && productos.length > 0 ? (
          <>
            <BoxItem>
              <ColumnProduct>Productos</ColumnProduct>
              <ColumnDownload>Descargar</ColumnDownload>
            </BoxItem>

            {productos.map((producto, index) => (
              <BoxItem key={index}>
                <Product>{producto.nombre}</Product>
                <DownloadBox href={descargables[index]} download>
                  <DownloadIcon src={DOWNLOAD_ICON} />
                </DownloadBox>
              </BoxItem>
            ))}
          </>
        ) : (
          <BoxItem>
            <ColumnProduct>Aqui podras descargar los productos que adquieras en nuestra tienda.</ColumnProduct>
          </BoxItem>
        )}

      </BoxCompras>
    </Section>
  );
};

export default MisCompras;