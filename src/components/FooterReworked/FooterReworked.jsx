"use client";

import { email } from "@/helpers/constants";

import Logo from "@/assets/icons/logo.svg";
import BehanceIcon from "@/assets/icons/behanceIcon.svg";
import LinkedinIcon from "@/assets/icons/linkedinIcon.svg";
import YoutubeIcon from "@/assets/icons/youtubeIcon.svg";
import VimeoIcon from "@/assets/icons/vimeoIcon.svg";
import FacebookIcon from "@/assets/icons/facebookIcon.svg";
import InstagramIcon from "@/assets/icons/instagramIcon.svg";
import CluutchIcon from "@/assets/icons/clutchIcon.svg";

import s from "./FooterReworked.module.scss";
import Layout from "@/helpers/components/LayoutReworked/Layout";
import { useTranslations } from "@/i18n";

function Footer() {
  const { t } = useTranslations();

  return (
    <div className={s.footerContainer} id="conacts">
      <Layout>
        <div className={s.footerContent}>
          <div className={s.left}>
            <a href="#root" aria-label="link to the top of the page">
              <Logo className={s.logo} />
            </a>
          </div>
          <div className={s.middle}>
            <div className={s.socialLinks}>
              <li>
                <a
                  href="https://www.behance.net/ammprod1/projects"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="link to the behance"
                >
                  <BehanceIcon className={s.icon} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/amm-production1/ "
                  target="_blank"
                  rel="noreferrer"
                  aria-label="link to the linkedin"
                >
                  <LinkedinIcon className={s.icon} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCDpiH6JPPe3-FBqhRZG-96g"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="link to the youtube"
                >
                  <YoutubeIcon className={s.icon} />
                </a>
              </li>
              <li>
                <a
                  href="https://vimeo.com/user83807441"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="link to the vimeo"
                >
                  <VimeoIcon className={s.iconStroke} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/AMMProd1"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="link to the facebook"
                >
                  <FacebookIcon className={s.icon} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/amm.prod1/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="link to the instagram"
                >
                  <InstagramIcon className={s.icon} />
                </a>
              </li>
              <li>
                <a
                  href="https://clutch.co/profile/amm#summary"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="link to the instagram"
                >
                  <CluutchIcon className={s.iconStroke} />
                </a>
              </li>
            </div>
            <p className={s.rights}>{t("common.footer.rights")}</p>
          </div>
          <div className={s.right}>
            <a href={"mailto:" + email} aria-label="email link">
              {email}
            </a>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Footer;
