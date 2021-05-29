import Header from '../components/Header'

import MenuIcon from '@material-ui/icons/Menu';
import AddCircleIcon from '@material-ui/icons/AddCircle';

function Pet() {
  // get pet id from params and find name
  return (
    <section className="page">
      <Header
        left={{
          icon: MenuIcon
        }}
        center={{
          text: 'Pet Name' // pet name from id
        }}
        right={{
          icon: AddCircleIcon
        }}
      />
    </section>    
  )
}

export default Pet
