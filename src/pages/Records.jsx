import Header from '../components/Header'

import MenuIcon from '@material-ui/icons/Menu';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { makeStyles} from '@material-ui/core/styles';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { pets, records } from '../js/mock-data'
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  recordGroup: {
    background: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    padding: '15px 35px'
  },
  recordItem: {
    padding: '25px 35px',
    position: 'relative'
  },
  recordBadge: {
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: '3px 5px',
    fontFamily: theme.typography.truculenta,
    width: 'fit-content',
    display: 'inline-block',
    marginRight: '5px',
    borderRadius: '2px'
  },
  circle: {
    position: 'absolute',
    top: 9,
    left: -17-4.5,
    zIndex: 3,
    borderRadius: 50,
    width: '9px',
    height: '9px',
    background: theme.palette.primary.main,
    boxShadow: `0 0 4px 2px rgba(23, 163, 152, .5)`
  }
}))

function Pet() {
  const [petData, setPetData] = useState({})
  const [recordsData, setRecordsData] = useState([])
  const [numRecords, setNumRecords] = useState(0)
  
  const { id } = useParams()

  useEffect(() => { 
    setPetData(pets.find(p => p.id === id))
    
    let num = 0
    let petRecords = records.filter(r => r.petId === id)
    let hash = {}
    petRecords.forEach(r => {
      let key = r.type
      delete r.type
      if (!hash.hasOwnProperty(key)) {
        hash[key] = []
      }
      if (hash[key]) {
        hash[key].push(r)
        num++
      }
    })
  
    setRecordsData(Object.entries(hash))
    setNumRecords(num)
  }, [id])

  const classes = useStyles()

  return (
    <section className="page">
      <Header
        left={{
          icon: MenuIcon
        }}
        center={{
          text: petData.name
        }}
        right={{
          icon: AddCircleIcon
        }}
      />
      {console.log(recordsData, 'hey')}
      {
        numRecords ?          
          recordsData.map(recordArr => {
            let type = recordArr[0]
            let data = recordArr[1]
            return (
              <>
                <div key={type} className={`${classes.recordGroup} left-border`}>
                  <Typography variant="subtitle2">{type}</Typography>
                </div>
                <div>
                  {data.map(record => {
                    return (
                      <div key={record.id} className={`${classes.recordItem} left-border`}>
                        <Typography variant="subtitle1">
                          <div className={classes.circle}></div>
                          {record.time}
                        </Typography>
                        <div>
                          {Object.entries(record).map(keyValueArr => {
                            let recordKey = keyValueArr[0]
                            if (record[recordKey].value && record[recordKey].show)
                              return (
                                <Typography 
                                  key={recordKey} 
                                  className={classes.recordBadge}
                                  variant="subtitle2"
                                >
                                  {recordKey}
                                </Typography>
                              )
                          })}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </>
            )
          })
        :
          <p>no data</p>
      }
    </section>    
  )
}

export default Pet
