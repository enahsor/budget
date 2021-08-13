import styled from "styled-components";
import { font, ui } from "styles/colors";

export const Wrapper = styled.button`
  color: ${ui.offWhite};
  border: none;
  padding: 1.2ch;
  width: 18ch;
  border-radius: 0.9ch;
  cursor: pointer;
  font-weight: bold;
  ${({ type }) => {
    switch (type) {
      case "primary":
        return `background-color: ${ui.green};
                border: 1px solid ${ui.green};`;
      case "secondary":
        return `background-color: ${ui.black};
                border: 1px solid ${ui.black};`;
      default:
        return `background-color: ${ui.green};
                border: 1px solid ${ui.green};`;
    }
  }};

  ${({ filled }) => {
    switch (filled) {
      case true:
        return `background: ${null};`;
      case false:
        return `background: none;
                color: ${ui.black}`;
      default:
        return `background: ${null}`;
    }
  }};
`;
