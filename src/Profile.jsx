import React from 'react';

const Profile = (props) => {
  return (
    <>
      <h3>연령: {props.age}</h3>
      <h3>수량: {props.num + 1}</h3>
      <h3>유저: {props.isReged ? "회원" : "비회원"}</h3>
    </>
  );
}

export default Profile;