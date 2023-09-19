import { getNumbersHistory } from './api'
// import Handsontable from 'handsontable/base'
// import 'handsontable/dist/handsontable.full.min.css'

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

	// J'affiche les informations de chaque numéro
	for (let i = 0; i < numberInfo.length; i++) {
		const tirageNumber = numberInfo[i].lastDraw
		const date = numberInfo[i].date
		const boule = i + 1
		dataArray.innerHTML += `<li>Numéro ${boule} : dernier tirage N°${tirageNumber}, date : ${date}</li>`
	}
	console.log('numberInfo : ', numberInfo)
	const tirageArray = numberInfo.map((element, index) => {
		return {
			boule: index + 1,
			tirage: element.lastDraw,
			date: element.date,
		}
	})
	const csvContent = numberInfo.map((element, index) => `${index + 1},${element.lastDraw},${element.date}`).join('\n')

	console.log('tirageArray :', tirageArray)

	// Je crée et j'affiche un tableau type excel avec les données
	// const hot = new Handsontable(dataArray, {
	// 	tirageArray,
	// 	colHeaders: ['Boule', 'Tirage', 'Date'],
	// 	height: 'auto',
	// 	width: 'auto',
	// 	columns: [{ tirageArray: 'boule' }, { tirageArray: 'tirage' }, { tirageArray: 'date' }],
	// 	minSpareRows: 1,
	// 	licenseKey: 'non-commercial-and-evaluation',
	// })
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
