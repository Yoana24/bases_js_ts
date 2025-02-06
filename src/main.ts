import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import './bases/01_const_let.ts'
import'./bases/02_objects.ts'
import  './bases/03_Arrays.ts'
import './bases/04_functions.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
 
  </div>
`

