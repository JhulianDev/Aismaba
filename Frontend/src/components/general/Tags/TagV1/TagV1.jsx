import { BoxTag, Icon, Tag } from "./TagV1Styles";

const TagV1 = ({ icon, tag, border, mobile }) => {
  return (
    <BoxTag $mobile={mobile} $border={border}>
      <Icon src={icon} alt="Icon Tag" />
      <Tag>{tag}</Tag>
    </BoxTag>
  );
};

export default TagV1;