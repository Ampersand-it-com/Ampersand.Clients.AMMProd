import { BrowserRouter as Router, Routes, Route, Navigate, Outlet, useParams } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import i18n from 'utils/i18next';

import Loader from './helpers/components/Loader/Loader';
import SentPage from 'pages/Sent';
import HomePage from 'pages/Home';

const allowedLanguages = ['en', 'ua', 'ru'];

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Navigate to="/en" replace />} />

          <Route path=":lang" element={<Page />}>
            <Route index element={<HomePage />} />
            <Route path="sent" element={<SentPage />} />
          </Route>

          <Route path="*" element={<Navigate to="/en" replace />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

function Page() {
  const { lang } = useParams();

  useEffect(() => {
    if (!allowedLanguages.includes(lang)) {
      window.location.replace('/en');
      return;
    }

    const currentLang = i18n.language;
    if (lang && currentLang !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang]);

  return <Outlet />;
}

export default App;
