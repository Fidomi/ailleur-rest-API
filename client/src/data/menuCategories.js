import Image from '../assets/jessica-rockowitz-unsplash.jpg';
import Image2 from '../assets/christian-bowen-unsplash.jpg';
import Image3 from '../assets/pine-watt-unsplash.jpg';
import Logo from '../assets/family.png';
import Logo2 from '../assets/health-care.png';
import Logo3 from '../assets/environment.png';

export const menuCategories = [
    {
        id: 1,
        name: 'Cartes',
        subcategories: [
            {
                id: 1,
                name: `Vie Quotidienne`,
                url: '/cartes/family',
                imagePath: Image,
                logoPath: Logo
            },
            {
                id: 2,
                name: `Santé et Sécurité`,
                url: '/cartes/security',
                imagePath: Image2,
                logoPath: Logo2
            },
            {
                id: 3,
                name: `Environnement`,
                url: '/cartes/environment',
                imagePath: Image3,
                logoPath: Logo3
            }
        ],
        url: '/cartes'
    },
    {
        id: 2,
        name: 'Ma Destination',
        url: '/ma-destination'
    }
];
