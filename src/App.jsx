import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'
import MenuIcon from '@material-ui/icons/Menu';
import AddCircleIcon from '@material-ui/icons/AddCircle';


function App() {
  return (
    <Router>
      <Header
        left={{
          icon: MenuIcon
        }}
        center={{
          text: 'My Pets'
        }}
        right={{
          icon: AddCircleIcon
        }}
      />
    </Router>
  )
}

export default App
