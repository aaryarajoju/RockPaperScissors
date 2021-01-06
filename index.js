const Discord = require('discord.js');
const {token} = require('./config.json');
const client = new Discord.Client;

client.once('ready', () => {
    console.log("the bot is online!" + client.user.tag);
});
client.on('message', (receivedMessage) => {
    if (receivedMessage.author == client.user) return;
    else RPSCommand(receivedMessage);
})

function RPSCommand(receivedMessage){
    
    let userSelection = receivedMessage.content.toLowerCase();

    console.log(userSelection);

    if (userSelection != 'rock' && userSelection != 'paper' && userSelection != 'scissors'){
        receivedMessage.channel.send('Unknown selection' + '\n' + 
            'please use one of `Rock`, `Paper` or `Scissors`');
        return;
    }

    let botSelectionNum = Math.floor((Math.random() * 3) + 1);
    let botSelection = ' ';

    switch (botSelectionNum){
        case 1:
            botSelection = 'rock';
            break;
        
        case 2:
            botSelection = 'paper';
            break;

        case 3:
            botSelection = 'scissors';
            break;
    }

    receivedMessage.channel.send(botSelection);

    if (userSelection == 'rock'){

        if (botSelection == 'scissors'){
            receivedMessage.channel.send('Congrats! You win!');
        } else if (botSelection == 'paper'){
            receivedMessage.channel.send('You Lost. Better luck next time!');
        } else if (botSelection == 'rock'){
            receivedMessage.channel.send('It\'s a tie. Nice Play!');
        } else {
            receivedMessage.channel.send('Error!');
        }

    } else if (userSelection == 'paper'){

        if (botSelection == 'rock'){
            receivedMessage.channel.send('Congrats! You win!');
        } else if (botSelection == 'scissors'){
            receivedMessage.channel.send('You Lost. Better luck next time!');
        } else if (botSelection == 'paper'){
            receivedMessage.channel.send('It\'s a tie. Nice Play!');
        } else {
            receivedMessage.channel.send('Error!');
        }
    
    } else if (userSelection == 'scissors'){

        if (botSelection == 'paper'){
            receivedMessage.channel.send('Congrats! You win!');
        } else if (botSelection == 'rock'){
            receivedMessage.channel.send('You Lost. Better luck next time!');
        } else if (botSelection == 'scissors'){
            receivedMessage.channel.send('It\'s a tie. Nice Play!');
        } else {
            receivedMessage.channel.send('Error!');
        }

    } else {
        receivedMessage.channel.send("Error!");
    }

}

client.login(token);