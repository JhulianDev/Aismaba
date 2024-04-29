import { BoxTag, Icon, Tag } from "./TagV1Styles";
import LIGHT_ICON from "../../../../assets/img/generales/light_icon.svg";

const TagV1 = ({ icon, tag, border, mobile }) => {
  return (
    <BoxTag $mobile={mobile} $border={border}>
      <Icon src={icon ? icon : LIGHT_ICON} alt="Icon Tag" />
      <Tag>{tag}</Tag>
    </BoxTag>
  );
};

export default TagV1;