import { useNavigate } from 'react-router-dom';
import i18n from 'utils/i18next';

export default function useLocaleNavigate(path) {
  const navigate = useNavigate();
  const currentLang = i18n.language || 'en';

  if (typeof path === 'string') {
    return () => {
      navigate(`/${currentLang}${path}`);
    };
  }

  if (Array.isArray(path)) {
    return path.map((pathItem) => {
      return () => {
        navigate(`/${currentLang}${pathItem}`);
      };
    });
  }

  throw new Error('Invalid argument: path must be a string or an array.');
}
