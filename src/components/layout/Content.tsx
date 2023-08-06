import { useState } from "react";
import Textarea from "../Textarea";
import { CounterInterface } from "../../types";
import Badge from "../Badge";

const Content = () => {
  const [counter, setCounter] = useState<CounterInterface>({
    characters: 0,
    words: 0,
  });

  return (
    <div>
      {Object.entries(counter).map(([field, value], index) => (
        <Badge key={index} field={field} value={value} />
      ))}
      <Textarea setCounter={setCounter} />
    </div>
  );
};

export default Content;
