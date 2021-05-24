import { useEffect, useState } from 'react'

import ScreenHeader from './ScreenHeader'
import MenuIcon from '@material-ui/icons/MenuRounded';
import DogFace from './custom-svgs/dog-face.svg'
import AddCircleIcon from '@material-ui/icons/AddCircleRounded';

import { pets } from './info'

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
              <div key={ndx}>
                {pet.name}
              </div>
            ))
          : <p>Ruh Roh! You have no pets to show.</p>
      }
    </div>
  );
}

export default App;
