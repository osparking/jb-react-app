import React from 'react';

const Profile = ({age, num, isReged}) => {
  return (
    <>
      <h3>연령: {age}</h3>
      <h3>수량: {num + 1}</h3>
      <h3>유저: {isReged ? "회원" : "비회원"}</h3>
    </>
  );
}

export default Profile;