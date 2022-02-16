import React from 'react-dom';
import { useEffect, useState } from 'react';
import { Auth } from './MongoDB/Auth';
import URLSubmitForm from './Shorten-URL';
import './App.css';


function App() {

  const [url , setUrl] = useState('');

  useEffect(() => {

    setUrl(window.location.href);

    if(url.includes('localhost:3000')){
      if(url.slice(url.lastIndexOf('/')+1) !== ''){
         navigateToPage(url.slice(url.lastIndexOf('/')+1));
      }
    }
    
  },[url])
  // runs on page load. Reads current URL, 
  // if URL is a short URL: if the key matches any stored in the db , app will redirect to the full URL.
  // if URL is not a short URL : key is read, but the page will not redirect and the web app will be displayed.


  const navigateToPage = (key) => {

    let navUrl;

    fetch('https://data.mongodb-api.com/app/data-etzpa/endpoint/data/beta/action/findOne', {
      method: 'POST',
      headers:{
          "Access-Control-Request-Headers":"*",
          "Access-Control-Allow-Headers":["Content-Type","api-key","Access-Control-Allow-Origin"],
          "Access-Control-Allow-Origin":"http://localhost:3000",
          "api-key": Auth.api_key
      } ,
      body: {
          "collection":"url-collection",
          "database":"url-shortener-db",
          "dataSource":"URL-Shortener",
          "projection": {"url" : 1},
          "query": { "urlKey": {"$eq": key}}
      }})
      .then(response => response.json())
      .then(data => navUrl = data.document.url);


    if(navUrl){
         window.location.href = navUrl;
    }
    else{
      console.log("No URL for this shortend one");
    }

  }


  return (
    <div id="url-shortener-app" className="url-shortener-app">
      <header className = "header">
          <h1 className = "header-text">URL Shortener</h1>
      </header>
      <div className = "body">
          <div className = "url-form">
            <URLSubmitForm currentUrl = {url}/>
          </div>
      </div>
      <footer className = "footer">
          <p>Author: Kyle Jones</p>
          <p>Email: KyJones009@gmail.com</p>
      </footer>
    </div>
  );
}

export default App;