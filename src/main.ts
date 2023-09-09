import '../style/normalize.css'
import '../style/style.css'
import { statsChecker } from '../scripts/stats'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<main>
        <div class="container">
            <h1>KenoStats</h1>
            <div class="form-container">
            <div class="form-zone">
            <input type="file" id="csvInput" placeholder="Entrez le csv">
            </div>
            <div class="form-zone">
            <input type="search" id="numberInput" placeholder="Entrez la boule">
            <button class="submitNumber">Envoyer</button>
            </div>
            </div>
            <div class="results">
                <span class="result-text">Détails du tirage :</span>
                <div class="result-number"></div>
            
            </div>
        </div>
    </main>
`

document.querySelector('.submitNumber')!.addEventListener('click', statsChecker)
