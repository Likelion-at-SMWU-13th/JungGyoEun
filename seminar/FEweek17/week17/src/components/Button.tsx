import styled, { type CSSProperties } from "styled-components";
import type { MouseEventHandler } from "react";

type ButtonContainerProps = {
  $fontSize?: CSSProperties["fontSize"];
};

interface ButtonProps {
  txt?: string;
  onBtnClick?: MouseEventHandler<HTMLButtonElement>;
  fontSize?: string;
}

const Button = ({ txt, onBtnClick, fontSize }: ButtonProps) => {
  return (
    <ButtonContainer onClick={onBtnClick} $fontSize={fontSize}>
      {txt || "버튼"}
    </ButtonContainer>
  );
};

export default Button;

const ButtonContainer = styled.button<ButtonContainerProps>`
  padding: 0.9375rem 2.5rem;
  background-color: var(--text-black);
  border-radius: 1.875rem;
  border: none;
  color: white;
  font-weight: 700;
  /* cursor: pointer; */
  font-size: ${({ $fontSize }) => $fontSize ?? "1.25rem"};
  &:hover {
    background-color: var(--main-orange);
  }
`;
