import { BrowserRouter as Router } from 'react-router-dom'
import GlobalStyle from './components/styles/Global.styled'
// import Sandbox from './components/Sandbox'
import Form from './components/Form'
function App() {
  return (
    <Router>
      <GlobalStyle />
      <Form />
    </Router>
  )
}

export default App
