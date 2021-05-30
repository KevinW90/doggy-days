export const pets = [
  {
    id: '1',
    name: 'Sally',
  },
  {
    id: '2',
    name: 'Freyja',
  }
]

export const records = [
  {
    id: '1',
    date: 'Sun May 30, 2021',
    time: '9:00am',
    type: 'Every Day Activities',
    petId: '1',
    walk: {
      value: true,
      show: true
    },
    pee: {
      value: true,
      show: true
    },
    poo: {
      value: false,
      show: true
    },
    food: {
      value: '1 cup',
      show: true
    },
    notes: {
      value: 'sluggish',
      show: true
    }
  },
  {
    id: '2',
    time: '2:00pm',
    date: 'Sun May 30, 2021',
    type: 'Every Day Activities',
    petId: '1',
    walk: {
      value: true,
      show: true
    },
    pee: {
      value: true,
      show: true
    },
    poo: {
      value: true,
      show: true
    },
    food: {
      value: '',
      show: true
    },
    notes: {
      value: '',
      show: true
    }
  },
]

export const forms = {
  'Every Day Activities': '0,0,255',
  Medical: '0,255,00'
}