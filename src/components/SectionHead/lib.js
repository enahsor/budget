import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Name = styled.span`
  ${({ type }) => {
    switch (type) {
      case 1:
        return "";

      default:
        return "";
    }
  }}
`;
