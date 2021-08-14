import styled from "styled-components";
import { font, ui } from "styles/colors";

export const Container = styled.div`
  background: ${ui.white};
  display: flex;
  border: 1px solid ${font.gray};
  border-radius: 15px;
  align-items: center;
  > div:first-of-type {
    padding-left: 2.5ch;
    height: 100%;
    white-space: nowrap;

    * {
      margin-bottom: 10px;
    }
  }

  > div:last-of-type {
    border-left: 1px solid ${font.gray};

    > div:first-of-type {
      border-bottom: 1px solid ${font.gray};
    }
  }
`;

export const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 2ch;
  height: 100%;
`;

export const Row = styled.div`
  padding: 2.5ch;
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.span`
  font-weight: bold;
  color: ${font.gray};
`;

const moneyOptions = {
  cash: { content: "$ ", color: ui.black },
  income: { content: "+ ", color: ui.green },
  expense: { content: "- ", color: "red" },
};

export const Money = styled.span`
  font-size: ${({ size }) =>
    typeof Number(size) === "number" && size > 0 ? size : 2}ch;
  ${({ type }) => {
    if (type in moneyOptions) {
      return `
        color: ${moneyOptions[type].color};
        ::before{
            content: '${moneyOptions[type].content}';
        }
        `;
    } else {
      return `
        color: ${moneyOptions.cash.color};
        ::before{
            content: '${moneyOptions.cash.content}';
        }
        `;
    }
  }};
`;
