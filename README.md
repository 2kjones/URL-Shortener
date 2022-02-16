I updated the fetch requests to now use the Data API after confirming successful requests using it on Postman ( Due to the fact Postman does not have to go through CORS )

![findOne](https://user-images.githubusercontent.com/97141955/148445026-52aee80b-e9e4-4692-bd2c-940eca6839b6.PNG)

![insertOne](https://user-images.githubusercontent.com/97141955/148445028-a3b8b690-cc11-4761-8460-55189ff36cd6.PNG)

![headers-issue](https://user-images.githubusercontent.com/97141955/148445083-e9b86a0c-c409-4d01-8683-219ee2e0ecac.jpg)

Note : To bypass potential CORS Access-Control-Allow-Origin issue, install Moesif Origin & CORS Changer extension into browser. 

Issue : Getting an error when attempting to execute fetch POST requests to HTTP Endpoints that I set up on the MongoDB Realm Application to execute database functions. Here's a log of the error: 

![44FE3D12-3CED-41FA-A40C-0E79A2DD64FE_4_5005_c](https://user-images.githubusercontent.com/97141955/148156046-aafd8156-d331-4a7d-8480-ed5d67a48187.jpeg)

Here's a screenshot of the request:

![686AEB4F-4296-4E28-9A20-DC1DC4BCA573_4_5005_c](https://user-images.githubusercontent.com/97141955/148156203-71cae94b-d696-4699-bee2-9d7cc680a478.jpeg)

The Realm Application is downloaded ( Url-Shortener-App ), so the HTTP endpoint functions are able to be viewed.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
