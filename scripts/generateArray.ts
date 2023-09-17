import { getNumbersHistory } from './api'

export const arrayGenerator = async () => {
	const data = await getNumbersHistory()
	const dataArray = document.querySelector('.historyArray') as HTMLDivElement

	dataArray.innerHTML = ''

	for (let i = 0; i < data.length; i++) {
		const resultsData = data[i].results
		const resultNumber = data[i].este_eid

		const resultDate = new Date(data[i].drawn_at)

		const day = resultDate.getDate().toString().padStart(2, '0')
		const month = (resultDate.getMonth() + 1).toString().padStart(2, '0') // Les mois commencent à 0 en JavaScript
		const year = resultDate.getFullYear()

		const hours = resultDate.getHours().toString().padStart(2, '0')
		const minutes = resultDate.getMinutes().toString().padStart(2, '0')

		const formattedDate = `${day}/${month}/${year} à ${hours}h${minutes}`

		// Je crée un objet pour chaque tirage
		const result = {
			date: resultDate,
			number: resultNumber,
			list: [] as number[],
		}

		for (let j = 0; j < resultsData.length; j++) {
			const tirages = resultsData[j].value
			result.list.push(tirages)
		}
		result.list.pop()
		console.log('result : ', result)
		dataArray.innerHTML += `<li>tirage N°${result.number} du : ${formattedDate} - ${result.list.join(', ')}</li>`
	}
	console.log('data : ', data)
}
