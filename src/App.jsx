import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/styles';
import Header from './components/Header'
import MenuIcon from '@material-ui/icons/Menu';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { theme } from './themes/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
    
  )
}

export default App
