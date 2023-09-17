export const getNumbersHistory = async () => {
    try {
        const apiResponse = await fetch(
					'https://www.fdj.fr/api/service-draws/v1/games/keno/draws?include=results&drawn_at='
				)
        const data = await apiResponse.json()
        
        return data
    } catch (error) {
        console.log(error)
    }
}

