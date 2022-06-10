import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar'
import Landingpage from './components/Landingpage'
function App() {
  return (
    <Router>
      <Landingpage />
    </Router>
  )
}

export default App
