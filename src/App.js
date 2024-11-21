import { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import i18n from 'utils/i18next';

import Loader from './helpers/components/Loader/Loader';
import SentPage from 'pages/Sent';
import HomePage from 'pages/Home';

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            index
            element={
              <Page lang="en">
                <HomePage />
              </Page>
            }
          />
          <Route
            path="ua"
            element={
              <Page lang="ua">
                <HomePage />
              </Page>
            }
          />
          <Route
            path="ru"
            element={
              <Page lang="ru">
                <HomePage />
              </Page>
            }
          />

          <Route
            path="sent"
            element={
              <Page lang="en">
                <SentPage />
              </Page>
            }
          />
          <Route
            path="ua/sent"
            element={
              <Page lang="ua">
                <SentPage />
              </Page>
            }
          />
          <Route
            path="ru/sent"
            element={
              <Page lang="ru">
                <SentPage />
              </Page>
            }
          />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

function Page({ lang = 'en', children }) {
  useEffect(() => {
    const currentLang = i18n.language;

    if (currentLang !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang]);

  return children;
}

export default App;
