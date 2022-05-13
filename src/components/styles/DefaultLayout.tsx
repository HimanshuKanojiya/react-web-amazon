import styled from "styled-components";

const Defaultlayout = styled.div`
  padding-inline: 0px;

  & .after-header-body {
    width: 100%;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.primary.white};
  }
`;

export default Defaultlayout;
