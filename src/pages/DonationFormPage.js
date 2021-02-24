import React from 'react';
import BackPage from '../components/BackPage.js';
import DonationForm from '../components/DonationForm.js';

function DonationFormPage() {
  return (
    <div>
      <BackPage title="Donate">
        <DonationForm />
      </BackPage>
    </div>
  );
}

export default DonationFormPage;
