import { useEffect, useRef, useState } from "react";
import { CounterInterface } from "../types";
import { styled } from "styled-components";

interface Props {
  setCounter: React.Dispatch<React.SetStateAction<CounterInterface>>;
}

const Textarea = ({ setCounter }: Props) => {
  const [value, setValue] = useState<string>("");
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [height, setHeight] = useState<number>(200);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.currentTarget.value);
  };

  const handleClick = () => {
    textareaRef.current?.focus();
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const startY = e.clientY;

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const newHeight = height + (e.clientY - startY);
      setHeight(newHeight);
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  useEffect(() => {
    // TODO custom function
    // for (let i = 0; i < value.length; i++) {}

    value === ""
      ? setCounter({ characters: 0, words: 0 })
      : setCounter({
          characters: value.length,
          words: value.trim().split(/\s+/).length,
        });
  }, [value]);

  return (
    <Container
      height={height}
      isFocused={isFocused}
      onClick={handleClick}
      onTouchStart={handleClick}
    >
      <StyledTextarea
        ref={textareaRef}
        onChange={handleChange}
        value={value}
        onFocus={handleFocus}
        onBlur={handleBlur}
      ></StyledTextarea>
      <Resizer onMouseDown={handleMouseDown}></Resizer>
    </Container>
  );
};

const cssVariables = styled.div`
  --padding: 1rem;
  --scrollbar-width: 4px;
`;

const Container = styled(cssVariables)<{ height: number; isFocused: boolean }>`
  position: relative;
  /* height: 20vh; */
  height: ${(props) => props.height}px;
  padding: var(--padding);
  padding-right: calc(var(--padding) - calc(var(--scrollbar-width) * 2));
  border-radius: 20px;
  outline: ${(props) => (props.isFocused ? "4px" : "1px")} solid
    ${(props) => props.theme.colors.primary};
  /* transition: ${(props) => props.theme.transitionTime.fast} ease-out; */
  transition: ${(props) => props.theme.transitionTime.fast}
    cubic-bezier(0.215, 0.61, 0.355, 1);
  /* resize: vertical; */
  overflow: hidden;
`;

const Resizer = styled.div`
  position: absolute;
  width: 2.5rem;
  height: 2.5rem;
  background-color: ${(props) => props.theme.colors.secondary};
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 80%);
  cursor: s-resize;
  border-radius: 50%;
  /* height: 5px; */
  transition: ${(props) => props.theme.transitionTime.fast};

  &:hover {
  }
`;

// const Resizer = styled.div`
//   position: absolute;
//   width: 5rem;
//   height: 5rem;
//   /* background-color: ${(props) => props.theme.colors.secondary}; */
//   border-bottom: 5px solid ${(props) => props.theme.colors.secondary};
//   border-right: 5px solid ${(props) => props.theme.colors.secondary};
//   border-bottom-right-radius: ${(props) => props.theme.borderRadius};
//   bottom: 2px;
//   right: 2px;
//   cursor: s-resize;
//   /* height: 5px; */
//   transition: ${(props) => props.theme.transitionTime.fast};

//   /* &:hover { */
//   /*   height: 10px; */
//   /* } */
// `;

// const Resizer = styled.div`
//   position: absolute;
//   width: 100%;
//   background-color: ${(props) => props.theme.colors.secondary};
//   bottom: 0;
//   left: 0;
//   cursor: s-resize;
//   height: 5px;
//   transition: ${(props) => props.theme.transitionTime.fast};

//   &:hover {
//     height: 10px;
//   }
// `;

const StyledTextarea = styled(cssVariables).attrs({ as: "textarea" })`
  width: 100%;
  height: 100%;
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.background};
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.fontSize.normal};
  resize: none;
  border: none;
  outline: none;
  padding-right: var(--scrollbar-width);

  scrollbar-width: thin;
  scrollbar-color: ${(props) => props.theme.colors.secondary} grey;

  &::-webkit-scrollbar {
    width: var(--scrollbar-width);
  }

  &::-webkit-scrollbar-track {
    background: grey;
    border-radius: ${(props) => props.theme.borderRadius};
  }

  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.secondary};
    border-radius: ${(props) => props.theme.borderRadius};
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${(props) => props.theme.colors.secondaryDark};
  }
`;

export default Textarea;
