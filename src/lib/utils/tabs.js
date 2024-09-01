import {leagueID} from '$lib/utils/leagueInfo';

export const tabs = [
    {
        icon: 'home',
        label: 'Home',
        dest: '/',
    },
    {
        icon: 'history_edu', 
        label: 'Form Submission',
        dest: `https://forms.office.com/e/MLG0WmtwsF`, 
    },
    {
        icon: 'history_edu', 
        label: 'Ability_Item Usage Spreadsheet',
        dest: `https://docs.google.com/spreadsheets/d/1-0Ca1xyrmRYJFcS1SOaMWjOJBpbbg1K0/edit?usp=sharing&ouid=112253061774318308465&rtpof=true&sd=true`, 
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
        label: 'League of Heroes Info',
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
                label: 'League Bylaws',
                dest: '/constitution',
            },
            {
                icon: 'history_edu',
                label: 'League Ledger',
                dest: 'https://docs.google.com/spreadsheets/d/1WwZzN1_jnfM1en74GF-QaWMJtS7zCh9qO4YpVPALxkY/',
            },
            {
                icon: 'local_fire_department',
                label: 'LeagueSafe Dues',
                dest: 'https://www.leaguesafe.com/league/4098591',
            },
            {
                icon: 'sports_football',
                label: 'Go to League in Sleeper',
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
