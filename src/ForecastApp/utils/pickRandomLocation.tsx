const defaultCities = ["Poznań", "Seattle", "London", "Berlin"];

export default () =>
  defaultCities[Math.floor(Math.random() * defaultCities.length)];
