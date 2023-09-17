import { getNumbersHistory } from './api'

export const arrayGenerator = async () => {
	const data = await getNumbersHistory()
	const dataArray = document.querySelector('.historyArray') as HTMLDivElement

	dataArray.innerHTML = ''

	// Je crée un tableau pour stocker les informations de chaque numéro tiré
	const numberInfo = Array(70).fill({ lastDraw: 'non tiré', date: 'non tiré' })

	for (let i = 0; i < data.length; i++) {
		const resultsData = data[i].results
		const resultDate = new Date(data[i].drawn_at)
        

		const day = resultDate.getDate().toString().padStart(2, '0')
		const month = (resultDate.getMonth() + 1).toString().padStart(2, '0') // Les mois commencent à 0 en JavaScript
		const year = resultDate.getFullYear()
		const hours = resultDate.getHours().toString().padStart(2, '0')
		const minutes = resultDate.getMinutes().toString().padStart(2, '0')

		const formattedDate = `${day}/${month}/${year} à ${hours}h${minutes}`

		for (let j = 0; j < resultsData.length; j++) {
			const tirages = resultsData[j].value

			// Mettez à jour le tableau avec le dernier tirage et la date pour chaque numéro
			numberInfo[tirages - 1] = { lastDraw: i + 1, date: formattedDate }
		}
	}

	for (let i = 0; i < numberInfo.length; i++) {
		dataArray.innerHTML += `<li>Numéro ${i + 1} : dernier tirage N°235${numberInfo[i].lastDraw}, date : ${
			numberInfo[i].date
		}</li>`
	}
    console.log(data);
    
}
