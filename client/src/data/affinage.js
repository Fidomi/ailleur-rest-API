import Logo1 from '../assets/family.png';
import Logo2 from '../assets/health-care.png';
import Logo3 from '../assets/environment.png';
import logo_agriculture from '../assets/agriculture.png';
import logo_education from '../assets/education.png';
import logo_medicine from '../assets/medicine.png';
import logo_network from '../assets/network.png';
import logo_nuclear from '../assets/nuclear.png';
import logo_sunrise from '../assets/sunrise.png';
import logo_thief from '../assets/thief.png';
import logo_transports from '../assets/transports.png';
import logo_violence from '../assets/violence.png';

const REFINING_ELEMENTS = [
    {
        name: 'Vie Quotidienne',
        logoPath: Logo1,
        subcategories: [
            {
                category_id: 'a0',
                category_title: `Nombres d’écoles maternelles et primaires`,
                category_description: `Nombre d’écoles pour 10000 habitants : plus il y a d’écoles, plus il y a de chance qu’elles ne soient pas surchargées. `,
                category_logo: logo_education
            },
            {
                category_id: 'a1',
                category_title: `Déploiement de la fibre optique`,
                category_description: `Pourcentage des bâtiments (logements et locaux professionnels) raccordés à la fibre.`,
                category_logo: logo_transports
            },
            {
                category_id: 'a2',
                category_title: `Trajets domicile-travail`,
                category_description: `Temps médian en minutes des trajets entre le domicile et le lieu de travail.`,
                category_logo: logo_network
            }
        ]
    },
    {
        name: 'Santé et Sécurité',
        logoPath: Logo2,
        subcategories: [
            {
                category_id: 'a3',
                category_title: `Nombres de médeçins pour 10 000 habitants`,
                category_description: `Plus il y a de médeçins, plus l’accès aux soins est facilité, les rendez-vous sont plus faciles à obtenir.`,
                category_logo: logo_medicine
            },
            {
                category_id: 'a4',
                category_title: `Cambriolages`,
                category_description: `Nombre de cambriolages pour 10 000 habitants sur un an.`,
                category_logo: logo_thief
            },
            {
                category_id: 'a5',
                category_title: `Violence`,
                category_description: `Nombre d’actes de coups et blessures sur personne majeure pour 10 000 habitants.`,
                category_logo: logo_violence
            }
        ]
    },
    {
        name: 'Environnement',
        logoPath: Logo3,
        subcategories: [
            {
                category_id: 'a6',
                category_title: `Proximité avec des réacteurs nucléaires`,
                category_description: `Nombre de réacteurs nucléaires à moins de 100km du centre du département.`,
                category_logo: logo_nuclear
            },
            {
                category_id: 'a7',
                category_title: `Importance des surfaces agricoles bio`,
                category_description: `Part des surfaces agricoles certifiées bio ou en conversion.`,
                category_logo: logo_agriculture
            },
            {
                category_id: 'a8',
                category_title: `Heures d’ensoleillement`,
                category_description: `Nombre d’heures d’ensoleillement annuel.`,
                category_logo: logo_sunrise
            }
        ]
    }
];

export default REFINING_ELEMENTS;
