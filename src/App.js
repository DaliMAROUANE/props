import './App.css';
import Profile from './profile/profile.js'
import image from './profile/pic.jpg'


function App() {
  const fullName = "Mohamed Ali Marouane"
  const bio = "Management student  "
  const profession= "Student"
  const handlName =(fullName) => alert (`My NAME is ${fullName}`)
  return (
    <div className="App">
      <header className="App-header">
        <h1> React props checkpoint</h1>
      <Profile name={fullName} my_bio={bio} my_profession={profession}  handlName={handlName}>
      <img className='taswira' src={image} alt="profilpic" />
      </Profile>
      </header>
    </div>
  );
}


export default App;