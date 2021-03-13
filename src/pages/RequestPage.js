import React from 'react';
import Cards from '../components/RequestCards';
import BackPage from '../components/BackPage';
import { withNamespaces } from 'react-i18next';
function RequestPage({ t }) {
  return (
    <div>
      <BackPage title={t('requesttype.request_type')}>
        <Cards />
      </BackPage>
    </div>
  );
}

export default withNamespaces()(RequestPage);
