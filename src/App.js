import { BrowserRouter as Router } from 'react-router-dom'
import GlobalStyle from './components/styles/Global.styled'
// import Sandbox from './components/Sandbox'
// import Form from './components/Form'
import Form2 from './components/Form2'
// import FormTest from './components/FormTest'
function App() {
  return (
    <Router>
      <GlobalStyle />
      <Form2 />
    </Router>
  )
}

export default App
