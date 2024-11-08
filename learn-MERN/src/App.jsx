
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/" element={<About />}></Route>
        <Route path="/" element={<Contact />}></Route>
      </Routes>
      <h1>Hello COERians</h1>
    </>
  )
}

export default App;
