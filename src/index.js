import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
require('dotenv').config();
const API_KEY = '7e29319333f364916bc9a4617776efd0';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

const baseURL = 'https://api.themoviedb.org/3/';

function getConfig(){
	let url = `${baseURL}configuration?api_key=${process.env.API_KEY||API_KEY}`
	fetch(url)
	.then((result) => {
		return result.json();
	})
	.then((data) => {
		// baseImageURL = data.images.secure_base_url;
		configData = data.images;
		console.log('config', data);
		console.log('config fetched');
		runSearch('jaws');
	})
	.catch(function(err){
		alert(err);
	})
}

function runSearch(keyword){
	let url = `${baseURL}search/movie?api_key=${process.env.API_KEY||API_KEY}&query=${keyword}`;
	fetch(url)
	.then(result => result.json())
	.then((data) => {
		console.log(data);
	})
}
getConfig();
