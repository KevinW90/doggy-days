import Header from '../components/Header'

import MenuIcon from '@material-ui/icons/Menu';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import { pets } from '../js/mock-data'

function Pets() {
  return (
    <section className="page">
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
      <section>
        {pets.map(pet => (
          <div key={pet.id} className="pet-item left-border">
            <p>{pet.name}</p>
            <p>{pet.recordCount} records</p>
          </div>
        ))}
      </section>
    </section>    
  )
}

export default Pets
