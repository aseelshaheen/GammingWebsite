// gamesListObject.ts
export interface Game {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
    size: string;
    description: string;
    genre: string; 
}

export class gamesListObject {
    private static instance: gamesListObject | null = null;
    public games: Game[]; 

    private constructor() {
        
        this.games = [
            {
                id: 1,
                name: 'The Witcher 3: Wild Hunt',
                imageUrl:
                    'https://cdn.cloudflare.steamstatic.com/steam/apps/292030/header.jpg',
                price: 39.99,
                size: '50 GB',
                description:
                    'An open-world RPG with a vast storyline and immersive gameplay.',
                genre: 'RPG',
            },
            {
                id: 2,
                name: 'Cyberpunk 2077',
                imageUrl:
                    'https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg',
                price: 59.99,
                size: '70 GB',
                description:
                    'A futuristic open-world RPG set in the bustling metropolis of Night City.',
                genre: 'RPG',
            },
            {
                id: 3,
                name: 'Red Dead Redemption 2',
                imageUrl:
                    'https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg',
                price: 49.99,
                size: '100 GB',
                description: 'An epic tale of life in America’s unforgiving heartland.',
                genre: 'Action-Adventure',
            },
            {
                id: 4,
                name: 'Assassin’s Creed Valhalla',
                imageUrl:
                    'https://cdn.cloudflare.steamstatic.com/steam/apps/2208920/header.jpg',
                price: 59.99,
                size: '60 GB',
                description:
                    'An open-world RPG set during the Viking invasion of England.',
                genre: 'Action-Adventure',
            },
            {
                id: 5,
                name: 'Minecraft',
                imageUrl:
                    'https://th.bing.com/th/id/R.2b70cc6e0224f7cc936a82f465a20d47?rik=l1Pgm2O1coKcuw&pid=ImgRaw&r=0',
                price: 26.95,
                size: '1 GB',
                description:
                    'A sandbox game that allows players to build and explore infinite worlds.',
                genre: 'Sandbox',
            },
            {
                id: 6,
                name: 'Grand Theft Auto V',
                imageUrl:
                    'https://cdn.cloudflare.steamstatic.com/steam/apps/271590/header.jpg',
                price: 29.99,
                size: '80 GB',
                description:
                    'An action-adventure game set in an open-world environment.',
                genre: 'Action-Adventure',
            },
            {
                id: 7,
                name: 'Call of Duty: Modern Warfare',
                imageUrl:
                    'https://cdn.cloudflare.steamstatic.com/steam/apps/2075290/header.jpg',
                price: 59.99,
                size: '150 GB',
                description: 'A first-person shooter game with a modern warfare theme.',
                genre: 'FPS',
            },
            {
                id: 8,
                name: 'Fortnite',
                imageUrl:
                    'https://cdn1.dotesports.com/wp-content/uploads/2021/03/25122024/Fortnite-feature.jpg',
                price: 0,
                size: '30 GB',
                description:
                    'A battle royale game where players fight to be the last one standing.',
                genre: 'Battle Royale',
            },
            {
                id: 9,
                name: 'FIFA 23',
                imageUrl:
                    'https://cdn.cloudflare.steamstatic.com/steam/apps/1811260/header.jpg',
                price: 49.99,
                size: '40 GB',
                description:
                    'A popular soccer simulation game with realistic graphics and gameplay.',
                genre: 'Sports',
            },
            {
                id: 10,
                name: 'League of Legends',
                imageUrl:
                    'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg',
                price: 0.0,
                size: '12 GB',
                description:
                    'A multiplayer online battle arena game with a large competitive scene.',
                genre: 'MOBA',
            },
            {
                id: 11,
                name: 'Horizon Zero Dawn',
                imageUrl:
                    'https://cdn.cloudflare.steamstatic.com/steam/apps/1151640/header.jpg',
                price: 49.99,
                size: '60 GB',
                description:
                    'An action RPG set in a post-apocalyptic world overrun by robotic creatures.',
                genre: 'Action RPG',
            },
            {
                id: 12,
                name: 'Among Us',
                imageUrl:
                    'https://cdn.cloudflare.steamstatic.com/steam/apps/945360/header.jpg',
                price: 4.99,
                size: '0.5 GB',
                description: 'A multiplayer game of teamwork and betrayal in space.',
                genre: 'Party',
            },
            {
                id: 13,
                name: 'The Legend of Zelda: Breath of the Wild',
                imageUrl:
                    'https://assets.nintendo.com/image/upload/ar_16:9,w_1200/ncom/en_US/games/switch/t/the-legend-of-zelda-breath-of-the-wild-switch/hero',
                price: 59.99,
                size: '14 GB',
                description:
                    'An open-world adventure game set in the vast kingdom of Hyrule.',
                genre: 'Adventure',
            },
            {
                id: 14,
                name: 'Animal Crossing: New Horizons',
                imageUrl:
                    'https://images.nintendolife.com/310ca1afe0dbe/animal-crossing-new-horizons.original.jpg',
                price: 59.99,
                size: '7 GB',
                description:
                    'A life simulation game where players create their own island paradise.',
                genre: 'Simulation',
            },
            {
                id: 15,
                name: 'DOOM Eternal',
                imageUrl:
                    'https://cdn.cloudflare.steamstatic.com/steam/apps/782330/header.jpg',
                price: 39.99,
                size: '50 GB',
                description:
                    'A fast-paced first-person shooter game with intense combat.',
                genre: 'FPS',
            },
            {
                id: 16,
                name: 'The Sims 4',
                imageUrl:
                    'https://th.bing.com/th/id/OIP.jpP1lJsL8opiQLgSotadZwHaEK?rs=1&pid=ImgDetMain',
                price: 19.99,
                size: '20 GB',
                description:
                    'A life simulation game that allows players to create and control people.',
                genre: 'Simulation',
            },
            {
                id: 17,
                name: 'Overwatch',
                imageUrl:
                    'https://th.bing.com/th/id/R.71766fb1eae0d2c302a93d8ec12ba1d1?rik=%2fL6UCSE%2fCcgoXA&pid=ImgRaw&r=0',
                price: 39.99,
                size: '30 GB',
                description: 'A team-based multiplayer first-person shooter game.',
                genre: 'FPS',
            },
            {
                id: 18,
                name: 'God of War',
                imageUrl:
                    'https://cdn.cloudflare.steamstatic.com/steam/apps/1593500/header.jpg',
                price: 49.99,
                size: '45 GB',
                description:
                    'An action-adventure game following the journey of Kratos and his son Atreus.',
                genre: 'Action-Adventure',
            },
            {
                id: 19,
                name: 'Fall Guys: Ultimate Knockout',
                imageUrl:
                    'https://cdn.cloudflare.steamstatic.com/steam/apps/1097150/header.jpg',
                price: 19.99,
                size: '3 GB',
                description:
                    'A massively multiplayer party game with fun and challenging obstacle courses.',
                genre: 'Party',
            },
            {
                id: 20,
                name: 'Dark Souls III',
                imageUrl:
                    'https://cdn.cloudflare.steamstatic.com/steam/apps/374320/header.jpg',
                price: 59.99,
                size: '25 GB',
                description:
                    'An action RPG known for its challenging gameplay and intricate world design.',
                genre: 'RPG',
            },
            // New Games
            {
                id: 21,
                name: 'Valorant',
                imageUrl:
                    'https://cdn.cloudflare.steamstatic.com/steam/apps/1184450/header.jpg',
                price: 0.0,
                size: '20 GB',
                description:
                    'A tactical shooter with unique characters and abilities.',
                genre: 'FPS',
            },
            {
                id: 22,
                name: 'Genshin Impact',
                imageUrl:
                    'https://cdn.cloudflare.steamstatic.com/steam/apps/1282550/header.jpg',
                price: 0.0,
                size: '30 GB',
                description:
                    'An open-world action RPG with a fantasy setting and gacha elements.',
                genre: 'RPG',
            },
            {
                id: 23,
                name: 'Rocket League',
                imageUrl:
                    'https://cdn.cloudflare.steamstatic.com/steam/apps/252950/header.jpg',
                price: 0.0,
                size: '15 GB',
                description:
                    'A game that combines soccer with rocket-powered cars.',
                genre: 'Sports',
            },
            {
                id: 24,
                name: 'Apex Legends',
                imageUrl:
                    'https://cdn.cloudflare.steamstatic.com/steam/apps/1172470/header.jpg',
                price: 0.0,
                size: '22 GB',
                description:
                    'A free-to-play battle royale game set in the Titanfall universe.',
                genre: 'Battle Royale',
            },
            {
                id: 25,
                name: 'Stardew Valley',
                imageUrl:
                    'https://cdn.cloudflare.steamstatic.com/steam/apps/413150/header.jpg',
                price: 14.99,
                size: '0.5 GB',
                description:
                    'A farming simulation game where players manage their own farm.',
                genre: 'Simulation',
            },
            {
                id: 26,
                name: 'Dead by Daylight',
                imageUrl:
                    'https://cdn.cloudflare.steamstatic.com/steam/apps/381210/header.jpg',
                price: 19.99,
                size: '15 GB',
                description:
                    'A multiplayer horror game where players try to survive against a killer.',
                genre: 'Horror',
            },
            {
                id: 27,
                name: 'Phasmophobia',
                imageUrl:
                    'https://cdn.cloudflare.steamstatic.com/steam/apps/739630/header.jpg',
                price: 13.99,
                size: '10 GB',
                description:
                    'A cooperative horror game where players investigate paranormal activities.',
                genre: 'Horror',
            },
            {
                id: 28,
                name: 'PUBG: Battlegrounds',
                imageUrl:
                    'https://cdn.cloudflare.steamstatic.com/steam/apps/578080/header.jpg',
                price: 0.0,
                size: '30 GB',
                description:
                    'A battle royale game where players fight to be the last one standing.',
                genre: 'Battle Royale',
            },
            {
                id: 29,
                name: 'Destiny 2',
                imageUrl:
                    'https://cdn.cloudflare.steamstatic.com/steam/apps/1085660/header.jpg',
                price: 0.0,
                size: '95 GB',
                description:
                    'An online-only multiplayer first-person shooter set in a mythical science fiction world.',
                genre: 'FPS',
            },
            {
                id: 30,
                name: 'The Elder Scrolls V: Skyrim',
                imageUrl:
                    'https://cdn.cloudflare.steamstatic.com/steam/apps/72850/header.jpg',
                price: 39.99,
                size: '12 GB',
                description:
                    'An open-world RPG set in the high-fantasy world of Tamriel.',
                genre: 'RPG',
            },
            {
                id: 31,
                name: 'The Binding of Isaac: Rebirth',
                imageUrl:
                    'https://cdn.cloudflare.steamstatic.com/steam/apps/250900/header.jpg',
                price: 14.99,
                size: '0.5 GB',
                description:
                    'A rogue-like dungeon crawler with randomly generated levels and permadeath.',
                genre: 'Roguelike',
            },
            {
                id: 32,
                name: 'Hades',
                imageUrl:
                    'https://cdn.cloudflare.steamstatic.com/steam/apps/1145360/header.jpg',
                price: 24.99,
                size: '15 GB',
                description:
                    'A rogue-like dungeon crawler with mythological themes and dynamic gameplay.',
                genre: 'Roguelike',
            },
            {
                id: 33,
                name: 'Path of Exile',
                imageUrl:
                    'https://cdn.cloudflare.steamstatic.com/steam/apps/238960/header.jpg',
                price: 0.0,
                size: '20 GB',
                description:
                    'A free-to-play online action RPG with deep customization and progression.',
                genre: 'RPG',
            },
            {
                id: 34,
                name: 'Subnautica',
                imageUrl:
                    'https://cdn.cloudflare.steamstatic.com/steam/apps/264710/header.jpg',
                price: 29.99,
                size: '20 GB',
                description:
                    'An open-world survival game set in an alien underwater world.',
                genre: 'Survival',
            },
            {
                id: 35,
                name: 'Terraria',
                imageUrl:
                    'https://cdn.cloudflare.steamstatic.com/steam/apps/105600/header.jpg',
                price: 9.99,
                size: '0.5 GB',
                description:
                    'A sandbox adventure game with exploration, building, and combat elements.',
                genre: 'Sandbox',
            },
            {
                id: 36,
                name: 'Warframe',
                imageUrl:
                    'https://cdn.cloudflare.steamstatic.com/steam/apps/230410/header.jpg',
                price: 0.0,
                size: '50 GB',
                description:
                    'A free-to-play cooperative third-person shooter with space ninja themes.',
                genre: 'Action',
            },
        ];
    }

    public static getInstance(): gamesListObject {
        if (this.instance === null) {
            this.instance = new gamesListObject();
        }
        return this.instance;
    }
}
