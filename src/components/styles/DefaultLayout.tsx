import styled from "styled-components";

const Defaultlayout = styled.div`
  padding-inline: 0px;
  background: ${({ theme }) => theme.colors.primary.homeBg};
  overflow: hidden;

  & .after-header-body {
    width: 100%;
    height: 100%;
    margin-inline: ${({ theme }) => theme.spaces.xs};
    margin: ${({ theme }) =>
      theme.spaces.xs}; //Remove this...once E2E & TDD Done
    background: ${({ theme }) => theme.colors.primary.homeBg};
    overflow: hidden;
  }
`;

export default Defaultlayout;
