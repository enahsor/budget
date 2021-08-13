import styled from "styled-components";
import { font } from "styles/sizes";
import { font as fontColor } from "styles/colors";
import { primary } from "styles/fonts";
import { animated } from "react-spring";

const defaultColor = "#F95569";

export const Wrapper = styled(animated.div)`
  font-family: ${primary};
  color: ${fontColor.white};
  cursor: pointer;
  padding: 3ch;
  border-radius: 1.3ch;
  background-color: ${({ color }) => (color ? color : defaultColor)};
  min-height: 250px;
  min-width: 350px;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > div:last-of-type {
    > div:first-of-type {
      margin-bottom: 20px;
    }
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Item = styled.span`
  user-select: none;
  font-weight: ${({ bold }) => (bold ? "bold" : "")};
  font-size: ${({ size }) => {
    switch (size) {
      case "sm":
        return font.sm;
      case "md":
        return font.md;
      case "lg":
        return font.lg;
      case typeof size === "number":
        return `${size}ch`;
      default:
        return font.sm;
    }
  }};
  ${({ format }) => (format === "cash" ? '::before{content: "$"}' : "")};

  > svg {
    color: red;
  }
`;
