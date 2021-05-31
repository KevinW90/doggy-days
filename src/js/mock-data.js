export const pets = [
  {
    id: '1',
    name: 'Sally',
    recordCount: 3,
    color: 'rgb(255,0,0)'
  },
  {
    id: '2',
    name: 'Freyja',
    recordCount: 1,
    color: 'rgb(0,255,0)'
  },
  {
    id: '3',
    name: 'Niko',
    recordCount: 0,
    color: 'rgb(0,0,255)'
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
  {
    id: '3',
    time: '2:00pm',
    date: 'Sun May 30, 2021',
    type: 'Every Day Activities',
    petId: '2',
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
  {
    id: '4',
    time: '6:00pm',
    date: 'Mon May 31, 2021',
    type: 'Medical',
    petId: '1',
    checkup: {
      value: true,
      show: true
    }
  },
]

export const forms = {
  'Every Day Activities': 'rgb(80,0,80)',
  Medical: 'rgb(0,80,80)'
}