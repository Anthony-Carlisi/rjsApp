import { BrowserRouter as Router } from 'react-router-dom'
// import Navbar from './components/Navbar'
// import Landingpage from './components/Landingpage'
import GlobalStyle from './components/styles/Global.styled'
import Sandbox from './components/Sandbox'
import Form from './components/Form'
function App() {
  return (
    <Router>
      <GlobalStyle />
      <Sandbox />
    </Router>
  )
}

export default App
