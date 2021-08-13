import styled from "styled-components";
import { font, ui } from "styles/colors";

export const Button = styled.button`
  border: none;
  height: 5ch;
  width: 5ch;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.7ch;
  cursor: pointer;

  color: ${({ type }) => {
    // determine icon color
    // if options grow.. abstract primary
    // and secondary types into a function
    // that return css properties
    switch (type) {
      case "primary":
        return font.gray;
      case "secondary":
        return ui.white;
      default:
        return font.gray;
    }
  }};

  background-color: ${({ type }) => {
    // determine background color
    switch (type) {
      case "primary":
        return ui.white;
      case "secondary":
        return font.gray;
      default:
        return ui.white;
    }
  }};
`;
