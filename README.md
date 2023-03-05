# This is a burger-building app using React and XM's external APIs

It was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## A short description

After logging in, the user has the opportunity to click the "Make a Burger" CTA and create a custom burger by clicking on ingredients in order to add them.
The login token is stored in local storage and deleted after the user's log out action or after an unsuccessful fetch for the ingredients from the API, which would mean that the the token has expired. In both cases, the user is asked to login yet again in order to view the protected /make-a-burger route.

## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

