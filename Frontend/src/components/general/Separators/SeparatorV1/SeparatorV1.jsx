import { MainContainer, Separator } from "./SeparatorV1Styles";

const SeparatorV1 = ({ data }) => {
  return (
    <MainContainer>
        <Separator>{data}</Separator>
    </MainContainer>
  );
};

export default SeparatorV1;