import {leagueID} from '$lib/utils/leagueInfo';

export const tabs = [
    {
        icon: 'home',
        label: 'Home',
        dest: '/',
    },
    {
        icon: 'article', 
        label: 'Form Submission',
        externalUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfMQ2hmhso52W2f_tiOeQUCtX9KsXpM2F5bCGAhTkYq6V7zqQ/viewform', 
    },
    {
        icon: 'article', // 
        label: 'LOH League Ledger',
        externalUrl: 'https://docs.google.com/spreadsheets/d/1WwZzN1_jnfM1en74GF-QaWMJtS7zCh9qO4YpVPALxkY/', 
    },
    {
        icon: 'sports',
        label: 'Matchups',
        dest: '/matchups',
    },
    {
        icon: 'swap_horiz',
        label: 'Trades & Waivers',
        dest: '/transactions',
    },
    {
        icon: 'article',
        label: 'Blog',
        dest: '/blog',
    },
    {
        icon: 'view_comfy',
        label: 'League Info',
        nest: true,
        children: [
            {
                icon: 'storage',
                label: 'Rosters',
                dest: '/rosters',
            },
            {
                icon: 'groups',
                label: 'Managers',
                dest: '/managers',
            },
            {
                icon: 'local_fire_department',
                label: 'Rivalry',
                dest: '/rivalry',
            },
            {
                icon: 'leaderboard',
                label: 'Standings',
                dest: '/standings',
            },
            {
                icon: 'view_comfy',
                label: 'Drafts',
                dest: '/drafts',
            },
            {
                icon: 'emoji_events',
                label: 'Trophy Room',
                dest: '/awards',
            },
            {
                icon: 'military_tech',
                label: 'Records',
                dest: '/records',
            },
            {
                icon: 'history_edu',
                label: 'LOH Bylaws',
                dest: '/constitution',
            },
            {
                icon: 'sports_football',
                label: 'Go to Sleeper',
                dest: `https://sleeper.app/leagues/${leagueID}`,
            },
        ]
    },
    {
        icon: 'lightbulb',
        label: 'Resources',
        dest: '/resources',
    },
];
