// J'importe le fichier json dans un tableau d'objets
// import csvjson from '../data/csvjson.json'

// import Papa from 'papaparse'

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

import Papa from 'papaparse'

// Je crée une fonction pour chercher les données en fonction des inputs
export function statsChecker(event: Event): void {
	// Je récupère les inputs
	const csvInput = document.querySelector('#csvInput') as HTMLInputElement

	const boule = (document.querySelector('#numberInput') as HTMLInputElement).value

	if (csvInput.files && csvInput.files.length > 0) {
		// Je crée une nouvelle instance de FileReader
		const reader = new FileReader()

		// Je définis ce qui se passe lorsque le fichier est chargé
		reader.onload = () => {
			// Je parse le contenu du fichier en JSON
			const results = Papa.parse(reader.result as string, { header: true }).data as Tirage[]

			console.log('results :', results)

			const tirage = results.find((tirage: Tirage) => Object.values(tirage).includes(Number(boule)))

			console.log('tirage :', tirage)

			// Je mets à jour l'interface utilisateur avec les données du tirage
			const resultElement = document.querySelector('.result-number') as HTMLDivElement
			if (tirage) {
				resultElement.textContent = `Date du dernier tirage : ${tirage.date_de_tirage}, Numéro du tirage : ${tirage.annee_numero_de_tirage}`
			} else {
				resultElement.textContent = 'Aucun tirage trouvé pour cette boule.'
			}
		}

		// Je lis le contenu du fichier en tant que string
		reader.readAsText(csvInput.files[0])
	} else {
		alert('Veuillez entrer un fichier valide.')
	}
}
