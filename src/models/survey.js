const survey = [
    {
        question: "Situation familiale",
        answers: [
            "Seul sans enfant à charge",
            "En couple avec enfant(s) à charge",
            "En couple sans enfant",
        ],
    },
    {
        question: "tranche d'âge",
        answers: ["18-25 ans", "25-45 ans", "45-65 ans", "plus de 65 ans"],
    },
    {
        question: "part du télétravail dans votre activité",
        answers: [
            "Aucune",
            "1 à 2 jours par semaine",
            "3 jours et plus par semaine",
        ],
    },
    {
        question: "Craignez-vous d'être cambriolé?",
        answers: [
            "non, je n`y pense jamais",
            "crainte modérée",
            "sécuriser mon habitation est une de mes priorités",
        ],
    },
    {
        question:
            "Combien de kilomètres êtes-vous prêt à parcourir pour aller voir votre généraliste?",
        answers: [
            "jusqu'à 3km",
            "jusqu'a 10 km",
            "jusqu'a 25 km",
            "jusqu'a 50 km",
        ],
    },
    {
        question:
            "Est-ce que le nombre d'agressions sur un territoire est un critère important pour vous?",
        answers: [
            "non, je n'y pense jamais",
            "c'est un critère à prendre en compte",
            "c'est un critère primordial",
        ],
    },
    {
        question: "Quelle est la part du bio dans votre alimentation?",
        answers: [
            "quelques produits, disons moins de 10% de mon alimentation",
            "je consomme régulièrement bio, disons environ 50% de mon alimentation",
            "j'achète bio autant que possible, disons 80% de mon alimentation",
            "je ne consomme un aliment que s'il est bio, quasi-100% de mon alimentation",
        ],
    },
    {
        question: "Supportez-vous la chaleur?",
        answers: [
            "je crains la chaleur et préfère la fraîcheur",
            "j'ai peur de la canicule et préfère quand il fait moins de 30 degrés",
            "je supporte bien la chaleur et adore le climat méditerrannéen",
        ],
    },
    {
        question:
            "A quelle distance d'une centrale nucléaire seriez-vous prêt à vous installer?",
        answers: ["dès 0 km", "à plus de 50 km", "à plus de 100 km"],
    },
    // {
    //     question: "La pluie vous déprime-t-elle?",
    //     answers: [
    //         "je ne suis pas en sucre, la pluie n'a jamais été un problème pour moi",
    //         "il faut bien qu'il pleuve un peu de temps en temps, mais pas trop non plus",
    //         "je déteste les jours de pluie",
    //     ],
    // },
];

module.exports = survey;
