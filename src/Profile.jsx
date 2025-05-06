import React from 'react';

const Profile = ({name, age, isReged, hobbies, onHobbyClick}) => {
  return (
    <>
      <h3>이름: {name}</h3>
      <h3>연령: {age}</h3>
      <h3>유저: {isReged ? "회원" : "비회원"}</h3>
      <ul>
        {hobbies.map((hobby, idx) => {
          return (
            <li
              key={idx}
              onClick={() => onHobbyClick(hobby)}>{hobby}
            </li>
          )
        })}
      </ul>

    </>
  );
}

export default Profile;