import Countdown from 'react-countdown';
import { MaxWidth } from '../../../assets/styles/GeneralStyles';
import { Section, BoxItem, ContainerCountdown, ContainerItems, NumberItem, TextItem, Title, TwoDots, Filter } from './ProximamenteStyles';
import BACKGROUND_IMAGE from "../../../assets/img/generales/mockups_templates_instagram.webp";
import Shop from '../Shop/Shop';

const Proximamente = () => {
  const finalDate = new Date("2024-05-09T12:00:00");

  return (
    <Countdown date={finalDate} renderer={({ days, hours, minutes, seconds, completed }) => {
      if (completed) {
        // Si la cuenta regresiva ha finalizado, muestra la página Shop
        return (
          <Shop />
        )
      } else {
        // Si la cuenta regresiva aún está en curso, muestra los días, horas, minutos y segundos restantes
        return (
          <Section $bgImage={BACKGROUND_IMAGE}>
            <Filter />
            <MaxWidth $flexDirection="column" $justifyContent="center">
              <ContainerCountdown>
                <Title>PRÓXIMAMENTE</Title>
                <ContainerItems>

                  <BoxItem>
                    <NumberItem>{days}</NumberItem>
                    <TextItem>Días</TextItem>
                  </BoxItem>

                  <TwoDots>:</TwoDots>

                  <BoxItem>
                    <NumberItem>{hours}</NumberItem>
                    <TextItem>Horas</TextItem>
                  </BoxItem>

                  <TwoDots $mobile>:</TwoDots>

                  <BoxItem>
                    <NumberItem>{minutes}</NumberItem>
                    <TextItem>Minutos</TextItem>
                  </BoxItem>

                  <TwoDots>:</TwoDots>

                  <BoxItem>
                    <NumberItem>{seconds}</NumberItem>
                    <TextItem>Segundos</TextItem>
                  </BoxItem>
                </ContainerItems>
              </ContainerCountdown>
            </MaxWidth>
          </Section>
        )
      }
    }} />
  );
};

export default Proximamente;