# Etherum Telegram Bot

Project to get the value of Etherum through Telegram. It's a cron running that sends the Etherum value (in USA Dollars)
every 30 minutes.

## Using the Application

If you wanna use this app follow these instructions:

* In telegram search for the following bot:
`@silkhighwaybot`
* Run the following command on the bot's chat:
`/start`


## Installing your own application

### Prerequisites

* Node
* Npm


### Instructions to run the app locally

If you wanna run this application on your local:

* Create a new Bot. For doing it go to Telegram and search for:
`@BotFather`.

You should send a new message to the bot:
`newbot`.

You should follow the instructions until you get the bot api credentials.
* Create a new account on https://docs.coinapi.io/, get the api credentials
* Add the credentials on the following env variable (check on the code):
TELEGRAF_KEY
COINAPI_KEY