import repos from './repos.js';
const user = 'krzysztof-kozak';
const API = `https://api.github.com/users/${user}/repos`;
const list = document.querySelector('.list');

/*--- copy json response and use locally to go around rate limiting ---*/

/* 
--------------------------------------

fetch(API)
  .then((response) => response.json())
  .then((data) => console.log(data)); 
  
 -------------------------------------- 
 */

repos.forEach((repo) => {
  const { name, html_url } = repo;

  const listItem = document.createElement('li');
  listItem.classList.add('list__item');
  listItem.innerHTML = `${name}: <a class="link" href=${html_url} rel="noopener" target="_blank">${html_url}</a>`;
  list.appendChild(listItem);
});
