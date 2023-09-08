import '../style/normalize.css'
import '../style/style.css'
import statsChecker from '../scripts/stats'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<main>
        <div class="container">
            <h1>KenoStats</h1>
            <div class="stats-container">
            <div class="form-zone">
            <input type="text" class="csvInput" placeholder="entrez le csv">
            <button class="submitButton">Envoyer</button>
            </div>
            
            <div class="results">
                <span class="result-text">numéro du tirage :</span>
                <div class="result-number"></div>
            </div>
            </div>
        </div>
    </main>
`

statsChecker()
