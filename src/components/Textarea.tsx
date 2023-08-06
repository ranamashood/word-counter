import { useEffect, useState } from "react";
import { CounterInterface } from "../types";

interface Props {
  setCounter: React.Dispatch<React.SetStateAction<CounterInterface>>;
}

const Textarea = ({ setCounter }: Props) => {
  const [value, setValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.currentTarget.value);
  };

  useEffect(() => {
    value === ""
      ? setCounter({ characters: 0, words: 0 })
      : setCounter({
          characters: value.length,
          words: value.trim().split(/\s+/).length,
        });
  }, [value]);

  return (
    <textarea
      cols={30}
      rows={10}
      onChange={handleChange}
      value={value}
    ></textarea>
  );
};

export default Textarea;
