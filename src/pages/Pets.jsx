import Header from '../components/Header'

import MenuIcon from '@material-ui/icons/Menu';
import AddCircleIcon from '@material-ui/icons/AddCircle';

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
      hello
    </section>    
  )
}

export default Pets
