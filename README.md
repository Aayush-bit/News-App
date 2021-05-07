# News App

This [React](https://reactjs.org/) project is an application to show news fetched from
[News Api](https://newsapi.org/).

The following instructions will walk you through the installation, set up, and usage of the app.
Please go through carefully to avoid any confusions or blunders...

All the Best!!

## Prerequisites

Before starting the further processes one needs to know the following

- Familiarity using some VCS (like: [Git](https://git-scm.com/)), [Github](https://github.com/)
- [News Api](https://newsapi.org/) account - To make requests to the server using the api key provided after signing up

## Installation

Clone this repository onto your device.
Open root directory of this project in your terminal window and run

```bash
npm install
```

## Environment set up

This project will require you to set up some environment variables.

- Make a .env file in root directory
- Now you can simply copy and paste the following environment variables into the .env file
- If you wish to set up the values of following variables according to your needs, refer to the [Endpoints Documentation](https://newsapi.org/docs/endpoints)

Environment Variables:

```notepad
REACT_APP_APPLE_URL = https://newsapi.org/v2/everything?q=apple&sortBy=popularity&language=en&apiKey={ApiKey}
REACT_APP_TECH_CRUNCH_URL = https://newsapi.org/v2/top-headlines?sources=techcrunch&language=en&sortBy=popularity&apiKey={ApiKey}
REACT_APP_TESLA_URL = https://newsapi.org/v2/everything?q=tesla&language=en&sortBy=popularity&apiKey={ApiKey}
REACT_APP_BUSINESS_URL = https://newsapi.org/v2/top-headlines?country=us&category=business&language=en&sortBy=popularity&apiKey={ApiKey}
REACT_APP_WALLSTREET_JOURNAL_URL = https://newsapi.org/v2/everything?domains=wsj.com&language=en&sortBy=popularity&apiKey={ApiKey}
REACT_APP_GENERAL_URL = https://newsapi.org/v2/top-headlines?category=general&language=en&sortBy=popularity&apiKey={ApiKey}
```

Now here, you have to replace {ApiKey} with the api key provided by [News Api](https://newsapi.org/) to you after signing up.

## Usage

Open the root directory of this project inside your terminal window and enter the following command

```
npm start
```

This will start this application inside your browser.

## Note

- Make sure you restart the application whenever you change the environment variables, if not, then their new values won't show any effect.

Hope you enjoyed setting up and running this app :)

Bonjour!!
