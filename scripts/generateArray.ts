import { getNumbersHistory } from './api'

export const arrayGenerator = async () => {
	const data = await getNumbersHistory()
	console.log('data :', data)

	const dataArray = document.querySelector('.historyArray') as HTMLDivElement
	const csvLink = document.querySelector('.stats-csv') as HTMLDivElement

	dataArray.innerHTML = ''

	// Je crée un tableau pour stocker les informations de chaque numéro tiré
	const numberInfo = Array(70).fill({ lastDraw: 'non tiré', date: 'non tiré' })

	for (let i = 0; i < data.length; i++) {
		const resultsData = data[i].results
		const resultDate = new Date(data[i].drawn_at)
		const formattedDate = resultDate.toLocaleDateString('fr-FR')
		const resultNumber = data[i].este_eid

		for (let j = 0; j < resultsData.length - 1; j++) {
			const tirages = resultsData[j].value

			// Je mets à jour le tableau avec le dernier tirage et la date pour chaque numéro
			if (numberInfo[tirages - 1].lastDraw === 'non tiré') {
				numberInfo[tirages - 1] = { lastDraw: resultNumber, date: formattedDate }
			}
		}
	}

	for (let i = 0; i < numberInfo.length; i++) {
		dataArray.innerHTML += `<li>Numéro ${i + 1} : dernier tirage N°${numberInfo[i].lastDraw}, date : ${
			numberInfo[i].date
		}</li>`
	}
	console.log('numberInfo : ', numberInfo)
	const csvContent = numberInfo.map((element, index) => `${index + 1},${element.lastDraw},${element.date}`).join('\n')

	// Je crée un blob à partir du contenu CSV
	const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })

	// Créez une URL pour le blob
	const url = URL.createObjectURL(blob)

	// Je crée un lien pour télécharger le fichier CSV
	const link = document.createElement('a')
	link.href = url
	link.download = 'resultats.csv'
	link.textContent = 'Télécharger les résultats'

	// Ajoutez le lien à votre page
	csvLink.appendChild(link)
}
