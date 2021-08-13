import styled from "styled-components";
import { ui } from "styles/colors";
import { animated } from "react-spring";

export const Button = styled(animated.button)`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1ch;
  font-weight: bold;
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: ${({ active }) => (active ? ui.green : "inherit")};
  > svg {
    margin-bottom: 8px;
  }
`;
