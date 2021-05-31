import { Fragment } from 'react'

import Header from '../components/Header'

import MenuIcon from '@material-ui/icons/Menu';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { makeStyles} from '@material-ui/core/styles';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { pets, records, forms } from '../js/mock-data'
import { Typography } from '@material-ui/core';
import Circle from '../components/Circle';

const useStyles = makeStyles(theme => ({
  recordGroup: {
    color: theme.palette.secondary.contrastText,
    padding: '15px 35px'
  },
  recordItem: {
    padding: '25px 35px',
    position: 'relative',
    background: 'white'
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
  }
}))

function Pet() {
  const [petData, setPetData] = useState({})
  const [recordsData, setRecordsData] = useState([])
  const { id } = useParams()
  const classes = useStyles()

  useEffect(() => { 
    setPetData(pets.find(p => p.id === id))
    
    let petRecords = records.filter(r => r.petId === id)
    let hash = {}
    petRecords.forEach(r => {
      let key = r.date
      delete r.date
      if (!hash.hasOwnProperty(key)) {
        hash[key] = []
      }
      if (hash[key]) {
        hash[key].push(r)
      }
    })
  
    setRecordsData(Object.entries(hash))
  }, [id])

  
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
      <section>
        {
          petData.recordCount ?          
            recordsData.map((recordArr, ndx) => {
              let date = recordArr[0]
              let data = recordArr[1]
              return (
                <Fragment key={`${date}${ndx}`}>
                  <div key={date} className={`${classes.recordGroup} left-border`}>
                    <Typography variant="subtitle2">{date}</Typography>
                  </div>
                  <>
                    {data.map(record => {
                      
                      return (
                        <div key={record.id} className={`${classes.recordItem} left-border`}>
                          <Typography variant="subtitle1">
                            <Circle color={forms[record.type]} />
                            {record.time}
                          </Typography>
                          <div>
                            {Object.entries(record).map(keyValueArr => {
                              let recordKey = keyValueArr[0]
                              return (
                                record[recordKey].value && 
                                record[recordKey].show &&
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
                  </>
                </Fragment>
              )
            })
          :
            <p>no data</p>
        }
      </section>
    </section>    
  )
}

export default Pet
