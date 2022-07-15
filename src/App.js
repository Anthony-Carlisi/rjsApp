import { BrowserRouter as Router } from 'react-router-dom'
// import Navbar from './components/Navbar'
// import Landingpage from './components/Landingpage'
import GlobalStyle from './components/styles/Global.styled'
import Sandbox from './components/Sandbox'
import Form from './components/Form'
import FormTest from './components/FormTest'
function App() {
  return (
    <Router>
      <GlobalStyle />
      <FormTest />
    </Router>
  )
}

export default App
