import { BREAKPOINTS } from 'helpers/breakpoints';
import { COLORS } from 'helpers/colors';
import styled, { css } from 'styled-components';

// Page Container

const PageContainer = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: column;

  background-color: ${COLORS.BLACK.PRIMARY};
  color: ${COLORS.WHITE};
`;

// Content Wrapper

const contentWrapperCss = css`
  width: 100%;
  max-width: 320px;
  align-self: center;

  ${BREAKPOINTS.DESKTOP} {
    max-width: 1170px;
  }
`;

const ContentWrapper = styled.div`
  ${contentWrapperCss}
`;

//

export default PageContainer;
export { ContentWrapper, contentWrapperCss };
