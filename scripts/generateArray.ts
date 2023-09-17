import { getNumbersHistory } from './api'

export const arrayGenerator = async () => {
	const data = await getNumbersHistory()
    const dataArray = document.querySelector('.historyArray') as HTMLDivElement
    
    dataArray.innerHTML = ''

    for (let i = 0; i < data.length; i++) {
        const resultsData = data[i].results
        const resultDate = data[i].drawn_at
        const resultNumber = data[i].este_eid
        
        // Je crée un objet pour chaque tirage
        const result = {
					date: resultDate,
					number: resultNumber,
					list: [] as number[],
				}

        result.list.push(resultsData)
        console.log('result : ', result);
        dataArray.innerHTML += `<li>tirage N°${result.number} du : ${result.date} - ${result.list}</li>`
    }
	console.log('donnees : ', data)
    
}
