# Managemate Frontend
## Setup
After cloning the repo, ensure that you have npm (node package manager) installed.
After that, make sure you're in "managemate" and not "managemate-frontend" and run:
```
cd managemate #only if you're in the managemate-frontend folder 
npm install
npm start
```
This will run the frontend code on localhost:3000

## Repository Structure
```
.
├── README.md
├── package-lock.json   
├── package.json
├── src/             
│   ├── styles/               #Contains all css files and image components
│   │   ├── general.css       #All css for general components used throughout the app
│   │   ├── logo.png          #Image of logo
│   ├── pages/                #Contains all files for the website's main pages
│   │   ├── about.js          #Code for the about page (includes login/register)
│   │   ├── home.js           #Code for the home page (includes bulletin board)
│   │   ├── schedule.js       #Code for the schedule page (includes roommate calendar)
│   │   ├── transaction.js    #Code for the transaction page (includes transaction history)
│   ├── App.js                #File for all routing funcionatily of the website's pages
│   ├── index.css             #css for the website's font
│   ├── index.js              
└── public/                   
```
