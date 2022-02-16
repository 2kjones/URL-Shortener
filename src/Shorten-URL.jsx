import { useEffect, useState } from "react"
import { Auth } from './MongoDB/Auth'
import { Form} from 'react-bootstrap'
import React from 'react-dom'
import './App.css'


function URLSubmitForm(props){

    const [url, setURL] = useState({});
    const [shortendUrl, setShortendUrl] = useState('');

    const handleChange = key => (e) => {

        const value = e.target.value;
        const urlKey = key.slice(0,4).toUpperCase();

        const newUrl = {
            url: value,
            urlKey: urlKey,
        };

        setURL(newUrl);

    }

    const createURL = (e) => {
        e.preventDefault();

        const jsonUrlDoc = JSON.stringify(url);
        
        console.log(jsonUrlDoc);

        if(url.url){
            setShortendUrl('localhost:3000/'+url.urlKey);

            fetch('https://data.mongodb-api.com/app/data-etzpa/endpoint/data/beta/action/insertOne', {
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
                    "document": jsonUrlDoc
                }})
                .then(response => response.json())
                .then(data => console.log(data));
        }
        else{
            setShortendUrl('Enter a url.');
        }

  
    }



    return (
        <Form className = "form-text" onSubmit={createURL}>
            <label> Enter Full URL: 
                <input 
                    type="text"  
                    id="full-url" 
                    name="fullURL"
                    onChange = {handleChange(Math.random().toString(36).replace('0.', ''))}
                />
            </label>
            <input type="submit" value="Create Short URL" className="shorten-button"/>
            <ShortendUrlOutput shortendURL = {shortendUrl}/>
        </Form>
    )
}

function ShortendUrlOutput(props){

    return (
        <div className = "shortend-url">
        <label>Your shortend URL:
            <textarea 
                id="shortend-url"
                value = {props.shortendURL}
                readOnly
            />
        </label>
        </div>
    )
}

export default URLSubmitForm;