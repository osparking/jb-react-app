import './App.css';
import Profile from './Profile';

function App() {
  const onHobbyClick = (hobby) => {
    alert(`당신은 '${hobby}' 를 선택했어요.`);
  }

  const mrKim = {
    name: "김씨",
    age: 45,
    isReged: false,
    hobbies: ["축구", "게임", "산책"],
    onHobbyClick: onHobbyClick
  }

  const mrLee = {
    name: "이씨",
    age: 45,
    isReged: false,
    hobbies: ["축구", "바둑", "산책"],
    onHobbyClick: onHobbyClick
  }

  return (
    <div className="App">
      <h1>개발자 프로필</h1>
      <Profile {...mrKim} />
      <Profile {...mrLee} />
    </div>
  );
}



export default App;
