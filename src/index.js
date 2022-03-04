import { getAPIData } from '../modules/leaders.js';
import formData from '../modules/form.js';
import './style.css';

document.querySelector('.add-btn').addEventListener('click', formData);
getAPIData();
document.querySelector('#list-refresh-btn').addEventListener('click', getAPIData);