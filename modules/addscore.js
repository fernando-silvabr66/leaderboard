import { postData, getAPIData } from './leaders.js';

const addLeader = (name, score) => {
  const elemArray = { user: name, score };
  postData(elemArray);
  getAPIData();
  document.querySelector('.name').value = '';
  document.querySelector('.score').value = '';
};

export default addLeader;