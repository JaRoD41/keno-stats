// J'importe le fichier json dans un tableau d'objets

import csvjson from '../data/csvjson.json'

export default function statsChecker() {
	const tirage: number = 2023492
	const csv = csvjson.find(({ annee_numero_de_tirage }) => annee_numero_de_tirage === tirage)
	console.log(csv)
}
