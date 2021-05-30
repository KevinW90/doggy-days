import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/styles';

import { theme } from './themes/theme'

import Pets from './pages/Pets'
import Records from './pages/Records'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Pets />
          </Route>
          <Route path='/pet/:id'>
            <Records />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App
