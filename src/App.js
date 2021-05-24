import { useEffect, useState } from 'react'

import ScreenHeader from './components/ScreenHeader'
import MenuIcon from '@material-ui/icons/MenuRounded';
import DogFace from './assets/dog-face.svg'
import AddCircleIcon from '@material-ui/icons/AddCircleRounded';
import ListItem from './components/ListItem'

import { pets } from './js/info'

import './app.css'

function App() {
  const [petList, setPetList] = useState([])

  useEffect(() => {
    setPetList(pets)
  }, [])

  return (
    <div className="app">
      <ScreenHeader left={MenuIcon} right={AddCircleIcon} />
      {
        petList.length
          ? petList.map((pet, ndx) => (
              <ListItem key={ndx} pet={pet} />
            ))
          : <p>Ruh Roh! You have no pets to show.</p>
      }
    </div>
  );
}

export default App;
