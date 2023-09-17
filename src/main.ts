import '../style/normalize.css'
import '../style/style.css'
import { arrayGenerator } from '../scripts/generateArray'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<main>
    <div class="container">
        <h1>KenoStats</h1> 
        <span class="result-text">Détails des 31 derniers tirages :</span>
        <ul class="historyArray"></ul>
    </div>
</main>
`


arrayGenerator()
