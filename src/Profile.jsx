import React from 'react';

const Profile = (props) => {
  const name = "안창호";
  return (
    <h3>이름: {props.name}</h3>
  );
}

export default Profile;