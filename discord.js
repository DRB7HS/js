const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });

const avatars = [
    'https://i.ibb.co/6c89W288/IMG-3591.jpg',
    'https://i.ibb.co/7JHfvjV5/IMG-3596.jpg'
];
let avatarIndex = 0;

const contentList = [
    {
        type: 'آية قرآنية',
        title: 'سُورَةُ المُؤۡمِنُونَ - الآية 32',
        text: 'فَأَرْسَلْنَا فِيهِمْ رَسُولًا مِّنْهُمْ أَنِ اعْبُدُوا اللَّهَ مَا لَكُم مِّنْ إِلَهٍ غَيْرُهُ ۖ أَفَلَا تَتَّقُونَ',
        image: 'https://i.ibb.co/6c89W288/IMG-3591.jpg'
    },
    {
        type: 'ذكر مبارك',
        title: 'تذكير بالاستغفار والتسبيح',
        text: 'سُبْحَانَ اللهِ وَبِحَمْدِهِ، سُبْحَانَ اللهِ العَظِيمِ',
        image: 'https://i.ibb.co/7JHfvjV5/IMG-3596.jpg'
    },
    {
        type: 'دعاء مأثور',
        title: 'دعاء الثبات والتوفيق',
        text: 'رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي',
        image: 'https://i.ibb.co/6c89W288/IMG-3591.jpg'
    },
    {
        type: 'آية قرآنية',
        title: 'سُورَةُ البَقَرَةِ - الآية 286',
        text: 'لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا ۚ لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْ',
        image: 'https://i.ibb.co/7JHfvjV5/IMG-3596.jpg'
    }
];

client.once('ready', async () => {
    setInterval(async () => {
        try {
            avatarIndex = (avatarIndex + 1) % avatars.length;
            await client.user.setAvatar(avatars[avatarIndex]);
        } catch (error) {}
    }, 5 * 60 * 1000);

    const channelId = '1542608227399630909';
    
    setInterval(() => {
        const channel = client.channels.cache.get(channelId);
        if (!channel) return;

        const randomItem = contentList[Math.floor(Math.random() * contentList.length)];

        const embed = new EmbedBuilder()
            .setColor('#2b2d31')
            .setAuthor({ name: randomItem.title, iconURL: 'https://i.ibb.co/6c89W288/IMG-3591.jpg' })
            .setTitle(randomItem.type)
            .setDescription(randomItem.text)
            .setImage(randomItem.image)
            .setFooter({ text: 'TVX — اذگــار', iconURL: client.user.displayAvatarURL() });

        channel.send({ embeds: [embed] });
    }, 15 * 60 * 1000);
});

client.login(process.env.TOKEN);
