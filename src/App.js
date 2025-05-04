import './App.css';
import Profile from './Profile';

function App() {
  return (
    <div className="App">
      <h1>개발자 프로필</h1>
      <Profile name="이재강" age="12" num="100" />
      <Profile name="김태호" age="45" num={2025} />
    </div>
  );
}

export default App;
