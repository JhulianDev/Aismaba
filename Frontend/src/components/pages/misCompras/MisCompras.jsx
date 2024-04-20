import axios from "axios"
import { useEffect, useState } from "react";
import { DOWNLOAD_ICON } from "../../../assets/img/images";
import { CardContainer, BoxItem, Subtitle, DownloadButton, DownloadIcon, Product, Title, Paragraph } from "./MisComprasStyled";
import { API_URL } from "../../../env/env";
import Loader from "../../general/Loader/Loader";
import { MaxWidth, Section } from "../../../assets/styles/GeneralStyles";
import { coloresV2 } from "../../../assets/css/Colors";
import useUserStore from "../../../stores/useUserStore";
import { productsFiles } from "../../../assets/products/productsFiles";

const MisCompras = () => {
  const [purchasedProducts, setPurchasedProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const { userToken } = useUserStore.getState();


  useEffect(() => {
    // Funcion para obtener las ordenes completadas por el usuario
    const fetchData = async () => {
      try {
        // Realizamos la solicitud a la ruta indicada para procesar el pago
        const response = await axios.get(`${API_URL}/orders-completed-user`, {
          headers: {
            Authorization: `Bearer ${userToken}`
          }
        });
        // Si la petición es exitosa:
        // Mostramos la respuesta del backend
        console.log('Respuesta de la petición:', response);
        // Filtramos los productos comprados por el usuario segun los productsId recibidos
        const filteredProducts = productsFiles.filter(product => response.data.productsId.includes(product.id));
        // Seteamos los productos 
        setPurchasedProducts(filteredProducts);
        // Detenemos el loading
        setLoading(false);
      } catch (error) {
        // Si la petición da error:
        // Mostramos el error de la petición
        console.error('Error en la petición:', error);
        // Detenemos el loading
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  if (loading)
    return (
      <Loader
        height={"100vh"}
        bgColor={true}
      />
    )

  return (
    <Section $bgColor={coloresV2.colorSecundario} $align="flex-start">
      <MaxWidth>

        {loading ? (
          <Loader
            height={"100px"}
          />
        ) : (
          <CardContainer>
            <BoxItem>
              <Title>Mis compras</Title>
            </BoxItem>

            {purchasedProducts.length > 0 ? (
              <>
                <BoxItem>
                  <Subtitle>Productos</Subtitle>
                  <Subtitle $download>Descargar</Subtitle>
                </BoxItem>

                {purchasedProducts.map((product) => (
                  <BoxItem key={product.id}>
                    <Product>{product.name}</Product>
                    <DownloadButton href={product.file} download>
                      <DownloadIcon src={DOWNLOAD_ICON} />
                    </DownloadButton>
                  </BoxItem>
                ))}
              </>
            ) : (
              <BoxItem>
                <Paragraph>Aqui podras descargar los productos que adquieras en nuestra tienda.</Paragraph>
              </BoxItem>
            )}
          </CardContainer>
        )}
      </MaxWidth>
    </Section>
  );
};

export default MisCompras;