import axios from "axios"
import Swal from "sweetalert2"
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { coloresV2 } from "../../../assets/css/Colors";
import { MaxWidth, Section } from "../../../assets/styles/GeneralStyles";
import { Table, TableName, ColumnName, Item } from "./AdminStyles";
import useUserStore from "../../../stores/useUserStore";
import { API_URL } from "../../../env/env";

const Admin = () => {
  const [loading, setLoading] = useState(true);
  const [suscriptionsNewsletter, setSuscriptionsNewsletter] = useState([]);
  const { userData, userToken } = useUserStore.getState();
  const navigate = useNavigate();

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

  // Si el usuario no es administrador, no se renderiza el componente
  if (userData && !userData.is_admin) {
    return null;
  };

  // Renderizado del componente solo para usuarios Administradores
  return (
    <Section $bgColor={coloresV2.colorSecundario} $align="flex-start">
      <MaxWidth>

        <Table>
          <TableName>Sucripciones Newsletter</TableName>

          <ColumnName>ID</ColumnName>
          <ColumnName>Nombre</ColumnName>
          <ColumnName>Email</ColumnName>
          <ColumnName>País</ColumnName>
          <ColumnName $borderNone>Fecha</ColumnName>

          {suscriptionsNewsletter.length > 0 && suscriptionsNewsletter.map((subscriber) => (
            <React.Fragment key={subscriber.id}>
              <Item>{subscriber.id}</Item>
              <Item>{subscriber.user_name}</Item>
              <Item>{subscriber.email}</Item>
              <Item>{subscriber.country}</Item>
              <Item $borderNone>{subscriber.created_at}</Item>
            </React.Fragment>
          ))}
        </Table>

      </MaxWidth>
    </Section>
  );
};

export default Admin;