import './App.css';
import Profile from './Profile';

function App() {
  const developer1 = { age: "12", num: "100", isReged:true };
  const {age, num, isReged} = developer1;
  return (
    <div className="App">
      <h1>개발자 프로필</h1>
      <Profile age={age} num={num} isReged={isReged} />
      <Profile age="45" num={2025} isReged={false} />
    </div>
  );
}

export default App;
