import dataset from './dataset.json';

export function getByCity(city) {
  return dataset.find(item => item.city === city);
}