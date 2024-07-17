import logo from './logo.svg';
import './App.css';
function Login(props){
  return(
    <div id = "main">
      <h1>{props.title}</h1>
      <input type='text' placeholder='아이디'/><br/>
      <input type='password' placeholder='비밀번호'/><br/>
      <input type='button' value='Login'></input>
      <p>Don't have an account? <a href='#'>Register</a></p>
    </div>
  );
}

function App() {

  return (
    <div className="App">
      <Login title="Login"></Login>
    </div>
  );
}

export default App;
