const TelegramApi = require('node-telegram-bot-api');
const Config = require('config');
const Weather = require('weather-js');

const botToken = Config.get('Bot.token');
const botName = Config.get('Bot.name');

const Bot = new TelegramApi(botToken, {polling: true});

Bot.on('message', function(message) {
    const chatId = message.chat.id;

    Bot.sendMessage(chatId, );

    Weather.find({search: 'Moscow', degreeType: 'C'}, function(err, result) {
        if(err) console.log(err);
        
        console.log(JSON.stringify(result, null, 2));
    });
});
