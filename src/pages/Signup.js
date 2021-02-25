import React, { useState } from 'react';
import Layout from '../components/Layout.js';
import SignUp from '../components/sign-up';
import EmailConfirmation from '../components/EmailConfirmation.js';
const SignUpPage = () => {
  const [count, setCount] = useState(1);

  return (
    <div>
      <Layout>
        {count === 1 ? <SignUp /> : null}
        {count === 2 ? <EmailConfirmation /> : null}
        {count === 1 ? (
          <button
            type="submit"
            className="bg-pink  w-3/4 rounded-lg h-9 text-gray-500 font-Roboto self-center mb-6"
            onClick={() => setCount(count + 1)}
          >
            Sign Up
          </button>
        ) : null}
      </Layout>
    </div>
  );
};
export default SignUpPage;
