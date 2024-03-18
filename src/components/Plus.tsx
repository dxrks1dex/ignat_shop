import styled from "styled-components";

export const Plus = styled.div`
  width: 80px;
  height: 80px;
  position: relative;

  &::before {
    content: "";
    position: absolute;

    background-color: black;

    width: 80px;
    height: 3px;

    top: 38px;

    border-radius: 3px;
  }

  &::after {
    content: "";
    position: absolute;

    background-color: black;

    width: 3px;
    height: 80px;

    left: 38px;

    border-radius: 3px;
  }
`;
