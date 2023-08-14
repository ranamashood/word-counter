import { useState } from "react";
import { styled } from "styled-components";

const Switch = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <Container onClick={handleClick}>
      <Knob isActive={isActive}></Knob>
    </Container>
  );
};

const Container = styled.div`
  width: 2rem;
  height: 1rem;
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) => props.theme.colors.text};
`;

const Knob = styled.div<{ isActive: boolean }>`
  width: 1rem;
  height: 1rem;
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) => props.theme.colors.primary};
  transform: ${(props) =>
    props.isActive ? "translate(100%)" : "translate(0)"};
  /* transition: ${(props) => props.theme.transitionTime.fast} ease-in-out; */
  transition: ${(props) => props.theme.transitionTime.fast}
    cubic-bezier(0.175, 0.885, 0.32, 1.275);
`;

export default Switch;
