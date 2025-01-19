import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

// Zod
// import { z } from 'zod';
// const UserSchema = z.object({
//   id: z.number(),
//   name: z.string(),
//   email: z.string().email(),
// });

// const userData = { id: 1, name: 'John Doe', email: 'john@example.com' };
// console.log(UserSchema.parse(userData));

// Valibot
import { object, pipe, email, string, number, parse } from 'valibot';

const UserSchema = object({
  id: number(),
  name: string(),
  email: pipe(string(), email()),
});

const userData = { id: 1, name: 'John Doe', email: 'john@example.com' };
console.log(parse(UserSchema, userData));

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
