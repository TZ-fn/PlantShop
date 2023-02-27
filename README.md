# PlantShop

## About

This project is an e-commerce platform for selling plants. Plants' data is fetched from the self hosted API at `/api/plants` route. Plants' pictures are fetched from the [Unsplash]('https://unsplash.com/') API.

## Usage

Users can see the products' showcase on the main page of the store. Clicking a product's card redirects to a page with product's details and gallery.

Users can register and then log in using the credentials provided earlier. Users' credentials are saved to a MongoDB database.

Products can be added to the basket or wishlist, notifications-toasts confirming the actions are also displayed.

## Live version

The live version can be found [here]('https://plant-shop-phi.vercel.app/').

## Running the project locally

Clone or download this repository.

Run `npm install` then `npm run dev` in the main directory.

Open `http://localhost:3000` to view the app in your browser.

## Technologies I used

React

Next.js

NextAuth

TypeScript

Sass

CSS-modules

Redux

Redux Toolkit

React-Toastify

MongoDB

Mongoose

Jest

React Testing Library

Bcrypt
