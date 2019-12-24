import axios from 'axios';

export const getItems = (query, page) => {
  const key = '12970042-452422569eb847c96e4cb5bfd';
  const url = `https://pixabay.com/api/?q=${query}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`;
  return axios.get(url);
};

export const w = () => null;
