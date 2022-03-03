import getData from '../modules/generatelist.js';
import formData from '../modules/form.js';
import './style.css';

document.querySelector('.add-btn').addEventListener('click', formData);
getData();
document.querySelector('#refresh-btn').addEventListener('click', () => window.location.reload());