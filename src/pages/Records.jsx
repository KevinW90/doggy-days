import Header from '../components/Header'

import MenuIcon from '@material-ui/icons/Menu';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { pets, records } from '../js/mock-data'

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
    console.log(hash, 'hash')
    setRecordsData(hash)
    setNumRecords(num)
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
      {console.log(Object.entries(recordsData), 'hey')}
      {
        numRecords ?          
          Object.entries(recordsData).map(arr => {
            let type = arr[0]
            return (
              <div key={type} className="record-group">
                {type}
                {recordsData[type].map(r => {
                  return (
                    <div className="record-item">
                      <div>{r.time}</div>
                      <div>
                        {Object.entries(r).map(valueArr => {
                          let recordKey = valueArr[0]
                          if (r[recordKey].value && r[recordKey].show)
                            return <span>{recordKey}</span>
                        })}
                      </div>
                    </div>
                  )
                })}
              </div>)
          })
        :
          <p>no data</p>
      }
    </section>    
  )
}

export default Pet
