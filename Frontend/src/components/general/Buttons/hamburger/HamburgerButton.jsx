import { HamburgerBoton, HamburgerBox, HamburgerContainer, HamburgerInner } from "./HamburgerButtonStyled";

const HamburgerButton = ({open, handleNav}) => {
  return (
    <HamburgerContainer>
      <HamburgerBoton onClick={handleNav}>
        <HamburgerBox>
          <HamburgerInner open={open}></HamburgerInner>
        </HamburgerBox>
      </HamburgerBoton>
    </HamburgerContainer>
  );
};

export default HamburgerButton;