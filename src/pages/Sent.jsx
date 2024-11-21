import { useTranslation } from 'react-i18next';
import 'utils/i18next';
import { ReactComponent as PhoneIcon } from 'assets/icons/phoneIcon.svg';
import { tel, telRaw } from 'helpers/constants';
import styled from 'styled-components';
import PageContainer, { contentWrapperCss } from 'helpers/components/LayoutReworked/LayoutReworked';
import Footer from 'components/FooterReworked/FooterReworked';
import typo from 'helpers/typography';
import { COLORS } from 'helpers/colors';
import Button from 'components/CharacterUpgrade/components/Button/Button';
import Ellipse from 'helpers/components/Ellipse/Ellipse';
import i18n from 'utils/i18next';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { BREAKPOINTS } from 'helpers/breakpoints';

const SentPage = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const currentLang = i18n.language;
  const langPath = currentLang === 'en' ? '/' : '/' + currentLang;

  const handleReturn = (e) => {
    navigate(langPath);
  };

  return (
    <PageContainer>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Section>
        <Ellipse className="ellipse" />
        <div className="text-block">
          <h2>{t('sentPage.title')}</h2>
          <p className="lead">{t('sentPage.description')}</p>
        </div>
        <Button onClick={handleReturn}>{t('sentPage.returnButton')}</Button>
        <div className="text-block tel">
          <a href={'tel:' + telRaw} aria-label="call">
            <PhoneIcon className="icon" />
            <span className="h3">{tel}</span>
          </a>
          <p className="text">{t('sentPage.caption')}</p>
        </div>
      </Section>
      <Footer />
    </PageContainer>
  );
};

const Section = styled.section`
  ${contentWrapperCss}

  flex: 1 0 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  padding: 50px 0;

  z-index: 0;

  .ellipse {
    z-index: -1;
  }

  .text-block {
    max-width: 680px;

    display: flex;
    flex-direction: column;
    gap: 20px;

    text-align: center;
  }

  .text-block.tel {
    align-items: center;
    gap: 10px;
  }

  h2,
  .h2 {
    ${typo.h2}
    text-align: center;
  }

  h3,
  .h3 {
    ${typo.h3}
  }

  .lead {
    ${typo.lead}
    text-align: center;
  }

  .text {
    ${typo.text}
  }

  button {
    width: 100%;
    height: initial;
    ${typo.ui}
    padding: 15px 30px;
    mix-blend-mode: screen;
  }

  .icon {
    fill: ${COLORS.WHITE};
  }

  p {
    margin: 0;
  }

  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }

  ${BREAKPOINTS.DESKTOP} {
    .text-block {
      max-width: 680px;
    }

    button {
      width: 420px;
    }
  }
`;

const SectionContent = styled.div``;

export default SentPage;
