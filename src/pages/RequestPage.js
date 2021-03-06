import React from 'react';
import Cards from '../components/RequestCards';
import BackPage from '../components/BackPage';
function RequestPage() {
  return (
    <div>
      <BackPage title="Request Type">
        <Cards />
      </BackPage>
    </div>
  );
}

export default RequestPage;
