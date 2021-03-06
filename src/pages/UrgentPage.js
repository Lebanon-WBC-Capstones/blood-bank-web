import React from 'react';
import BackPage from '../components/BackPage.js';
import ListItem from '../components/Listitem.js';
function UrgentPage() {
  return (
    <div>
      <BackPage title="Feeds" children={<ListItem />}></BackPage>
    </div>
  );
}

export default UrgentPage;
