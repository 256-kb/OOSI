import type { SearchQuery } from "@/components/osint/search-form";
import type { ProfileData } from "@/components/osint/profile-result";

const firstNames = [
  "Jean", "Marie", "Pierre", "Sophie", "Lucas", "Emma", "Louis", "Lea",
  "Thomas", "Camille", "Hugo", "Chloe", "Antoine", "Manon", "Maxime", "Julie",
  "Alexandre", "Laura", "Nicolas", "Sarah", "Julien", "Alice", "Romain", "Clara",
  "Mathieu", "Charlotte", "Vincent", "Pauline", "David", "Amelie", "Kevin", "Marine",
  "Benjamin", "Audrey", "Florian", "Justine", "Quentin", "Margot", "Jeremy", "Anais",
  "Sebastien", "Oceane", "Adrien", "Laurie", "Damien", "Emilie", "Mickael", "Jessica",
  "Bastien", "Mathilde", "Yannick", "Elise", "Cedric", "Morgane", "Fabien", "Lucie",
  "Olivier", "Nathalie", "Stephane", "Aurelie", "Laurent", "Marion", "Guillaume", "Laetitia",
  "Franck", "Caroline", "Christophe", "Elodie", "Sylvain", "Delphine", "Arnaud", "Virginie",
  "Marc", "Sandrine", "Philippe", "Stephanie", "Eric", "Isabelle", "Patrick", "Valerie",
];

const lastNames = [
  "Martin", "Bernard", "Dubois", "Thomas", "Robert", "Richard", "Petit", "Durand",
  "Leroy", "Moreau", "Simon", "Laurent", "Lefebvre", "Michel", "Garcia", "David",
  "Bertrand", "Roux", "Vincent", "Fournier", "Morel", "Girard", "Andre", "Lefevre",
  "Mercier", "Dupont", "Lambert", "Bonnet", "Francois", "Martinez", "Legrand", "Garnier",
  "Faure", "Rousseau", "Blanc", "Guerin", "Muller", "Henry", "Roussel", "Nicolas",
  "Perrin", "Morin", "Mathieu", "Clement", "Gauthier", "Dumont", "Lopez", "Fontaine",
  "Chevalier", "Robin", "Masson", "Sanchez", "Gerard", "Nguyen", "Boyer", "Denis",
  "Lemaire", "Duval", "Joly", "Gautier", "Roger", "Roche", "Roy", "Noel",
  "Meyer", "Lucas", "Meunier", "Jean", "Perez", "Marchand", "Dufour", "Blanchard",
  "Marie", "Barbier", "Brun", "Dumas", "Brunet", "Schmitt", "Leroux", "Colin",
];

const cities = [
  { name: "Paris", addresses: ["45 Rue de Rivoli", "12 Avenue des Champs-Elysees", "78 Boulevard Haussmann"] },
  { name: "Lyon", addresses: ["23 Rue de la Republique", "56 Place Bellecour", "89 Quai Claude Bernard"] },
  { name: "Marseille", addresses: ["34 Rue Paradis", "67 Avenue du Prado", "12 Quai du Port"] },
  { name: "Toulouse", addresses: ["45 Place du Capitole", "23 Rue Alsace-Lorraine", "78 Boulevard Carnot"] },
  { name: "Nice", addresses: ["12 Promenade des Anglais", "34 Rue Massena", "56 Avenue Jean Medecin"] },
  { name: "Nantes", addresses: ["78 Rue Crebillon", "23 Place Royale", "45 Quai de la Fosse"] },
  { name: "Bordeaux", addresses: ["12 Place de la Bourse", "56 Rue Sainte-Catherine", "89 Quai des Chartrons"] },
  { name: "Lille", addresses: ["34 Grand Place", "67 Rue de Bethune", "23 Boulevard de la Liberte"] },
  { name: "Strasbourg", addresses: ["12 Place Kleber", "34 Rue des Grandes Arcades", "56 Quai des Bateliers"] },
  { name: "Montpellier", addresses: ["23 Place de la Comedie", "45 Rue Foch", "67 Esplanade Charles de Gaulle"] },
  { name: "Rennes", addresses: ["12 Place de la Mairie", "34 Rue Saint-Georges", "56 Quai Emile Zola"] },
  { name: "Grenoble", addresses: ["23 Place Victor Hugo", "45 Grande Rue", "67 Quai Stephane Jay"] },
  { name: "Dijon", addresses: ["12 Place de la Liberation", "34 Rue de la Liberte", "56 Boulevard de Brosses"] },
  { name: "Angers", addresses: ["23 Place du Ralliement", "45 Rue d'Alsace", "67 Boulevard Foch"] },
  { name: "Le Havre", addresses: ["12 Place de l'Hotel de Ville", "34 Rue de Paris", "56 Avenue Foch"] },
  { name: "Reims", addresses: ["23 Place Drouet d'Erlon", "45 Rue de Vesle", "67 Boulevard Lundy"] },
  { name: "Saint-Etienne", addresses: ["12 Place Jean Jaures", "34 Rue Gambetta", "56 Cours Fauriel"] },
  { name: "Toulon", addresses: ["23 Place de la Liberte", "45 Avenue de la Republique", "67 Quai Cronstadt"] },
  { name: "Clermont-Ferrand", addresses: ["12 Place de Jaude", "34 Rue Blatin", "56 Avenue des Etats-Unis"] },
  { name: "Brest", addresses: ["23 Rue de Siam", "45 Place de la Liberte", "67 Quai de la Douane"] },
];

const workplaces = {
  schools: [
    "Universite Paris-Saclay", "Sciences Po Paris", "HEC Paris", "ESSEC Business School",
    "Ecole Polytechnique", "Universite de Lyon", "Universite de Bordeaux", "EDHEC Business School",
    "Universite Paris 1 Pantheon-Sorbonne", "CentraleSupelec", "INSA Lyon", "Universite de Nantes",
    "Universite de Strasbourg", "Universite de Montpellier", "Universite de Lille", "EM Lyon",
    "Universite de Rennes", "Ecole Normale Superieure", "Mines ParisTech", "AgroParisTech",
    "IUT Paris", "Ecole 42", "Epitech", "ESCP Business School", "Universite de Grenoble",
  ],
  companies: [
    "Google France", "Microsoft France", "Apple France", "Amazon France", "Meta France",
    "Capgemini", "Atos", "Orange", "BNP Paribas", "Societe Generale", "LVMH", "L'Oreal",
    "Total Energies", "Carrefour", "Renault", "Airbus", "Thales", "Dassault Systemes",
    "Ubisoft", "Blablacar", "Doctolib", "OVH", "Criteo", "Datadog", "Ledger",
    "Sopra Steria", "Bouygues", "EDF", "Engie", "Sanofi", "Danone", "Michelin",
    "Peugeot", "Decathlon", "Auchan", "Leroy Merlin", "SNCF", "Air France", "Vinci",
  ],
};

// Sources de donnees etendues
const dataSources = [
  // Reseaux sociaux
  "LinkedIn", "Facebook", "Instagram", "Twitter/X", "TikTok", "Reddit",
  "Telegram", "GitHub", "Discord", "Pinterest", "Mastodon", "Bluesky",
  // Agregateurs / moteurs OSINT
  "Social Searcher", "IntelX", "Maltego", "WhatsMyName", "Talkwalker",
  "Shodan", "Censys", "Google Cache", "Wayback Machine",
  // Sources France
  "data.gouv.fr", "INPI", "Pappers", "Infogreffe", "SIRENE", "Registre du commerce",
  // Autres
  "Pages blanches", "Annuaire inverse", "Base emails", "Whois",
  "Registres publics", "Annuaires professionnels", "Archives publiques",
];

const tags = [
  "Etudiant", "Freelance", "Salarie", "Entrepreneur", "Retraite",
  "CDI", "CDD", "Stage", "Alternance", "Dirigeant", "Cadre", "Employe",
  "Auto-entrepreneur", "Independant", "Fonctionnaire", "Artisan", "Commercant",
];

function getRandomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

function getRandomElements<T>(array: T[], count: number): T[] {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function generatePhoneNumber(): string {
  const prefixes = ["06", "07"];
  const prefix = getRandomElement(prefixes);
  const rest = Array.from({ length: 8 }, () => Math.floor(Math.random() * 10)).join("");
  return `${prefix} ${rest.slice(0, 2)} ${rest.slice(2, 4)} ${rest.slice(4, 6)} ${rest.slice(6, 8)}`;
}

function generateBirthDate(age: number): string {
  const currentYear = new Date().getFullYear();
  const birthYear = currentYear - age;
  const month = Math.floor(Math.random() * 12) + 1;
  const day = Math.floor(Math.random() * 28) + 1;
  return `${day.toString().padStart(2, "0")}/${month.toString().padStart(2, "0")}/${birthYear}`;
}

function generateEmail(firstName: string, lastName: string): string {
  const domains = ["gmail.com", "outlook.fr", "yahoo.fr", "hotmail.fr", "orange.fr", "free.fr", "icloud.com", "protonmail.com", "laposte.net"];
  const formats = [
    `${firstName.toLowerCase()}.${lastName.toLowerCase()}`,
    `${firstName.toLowerCase()}${lastName.toLowerCase()}`,
    `${firstName.toLowerCase()}_${lastName.toLowerCase()}`,
    `${firstName[0].toLowerCase()}${lastName.toLowerCase()}`,
    `${firstName.toLowerCase()}${lastName[0].toLowerCase()}${Math.floor(Math.random() * 100)}`,
  ];
  return `${getRandomElement(formats)}@${getRandomElement(domains)}`;
}

function generateUsername(firstName: string, lastName: string): string {
  const year = Math.floor(Math.random() * 30) + 90;
  const formats = [
    `${firstName.toLowerCase()}${lastName.toLowerCase()}`,
    `${firstName.toLowerCase()}_${lastName.toLowerCase()}`,
    `${firstName.toLowerCase()}${Math.floor(Math.random() * 1000)}`,
    `${firstName.toLowerCase()}.${lastName.toLowerCase()}`,
    `${firstName.toLowerCase()}${year}`,
    `${firstName.toLowerCase()}_officiel`,
    `the.real.${firstName.toLowerCase()}`,
    `${firstName.toLowerCase()}.${lastName[0].toLowerCase()}`,
    `${lastName.toLowerCase()}.${firstName.toLowerCase()}`,
  ];
  return getRandomElement(formats);
}

// Genere un profil - certains champs peuvent etre vides (profil incomplet)
function generateMatchingProfile(query: SearchQuery, index: number, forcePartial: boolean = false): ProfileData {
  // Utilise les criteres de recherche s'ils sont fournis
  const firstName = query.firstName.trim() || getRandomElement(firstNames);
  const lastName = query.lastName.trim() || getRandomElement(lastNames);
  
  const cityData = query.city.trim()
    ? cities.find((c) => c.name.toLowerCase().includes(query.city.toLowerCase())) || { name: query.city, addresses: [`${Math.floor(Math.random() * 200)} Rue Principale`] }
    : getRandomElement(cities);

  const age = Math.floor(Math.random() * 50) + 16;
  const isStudent = age < 26 && Math.random() > 0.4;
  const workplaceType = isStudent ? "school" : "company";
  const workplace = query.workplace.trim() || getRandomElement(isStudent ? workplaces.schools : workplaces.companies);

  // Pour certains profils, on laisse des champs vides (profil incomplet)
  const isPartialProfile = forcePartial || Math.random() > 0.6;
  const partialLevel = Math.random(); // 0-1, plus c'est haut, plus c'est incomplet

  const phone = query.phone.trim() || (partialLevel > 0.7 ? undefined : generatePhoneNumber());
  const email = query.email.trim() || (partialLevel > 0.5 ? undefined : generateEmail(firstName, lastName));
  const address = partialLevel > 0.4 ? undefined : getRandomElement(cityData.addresses);

  // Reseaux sociaux - probabilites variables, certains profils n'ont rien
  const socialRandom = Math.random();
  const hasSnapchat = socialRandom > 0.3 && partialLevel < 0.8;
  const hasInstagram = socialRandom > 0.2 && partialLevel < 0.7;
  const hasTwitter = socialRandom > 0.5 && partialLevel < 0.6;
  const hasLinkedin = !isStudent && socialRandom > 0.4 && partialLevel < 0.5;
  const hasFacebook = socialRandom > 0.4 && partialLevel < 0.6;
  const hasTiktok = age < 35 && socialRandom > 0.5 && partialLevel < 0.7;
  const hasReddit = socialRandom > 0.7 && partialLevel < 0.4;
  const hasGithub = (workplaceType === "company" || Math.random() > 0.7) && socialRandom > 0.6 && partialLevel < 0.5;
  const hasDiscord = age < 40 && socialRandom > 0.6 && partialLevel < 0.6;
  const hasTelegram = socialRandom > 0.7 && partialLevel < 0.5;
  const hasPinterest = socialRandom > 0.7 && partialLevel < 0.6;
  const hasMastodon = socialRandom > 0.85 && partialLevel < 0.3;
  const hasBluesky = socialRandom > 0.8 && partialLevel < 0.4;

  // Calcul du score de confiance base sur les donnees disponibles
  let confidenceScore = 30; // Base
  if (query.firstName.trim()) confidenceScore += 15;
  if (query.lastName.trim()) confidenceScore += 15;
  if (query.city.trim()) confidenceScore += 10;
  if (query.phone.trim()) confidenceScore += 10;
  if (query.email.trim()) confidenceScore += 10;
  if (query.workplace.trim()) confidenceScore += 5;
  
  // Variation aleatoire
  confidenceScore += Math.floor(Math.random() * 15) - index * 2;
  confidenceScore = Math.max(15, Math.min(98, confidenceScore));

  // Tags
  const profileTags: string[] = [];
  if (isStudent) {
    profileTags.push("Etudiant");
    if (Math.random() > 0.5) profileTags.push(getRandomElement(["Stage", "Alternance"]));
  } else {
    profileTags.push(getRandomElement(["Salarie", "Freelance", "Entrepreneur", "Independant"]));
    if (Math.random() > 0.5) profileTags.push(getRandomElement(["CDI", "CDD", "Dirigeant", "Cadre"]));
  }

  const uniqueSeed = `${firstName}${lastName}${index}${Date.now()}${Math.random().toString(36).slice(2, 8)}`;

  // Nombre de sources trouve selon le niveau de completude
  const sourceCount = isPartialProfile ? 2 + Math.floor(Math.random() * 3) : 4 + Math.floor(Math.random() * 6);

  return {
    id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
    firstName,
    lastName,
    age,
    birthDate: partialLevel > 0.6 ? "" : generateBirthDate(age),
    city: cityData.name,
    address,
    phone,
    email,
    workplace: partialLevel > 0.5 ? undefined : workplace,
    workplaceType,
    snapchat: hasSnapchat ? generateUsername(firstName, lastName) : undefined,
    instagram: hasInstagram ? generateUsername(firstName, lastName) : undefined,
    twitter: hasTwitter ? generateUsername(firstName, lastName) : undefined,
    linkedin: hasLinkedin ? `${firstName.toLowerCase()}-${lastName.toLowerCase()}-${Math.floor(Math.random() * 100000)}` : undefined,
    facebook: hasFacebook ? `${firstName.toLowerCase()}.${lastName.toLowerCase()}` : undefined,
    tiktok: hasTiktok ? `@${generateUsername(firstName, lastName)}` : undefined,
    reddit: hasReddit ? `u/${generateUsername(firstName, lastName)}` : undefined,
    github: hasGithub ? generateUsername(firstName, lastName) : undefined,
    discord: hasDiscord ? `${firstName.toLowerCase()}#${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}` : undefined,
    telegram: hasTelegram ? `@${generateUsername(firstName, lastName)}` : undefined,
    pinterest: hasPinterest ? generateUsername(firstName, lastName) : undefined,
    mastodon: hasMastodon ? `@${generateUsername(firstName, lastName)}@mastodon.social` : undefined,
    bluesky: hasBluesky ? `${generateUsername(firstName, lastName)}.bsky.social` : undefined,
    website: Math.random() > 0.85 ? `${firstName.toLowerCase()}-${lastName.toLowerCase()}.fr` : undefined,
    avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${uniqueSeed}&backgroundColor=c0aede,d1d4f9,b6e3f4,ffd5dc`,
    confidenceScore,
    dataSources: getRandomElements(dataSources, sourceCount),
    lastUpdated: new Date().toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }),
    tags: profileTags,
  };
}

// Generate a single profile
export function generateProfile(query: SearchQuery): ProfileData {
  return generateMatchingProfile(query, 0);
}

// Generate multiple profiles - BEAUCOUP plus de resultats (25-50)
export function generateMultipleProfiles(query: SearchQuery, baseCount: number = 25): ProfileData[] {
  const hasInput = Object.values(query).some((v) => v.trim() !== "");
  
  // Si aucun critere, retourne vide
  if (!hasInput) {
    return [];
  }

  const results: ProfileData[] = [];
  
  // Nombre de resultats variable selon les criteres
  const inputCount = Object.values(query).filter((v) => v.trim() !== "").length;
  // Plus de criteres = moins de resultats mais plus precis
  // Moins de criteres = plus de resultats mais moins precis
  const count = Math.max(15, Math.min(50, baseCount + (6 - inputCount) * 8));
  
  // Premier resultat: correspondance exacte avec les criteres
  results.push(generateMatchingProfile(query, 0, false));
  
  // Quelques resultats tres similaires (memes criteres)
  for (let i = 1; i < Math.min(5, count); i++) {
    results.push(generateMatchingProfile(query, i, false));
  }
  
  // Reste: mix de profils complets et partiels
  for (let i = 5; i < count; i++) {
    const forcePartial = Math.random() > 0.5;
    results.push(generateMatchingProfile(query, i, forcePartial));
  }

  // Trier par score de confiance (plus haut en premier)
  return results.sort((a, b) => b.confidenceScore - a.confidenceScore);
}

// Export available data for suggestions
export { firstNames, lastNames, cities };
