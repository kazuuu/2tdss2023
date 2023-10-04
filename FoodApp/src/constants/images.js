const images = [
    {
      name: 'hamburger',
      image: require('../../assets/dummyData/hamburger.png'),
    },
  ];

  export const getImage = (name) => {
    const found = images.find(e => e.name === name);
    return found ? found.image : null;
  };