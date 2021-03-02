import React from 'react';
import BackPage from '../components/BackPage';
import RequestList from '../components/RequestList';
function NotificationPage() {
  return (
    <div>
      <BackPage title="Request" children={<RequestList />}></BackPage>
    </div>
  );
}

export default NotificationPage;
