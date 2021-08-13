import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  overflow: auto;
  overflow-y: hidden;

  /* Allows container to overflow to the right */
  margin-right: -2ch;
  > * {
    margin-right: 3ch;
  }
`;
