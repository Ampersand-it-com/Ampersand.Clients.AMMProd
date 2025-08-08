import { useTranslation } from 'react-i18next';
import { tel, email } from 'helpers/constants';

import 'utils/i18next';

import {
  Logo,
  BehanceIcon,
  LinkedinIcon,
  YoutubeIcon,
  VimeoIcon,
  FacebookIcon,
  InstagramIcon,
  CluutchIcon,
} from 'helpers/components/Icons';
import styled, { css } from 'styled-components';
import { contentWrapperCss } from 'helpers/components/LayoutReworked/LayoutReworked';
import { COLORS } from 'helpers/colors';
import typo from 'helpers/typography';
import { BREAKPOINTS } from 'helpers/breakpoints';

function Footer() {
  const { t } = useTranslation();

  return (
    <FooterContainer id="conacts">
      <FooterContent>
        <div className="left">
          <a href="#root" aria-label="link to the top of the page">
            <Logo />
          </a>
        </div>
        <div className="middle">
          <SocialLinks className="social-links">
            <li>
              <a
                href="https://www.behance.net/ammprod1/projects"
                target="_blank"
                rel="noreferrer"
                aria-label="link to the behance"
              >
                <BehanceIcon className="icon" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/amm-production1/ "
                target="_blank"
                rel="noreferrer"
                aria-label="link to the linkedin"
              >
                <LinkedinIcon className="icon" />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCDpiH6JPPe3-FBqhRZG-96g"
                target="_blank"
                rel="noreferrer"
                aria-label="link to the youtube"
              >
                <YoutubeIcon className="icon" />
              </a>
            </li>
            <li>
              <a href="https://vimeo.com/user83807441" target="_blank" rel="noreferrer" aria-label="link to the vimeo">
                <VimeoIcon className="icon-stroke" />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/AMMProd1"
                target="_blank"
                rel="noreferrer"
                aria-label="link to the facebook"
              >
                <FacebookIcon className="icon" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/amm.prod1/"
                target="_blank"
                rel="noreferrer"
                aria-label="link to the instagram"
              >
                <InstagramIcon className="icon" />
              </a>
            </li>
            <li>
              <a
                href="https://clutch.co/profile/amm#summary"
                target="_blank"
                rel="noreferrer"
                aria-label="link to the instagram"
              >
                <CluutchIcon className="icon-stroke" />
              </a>
            </li>
          </SocialLinks>
          <p className="rights">{t('footer.rights')}</p>
        </div>
        <div className="right">
          <a href={'mailto:' + email} aria-label="email link">
            {email}
          </a>
        </div>
      </FooterContent>
    </FooterContainer>
  );
}

// Style

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;

  border-top: 1px solid ${COLORS.GREY.PRIMARY};
`;

const FooterContentResponsive = css`
  flex-direction: row;

  .middle {
    order: 2;
  }

  .right {
    order: 3;
  }

  .social-links {
    gap: 40px;
  }
`;

const FooterContent = styled.div`
  ${contentWrapperCss}

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  gap: 40px;

  .left,
  .right {
    flex: 1 0 0;
  }

  .middle {
    flex-shrink: 0;

    display: flex;
    flex-direction: column;
    gap: 20px;
    order: 3;
  }

  .right {
    display: flex;
    flex-direction: column;
    align-items: end;
    order: 2;
  }

  .rights {
    text-align: center;
    ${typo.caption}
  }

  a {
    ${typo.text};
  }

  p {
    margin: 0;
  }

  ${BREAKPOINTS.DESKTOP} {
    ${FooterContentResponsive}
  }
`;

const SocialLinks = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;

  /* govno */

  .icon {
    fill: ${COLORS.GREY.LIGHT};

    &:hover {
      fill: ${COLORS.WHITE};
    }
  }

  .icon-stroke {
    stroke: ${COLORS.GREY.LIGHT};

    &:hover {
      stroke: ${COLORS.WHITE};
    }
  }
`;

export default Footer;
