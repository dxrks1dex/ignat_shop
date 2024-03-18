import styled from "styled-components";

interface ArrowProps {
  onClick: () => void;
  disabled: boolean;
}

export const RightArrow = ({ onClick, disabled }: ArrowProps) => {
  return (
    <ArrowButton onClick={onClick} aria-disabled={disabled}>
      <svg
        width="25"
        height="7"
        viewBox="0 0 25 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M25 3.5L20 0.613249V6.38675L25 3.5ZM0 4L20.5 4V3L0 3L0 4Z"
          fill={disabled ? "#959595" : "#343434"}
        />
      </svg>
    </ArrowButton>
  );
};

export const LeftArrow = ({ onClick, disabled }: ArrowProps) => {
  return (
    <ArrowButton onClick={onClick} aria-disabled={disabled}>
      <svg
        width="25"
        height="7"
        viewBox="0 0 25 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 3.5L5 6.38675V0.613249L0 3.5ZM25 3L4.5 3V4L25 4V3Z"
          fill={disabled ? "#959595" : "#343434"}
        />
      </svg>
    </ArrowButton>
  );
};

const ArrowButton = styled.div`
  cursor: pointer;
`;
