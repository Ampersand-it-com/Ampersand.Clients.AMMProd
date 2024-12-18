import { useState, useRef, useEffect } from 'react';
import { useStyles } from './ContactForm.styles';
import { useTranslation } from 'react-i18next';
import foxImg from 'assets/images/foxImg.png';
import { ReactComponent as PhoneIcon } from 'assets/icons/phoneIcon.svg';
import classNames from 'classnames';
import { tel } from 'helpers/constants';
import 'utils/i18next';
import useLocaleNavigate from 'hooks/useLocaleNavigate';

function ContactForm() {
  const s = useStyles();
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmited, setIsSubmited] = useState(false);
  const [isNameValid, setIsNameValid] = useState(false);
  const [isPhoneValid, setIsPhoneValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isDirty, setIsDirty] = useState(false);
  const myForm = useRef();

  // Navigation

  const navigateToSent = useLocaleNavigate('/sent');
  const handleSubmit = () => {
    navigateToSent();
  };

  // Handle Form

  const handleSubmitClick = (e) => {
    e.preventDefault();
    setIsDirty(true);
    if (isNameValid && isPhoneValid) {
      const body = {
        emailTo: ['amm.prod1@gmail.com'],
        clientId: 'ammagency',
        clientSecret: 'SDKJLenv83n&#@nmv98n387Sf',
        contactEmail: email,
        contactFirstName: name,
        contactPhoneNumber: phone,
        includeSystemInfo: true,
      };

      // setup request
      fetch('https://email.ampersand-it.com/sendcontactusform', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })
        .then((response) => {
          if (response.ok) {
            console.log('Form successfully submitted');
            setIsSubmited(true);
            setIsDirty(false);
            handleSubmit();
          } else {
            throw new Error('������ ��� �������� ������ �� ������');
          }
        })
        .catch((error) => alert(error));
    }
  };

  useEffect(() => {
    name.length > 2 ? setIsNameValid(true) : setIsNameValid(false);
    email.length > 5 && email.includes('@') ? setIsEmailValid(true) : setIsEmailValid(false);
    phone.toString().length >= 10 && phone.toString().length <= 13 ? setIsPhoneValid(true) : setIsPhoneValid(false);
  }, [name, email, phone]);

  return (
    <div className={s.root}>
      <div className={s.elipseTwo}></div>
      <div className={s.elispse}></div>
      {/* {isSubmited ?
        <div className={s.submittedContainer}>
          <h2 className={s.successTitle}>{t("contactModal.successTitle")}</h2>
          <p className={s.successDescription}>{t("contactModal.description")}</p>
          <p className={s.phoneContainer}><PhoneIcon className={s.phoneIcon} />{tel}</p>
          <p className={s.successRequest}>{t("contactModal.request")}</p>
          <img src={foxImg} className={s.foxLogo} alt='fox mascot'/>
        </div>
        : */}
      <div className={s.formContainer}>
        <h2 className={s.title}>{t('contactForm.title')}</h2>
        <p className={s.description}>{t('contactForm.description')}</p>
        <form
          className={s.contactForm}
          name="contactForm"
          action="/contactForm"
          method="POST"
          data-netlify="true"
          ref={myForm}
        >
          <input type="hidden" name="form-name" value="contactForm" />
          <label className={classNames({ [s.errorState]: !isNameValid && isDirty })}>
            <span>{t('contactModal.name')}</span>
            <input
              type="text"
              className={s.contactInput}
              autoComplete="off"
              placeholder={t('contactModal.namePlaceholder')}
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {!isNameValid && isDirty && <span className={s.error}>{t('error')}</span>}
          </label>
          <label>
            <span>{t('contactModal.phoneNumber')}</span>
            <input
              type="number"
              className={s.contactInput}
              autoComplete="off"
              name="phone"
              placeholder="+380"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            {!isPhoneValid && isDirty && <span className={s.error}>{t('error')}</span>}
          </label>
          <label>
            <span>{t('contactModal.email')}</span>
            <input
              type="email"
              className={s.contactInput}
              autoComplete="off"
              placeholder={t('contactModal.emailPlaceholder')}
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {!isEmailValid && isDirty && <span className={s.error}>{t('error')}</span>}
          </label>
          <button className={s.submitBtn} type="button" onClick={(e) => handleSubmitClick(e)}>
            {t('contactModal.btn')}
          </button>
        </form>
      </div>
      {/* } */}
    </div>
  );
}

export default ContactForm;
