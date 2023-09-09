// J'importe le fichier json dans un tableau d'objets
import csvjson from '../data/csvjson.json'

interface Tirage {
	annee_numero_de_tirage: number
	date_de_tirage: string
	heure_de_tirage: string
	date_de_forclusion: string
	boule1: number
	boule2: number
	boule3: number
	boule4: number
	boule5: number
	boule6: number
	boule7: number
	boule8: number
	boule9: number
	boule10: number
	boule11: number
	boule12: number
	boule13: number
	boule14: number
	boule15: number
	boule16: number
	boule17: number
	boule18: number
	boule19: number
	boule20: number
	multiplicateur: number
	numero_jokerplus: string
	devise: string
}

// Je crée une fonction pour chercher les données en fonction des inputs
export function statsChecker(event: Event): void {
	// Je récupère les inputs
	const csv = (document.querySelector('#csvInput') as HTMLInputElement).value
	const boule = (document.querySelector('#numberInput') as HTMLInputElement).value

	const tirage = csvjson.find((tirage: Tirage) => Object.values(tirage).includes(Number(boule)))

	// Je mets à jour l'interface utilisateur avec les données du tirage
	const resultElement = document.querySelector('.result-number') as HTMLDivElement
	resultElement.textContent = ''
	if (tirage) {
		resultElement.textContent = `Date du dernier tirage : ${tirage.date_de_tirage}, Numéro du tirage : ${tirage.annee_numero_de_tirage}`
	} else {
		resultElement.textContent = 'Aucun tirage trouvé pour cette boule.'
	}
}
