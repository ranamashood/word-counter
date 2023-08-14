import styled from "styled-components";

interface Props {
  field: string;
  value: number;
}

const Badge = ({ field, value }: Props) => {
  return (
    <Container>
      <Field>{field}</Field>
      <Value>{value}</Value>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  background-color: red;
  gap: 7px;
  padding: 0.6rem;
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: ${(props) => props.theme.borderRadius};
`;

const Field = styled.div``;

const Value = styled.div``;

export default Badge;
