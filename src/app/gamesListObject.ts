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
                    'https://assets-prd.ignimgs.com/2022/09/09/minecraft-1662757547503.jpg',
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
                    'https://cdn2.unrealengine.com/Fortnite%2Fhome%2Fchapter-4-season-2%2FHome-Nav_3-Desktop_273x153.jpg',
                price: 0.0, // Free-to-play game
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
                    'https://assets-prd.ignimgs.com/2022/09/09/the-legend-of-zelda-breath-of-the-wild-1662757418844.jpg',
                price: 59.99,
                size: '14 GB',
                description:
                    'An open-world adventure game set in the vast kingdom of Hyrule.',
            },
            {
                id: 14,
                name: 'Animal Crossing: New Horizons',
                imageUrl:
                    'https://assets-prd.ignimgs.com/2022/09/09/animal-crossing-new-horizons-1662757582357.jpg',
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
                    'https://assets-prd.ignimgs.com/2022/09/09/the-sims-4-1662757548702.jpg',
                price: 19.99,
                size: '20 GB',
                description:
                    'A life simulation game that allows players to create and control people.',
            },
            {
                id: 17,
                name: 'Overwatch',
                imageUrl:
                    'https://assets-prd.ignimgs.com/2022/09/09/overwatch-1662757581192.jpg',
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
