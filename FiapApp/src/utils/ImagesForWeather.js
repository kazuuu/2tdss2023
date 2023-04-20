const images = {
  'Thunderstorm': require('../../assets/images/Thunderstorm.jpeg'),
  'Drizzle': require('../../assets/images/Drizzle.jpeg'),
  'Rain': require('../../assets/images/Rain.jpeg'),
  'Snow': require('../../assets/images/Snow.jpeg'),
  'Clear': require('../../assets/images/Clear.jpeg'),
  'Clouds': require('../../assets/images/Clouds.jpeg'),
  'Other': require('../../assets/images/Mist.jpeg'),
}

export default function getImage(weather) {
  if (images[weather] == null)
      return images['Other'];

  return images[weather];
}

