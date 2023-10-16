const images = [
  {
    id: 7,
    name: 'hamburger',
    image: require('../../assets/dummyData/hamburger.png'),
  },
  {
    id: 4,
    name: 'wrapSandwich',
    image: require('../../assets/dummyData/wrap_sandwich.png'),
  },
];

  export const getImage = (id) => {
    const found = images.find(e => e.id === id);
    return found ? found.image : null;
  };