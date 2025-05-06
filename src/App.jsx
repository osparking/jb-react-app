import './App.css';
import Profile from './Profile';

function App() {
  const onHobbyClick = (hobby) => {
    alert(`당신은 '${hobby}' 를 선택했어요.`);
  }

  return (
    <div className="App">
      <h1>개발자 프로필</h1>
      <Profile
        age={45}
        num={2025}
        isReged={false} 
        hobbies={["축구", "게임", "산책"]}
        onHobbyClick={onHobbyClick}/>
    </div>
  );
}



export default App;
