import React from 'react';
import BackPage from '../components/BackPage.js';
import FeedList from '../components/FeedList.js';

const FeedsPage = () => {
  return (
    <div>
      <BackPage title="Feeds" children={<FeedList />}></BackPage>
    </div>
  );
};
export default FeedsPage;
