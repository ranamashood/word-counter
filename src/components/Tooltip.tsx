import { styled } from "styled-components";
import Switch from "./Switch";

interface Props {
  title: string;
}

const Tooltip = ({ title }: Props) => {
  return (
    <Container>
      {title}
      <Switch />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
`;

export default Tooltip;
