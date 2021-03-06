import React from 'react';
import BG from '../assets/bg.svg';
import Avatar from '../assets/avataredit.svg';
import Icon from '../assets/Camera.svg';
import EditInputs from '../components/EditInputs';

function EditPage() {
  const handleEdit = () => {};
  return (
    <div className="min-h-screen bg-white flex flex-col max-w-screen-sm ">
      <img
        src={Avatar}
        alt="profile"
        className="absolute mt-36 ml-32 sm:mt-60 sm:ml-52 sm:h-1/3 sm:w-1/3 max-w-screen-sm"
      />
      <img
        src={Icon}
        alt="camera"
        className="absolute mt-56 ml-52 sm:h-1/12 sm:w-1/12 sm:mt-80 sm:ml-96 sm:h-auto max-w-screen-sm"
        onClick={handleEdit}
      />

      <img src={BG} alt="editBg" className=" sm:w-full" />
      <EditInputs />
    </div>
  );
}

export default EditPage;
