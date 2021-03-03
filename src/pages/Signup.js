import React, { useState } from 'react';
import Layout from '../components/Layout.js';
import SignUp from '../components/sign-up';
import EmailConfirmation from '../components/EmailConfirmation.js';
const SignUpPage = () => {
  const [count, setCount] = useState(1);

  return (
    <div>
      <Layout>
        {count === 1 ? <SignUp setCount={setCount} count={count} /> : null}
        {count === 2 ? <EmailConfirmation /> : null}
      </Layout>
    </div>
  );
};
export default SignUpPage;
