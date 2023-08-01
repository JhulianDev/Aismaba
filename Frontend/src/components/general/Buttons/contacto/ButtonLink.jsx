import { LinkButton } from "./ButtonLinkStyled";

const ButtonLink = ({ enlace, texto }) => {
  return (
    <LinkButton to={ enlace }>{ texto }</LinkButton>
  );
};

export default ButtonLink;