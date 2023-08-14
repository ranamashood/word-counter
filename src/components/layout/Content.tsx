import { useState } from "react";
import Textarea from "../Textarea";
import { CounterInterface } from "../../types";
import Badge from "../Badge";
import { styled } from "styled-components";
import Tooltip from "../Tooltip";

const Content = () => {
  const [counter, setCounter] = useState<CounterInterface>({
    characters: 0,
    words: 0,
  });

  return (
    <Container>
      <Badges>
        {Object.entries(counter).map(([field, value], index) => (
          <Badge key={index} field={field} value={value} />
        ))}
      </Badges>
      <Textarea setCounter={setCounter} />
      <Tooltip title="Use optimized version" />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 50px;
  width: 90%;
`;

const Badges = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export default Content;
