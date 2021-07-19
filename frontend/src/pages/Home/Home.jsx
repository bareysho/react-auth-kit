import React from 'react';
import { useTranslation } from 'react-i18next';

import { Section } from './Section/Section';

export const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="page-container home">
      <h1 className="title mb-5">{t('navbar.areas.home')}</h1>
      <div className="content">
        <Section title={t('pages.home.sections.mainSection')}>
          Kek
        </Section>
      </div>
    </div>
  );
};
