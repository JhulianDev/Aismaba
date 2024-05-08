import axios from "axios"
import Swal from "sweetalert2"
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { coloresV2 } from "../../../assets/css/Colors";
import { MaxWidth, Section } from "../../../assets/styles/GeneralStyles";
import { Table, TableName, ColumnName, Item, Paragraph } from "./AdminStyles";
import useUserStore from "../../../stores/useUserStore";
import { API_URL } from "../../../env/env";
import Loader from "../../general/Loader/Loader";

const Admin = () => {
  const [loading, setLoading] = useState(true);
  const [suscriptionsNewsletter, setSuscriptionsNewsletter] = useState([]);
  const { userData, userToken } = useUserStore.getState();
  const navigate = useNavigate();
  dayjs.locale('es');
  dayjs.extend(utc);
  dayjs.extend(timezone);
  dayjs.tz.setDefault('America/Argentina/Buenos_Aires');

  // Si el usuario no ha iniciado session:
  useEffect(() => {
    if (!userData) {
      // Mostramos mensaje de alerta
      Swal.fire({
        icon: "info",
        title: "Atención",
        text: "Para acceder debe iniciar sesión",
        showConfirmButton: true
      })
      // Redirigimos al login
      navigate("/login");
      // No se renderiza el componente
      return;
      // Si el usuario ha iniciado session pero NO es administador
    } else if (userData && !userData.is_admin) {
      // Redirigimos al home
      navigate("/");
    }
  }, []);

  // Si el usuario ha iniciado sesión y es administrador:
  useEffect(() => {
    if (userData && userData.is_admin) {
      const fetchData = async () => {
        try {
          // Realizamos la solicitud a la ruta indicada para obtener los datos
          const response = await axios.get(`${API_URL}/get_newsletter_suscription`, {
            headers: {
              Authorization: `Bearer ${userToken}`
            }
          });
          // Si la petición es exitosa:
          // Mostramos la respuesta del backend
          console.log('Respuesta de la petición:', response);
          // Si suscriptions existe en la respuesta:
          if (response.data.suscriptions) {
            // Seteamos las suscriptions 
            setSuscriptionsNewsletter(response.data.suscriptions);
          }
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
    }
  }, []);

  if (loading)
    return (
      <Loader
        height={"100vh"}
        bgColor={true}
      />
    )

  // Renderizado del componente solo para usuarios Administradores
  return (
    <Section $bgColor={coloresV2.colorSecundario} $align="flex-start">
      <MaxWidth>

        <Table>
          <TableName>Sucripciones Newsletter</TableName>

          {suscriptionsNewsletter.length > 0 ? (
            <>
              <ColumnName>ID</ColumnName>
              <ColumnName>Nombre</ColumnName>
              <ColumnName>Email</ColumnName>
              <ColumnName>País</ColumnName>
              <ColumnName $borderNone>Fecha</ColumnName>
            </>
          ) : (
            <Paragraph>No existen registros en la base de datos</Paragraph>
          )}

          {suscriptionsNewsletter.length > 0 && suscriptionsNewsletter.map((subscriber) => (
            <React.Fragment key={subscriber.id}>
              <Item>{subscriber.id}</Item>
              <Item>{subscriber.user_name}</Item>
              <Item $email>{subscriber.email}</Item>
              <Item>{subscriber.country}</Item>
              <Item $borderNone>{dayjs(subscriber.created_at).format('DD MMMM YYYY - h:mm A')}</Item>
            </React.Fragment>
          ))}
        </Table>

      </MaxWidth>
    </Section>
  );
};

export default Admin;