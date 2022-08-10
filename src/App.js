import { BrowserRouter as Router } from 'react-router-dom'
import GlobalStyle from './components/styles/Global.styled'
// import Sandbox from './components/Sandbox'
// import Form from './components/Form'
import Homepage from './pages/Homepage'
function App() {
  return (
    <Router>
      <GlobalStyle />
      <Homepage />
    </Router>
  )
}

export default App
