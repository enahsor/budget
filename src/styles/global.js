import { createGlobalStyle } from "styled-components";
import { primary } from "styles/fonts";

export const Global = createGlobalStyle`

    body{
        font-family: ${primary};
    }


   *{
       box-sizing: border-box;
       padding: 0;
       margin: 0;
   }
`;
