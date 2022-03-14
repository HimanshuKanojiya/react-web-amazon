import { createGlobalStyle } from "styled-components";

export const GlobalCSS = createGlobalStyle`
    h1 {
        font-family: "Amazon Ember Bold", sans-serif;
        font-size: 24px;
        font-size: ${({ theme }) => theme.fontSize.h1};
    }

    h2 {
        font-family: "Amazon Ember Bold", sans-serif;
        font-size: ${({ theme }) => theme.fontSize.h2};
    }

    h3 {
        font-family: "Amazon Ember Bold", sans-serif;
        font-size: ${({ theme }) => theme.fontSize.h3};
    }

    h4 {
        font-family: "Amazon Ember Bold", sans-serif;
        font-size: ${({ theme }) => theme.fontSize.h4};
    }
    p {
        font-size: ${({ theme }) => theme.fontSize.bodyLarge};
    }
`;
