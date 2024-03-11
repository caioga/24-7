const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keep_alive = require('./keep_alive.js');

function formatTime() { //Credits to himika#0001 and never#0001
  const date = new Date();
  const options = {
    timeZone: 'America/New_York', //https://www.zeitverschiebung.net/en/ and find your city and enter here
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1155931396079104092')
    .setType('STREAMING')
    .setURL('https://www.twitch.tv/unycoz') //Must be a youtube video link 
    .setState('$2')
    .setName('287w')
    .setDetails(`爱`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://media.discordapp.net/attachments/1204871400461045790/1216569103410794557/04d141184780ea994b0476cb750c06c1.jpg?ex=6600dd45&is=65ee6845&hm=ed0c0a9c40bcd7a251738e94392aac6dc84fa905718c97f498c9ae18798d23d0&') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('🇧🇷/🇺🇸') //Text when you hover the Large image
    .setAssetsSmallImage('https://media.discordapp.net/attachments/1204871400461045790/1211171753590784101/emoji_15.png?ex=65ffaf98&is=65ed3a98&hm=df500154a76372516209cecc89f346308f48cc57f32bdbb60c751da91ba5e77e&') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('Small Text') //Text when you hover the Small image
    .addButton('ROBUX GRÁTIS', 'https://discord.gg/99dgpJWECz')
    .addButton('IPHONE╺╸MONEY GRÁTIS', 'https://discord.gg/6tGAbsJVjc');

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails =  `爱`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);