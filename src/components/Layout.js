import React from 'react';

function Layout(props) {
  return (
    <div>
      <div className="min-h-screen bg-pri-red py-10 sm:p-8">
        <div
          className=" bg-white p-10 flex items-center justify-center sm:w-full"
          style={{
            borderStyle: 'solid',
            borderRadius: '0px 50px 0px 50px',
            height: '90vh',
          }}
        >
          <div>{props.children}</div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
