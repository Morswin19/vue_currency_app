# PIOTR KALMAN - Currencies Vue App

## General Info

> Hello, Currencies Vue App is a simple application showing your favorite currencies fetching from the NBP api with actual rate (max one day delay). The application uses local memory and thus remembers the list of your favorite currencies

## Table of contents

- [General info](#general-info)
- [Technologies](#technologies)
- [Sections](#sections)
- [Instruction to tun](#instruction-to-run)
- [Instruction to use](#instruction-to-use)
- [Where to watch](#where-to-watch)
- [Contact](#contact)

## Technologies

    HTML5
    CSS3
    vue 2.6.11
    vuex 3.6.0
    eslint 6.7.2
    prettier 3.20.0
    node-sass 5.0.0
    web browser local storage

## Sections

##### Header

- simple header with rates date

##### Currencies Form

- selecting option input
- currency submit button

##### Currencies List

- list of your favourite currencies
- each currency item has a button, to remove it from the list
- button to remove all currencies from the list

##### Footer

- copyrights and github link to view the code

## Instruction to run

To run this application after cloning or downloading, make these steps:

- yarn install (be sure that you are in the main project folder with package.json file)
- yarn serve

## Instruction to use

If you use this application for the first time, you will have in your list 3 popular currencies. Every add or remove currency will change the local storage.
When you reload:

- if you change anything - app shows data from local storage
- if you don't change - app will shows 3 popular currencies again
- if you remove all currencies - app will also shows 3 popular currencies again. I assume, that you have at least one favourite currency :)
- Have fun :)

## Where to watch

To watch this site, please visit: https://vuecurrencyapp.netlify.app/

## Mockup

<img src="https://raw.githubusercontent.com/Morswin19/vue_currency_app/main/src/assets/sitescreen.png">

## Contact

Feel free to contact me: piotr.kalman85@gmail.com
