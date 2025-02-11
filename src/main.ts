import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import './bases/01_const_let.ts'
import'./bases/02_objects.ts'
import  './bases/03_Arrays.ts'
import './bases/04_functions.ts'
import './bases/05_des_obj.ts'
import './bases/06_des_arrays.ts'
import './Data/Personas.ts'
import './bases/08_promesas.ts'

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

