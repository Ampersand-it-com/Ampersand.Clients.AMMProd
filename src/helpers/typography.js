import { css } from 'styled-components';
import { BREAKPOINTS } from './breakpoints';

const typo = {};

typo.h2 = css`
  font-family: Furore, sans-serif;
  font-weight: 400;
  font-size: 22px;
  line-height: 133%;
  letter-spacing: 0.07em;

  ${BREAKPOINTS.DESKTOP} {
    font-size: 36px;
  }
`;

typo.h3 = css`
  font-family: Furore, sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 133%;
  letter-spacing: 0.07em;

  ${BREAKPOINTS.DESKTOP} {
    font-size: 22px;
  }
`;

typo.lead = css`
  font-family: Roboto, sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 133%;
  letter-spacing: 0.02em;

  ${BREAKPOINTS.DESKTOP} {
    font-size: 22px;
  }
`;

typo.text = css`
  font-family: Roboto, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: 0.02em;

  ${BREAKPOINTS.DESKTOP} {
    font-size: 16px;
  }
`;

typo.bold = css`
  font-family: Roboto, sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: 0.02em;

  ${BREAKPOINTS.DESKTOP} {
    font-size: 16px;
  }
`;

typo.caption = css`
  font-family: Roboto, sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: 0.05em;

  ${BREAKPOINTS.DESKTOP} {
    font-size: 14px;
  }
`;

typo.ui = css`
  font-family: Roboto, sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 125%;
  letter-spacing: 0.05em;

  ${BREAKPOINTS.DESKTOP} {
    font-size: 18px;
  }
`;

export default typo;
