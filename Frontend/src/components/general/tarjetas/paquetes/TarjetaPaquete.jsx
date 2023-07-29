import { TarjetaPaqueteBox, TarjetaPaqueteBoxPrecios, TarjetaPaqueteButton, TarjetaPaqueteDivisa, TarjetaPaqueteItem, TarjetaPaqueteLista, TarjetaPaqueteMonto, TarjetaPaqueteParrafo, TarjetaPaqueteSimbolo, TarjetaPaqueteTitulo } from "./TarjetaPaqueteStyled";

const TarjetaPaquete = ({ items, precio, nombre, parrafo }) => {
  return (
    <TarjetaPaqueteBox>

      <TarjetaPaqueteBoxPrecios>
        <TarjetaPaqueteSimbolo>$</TarjetaPaqueteSimbolo>
        <TarjetaPaqueteMonto>{precio}</TarjetaPaqueteMonto>
        <TarjetaPaqueteDivisa>USD</TarjetaPaqueteDivisa>
      </TarjetaPaqueteBoxPrecios>

      <TarjetaPaqueteTitulo>{nombre}</TarjetaPaqueteTitulo>

      <TarjetaPaqueteLista>
        {items.map((item, index) => (
          <TarjetaPaqueteItem key={index}>{item}</TarjetaPaqueteItem>
        ))}
      </TarjetaPaqueteLista>

      {parrafo ? <TarjetaPaqueteParrafo>{parrafo}</TarjetaPaqueteParrafo> : null}

      <TarjetaPaqueteButton>¡LO QUIERO!</TarjetaPaqueteButton>

    </TarjetaPaqueteBox>
  );
};

export default TarjetaPaquete;