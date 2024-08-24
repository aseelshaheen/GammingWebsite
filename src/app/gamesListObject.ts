// gamesListObject.ts
export interface Game {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
    size: string;
    description: string;
}

export class gamesListObject {
    private static instance: gamesListObject | null = null;
    public games: Game[]; // Array to hold game information

    private constructor() {
        // Initialize with an array of games
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
            },
            {
                id: 3,
                name: 'Red Dead Redemption 2',
                imageUrl:
                    'https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg',
                price: 49.99,
                size: '100 GB',
                description: 'An epic tale of life in America’s unforgiving heartland.',
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
            },
            {
                id: 7,
                name: 'Call of Duty: Modern Warfare',
                imageUrl:
                    'https://cdn.cloudflare.steamstatic.com/steam/apps/2075290/header.jpg',
                price: 59.99,
                size: '150 GB',
                description: 'A first-person shooter game with a modern warfare theme.',
            },
            {
                id: 8,
                name: 'Fortnite',
                imageUrl:
                    'https://cdn1.dotesports.com/wp-content/uploads/2021/03/25122024/Fortnite-feature.jpg',
                price: 5.0, // Free-to-play game
                size: '30 GB',
                description:
                    'A battle royale game where players fight to be the last one standing.',
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
            },
            {
                id: 10,
                name: 'League of Legends',
                imageUrl:
                    'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg',
                price: 0.0, // Free-to-play game
                size: '12 GB',
                description:
                    'A multiplayer online battle arena game with a large competitive scene.',
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
            },
            {
                id: 12,
                name: 'Among Us',
                imageUrl:
                    'https://cdn.cloudflare.steamstatic.com/steam/apps/945360/header.jpg',
                price: 4.99,
                size: '0.5 GB',
                description: 'A multiplayer game of teamwork and betrayal in space.',
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
            },
            {
                id: 17,
                name: 'Overwatch',
                imageUrl:
                    'https://th.bing.com/th/id/R.71766fb1eae0d2c302a93d8ec12ba1d1?rik=%2fL6UCSE%2fCcgoXA&pid=ImgRaw&r=0',
                price: 39.99,
                size: '30 GB',
                description: 'A team-based multiplayer first-person shooter game.',
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
            },
        ];
    }

    // Static method to get the instance of the singleton
    public static getInstance(): gamesListObject {
        if (this.instance === null) {
            this.instance = new gamesListObject();
        }
        return this.instance;
    }

    // Additional methods to manipulate games data can be added here
}
