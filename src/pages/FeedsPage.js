import React from 'react';
import BackPage from '../components/BackPage.js';
import FeedList from '../components/FeedList.js';
import { withNamespaces } from 'react-i18next';
const FeedsPage = ({ t }) => {
  return (
    <div>
      <BackPage title={t('feeds.feeds')} children={<FeedList />}></BackPage>
    </div>
  );
};
export default withNamespaces()(FeedsPage);
