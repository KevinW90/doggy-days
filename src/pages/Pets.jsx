import Header from '../components/Header'

import MenuIcon from '@material-ui/icons/Menu';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import { pets } from '../js/mock-data'
import { makeStyles, Typography } from '@material-ui/core';
import Circle from '../components/Circle';


const useStyles = makeStyles(theme => ({
  petItem: {
    background: 'white',
    padding: '25px 35px'
  },
  recordCount: {
    fontFamily: theme.typography.truculenta
  },
  circle: {
    position: 'absolute',
    top: 9,
    left: -17-4.5,
    zIndex: 3,
    borderRadius: 50,
    width: '9px',
    height: '9px'
  }
}))

function Pets() {
  const classes = useStyles()

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
        {pets.map(pet => {
          return (
            <div key={pet.id} className={`${classes.petItem} left-border`}>
              <Typography variant="subtitle1">
                <Circle color={pet.color} />
                {pet.name}
              </Typography>
              <Typography 
                variant="subtitle2"
                className={classes.recordCount}
              >
                {pet.recordCount} records
              </Typography>
            </div>
          )
        })}
      </section>
    </section>    
  )
}

export default Pets
