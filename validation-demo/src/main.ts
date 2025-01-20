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
// import { object, pipe, email, string, number, parse } from 'valibot';

// const UserSchema = object({
//   id: number(),
//   name: string(),
//   email: pipe(string(), email()),
// });

// const userData = { id: 1, name: 'John Doe', email: 'john@example.com' };
// console.log(parse(UserSchema, userData));


// 手動
const validateUserData = (data: unknown): { id: number; name: string; email: string } | null => {
  if (
    typeof data === 'object' &&
    data !== null &&
    typeof (data as any).id === 'number' &&
    typeof (data as any).name === 'string' &&
    typeof (data as any).email === 'string' &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test((data as any).email) // メール形式の正規表現
  ) {
    return data as { id: number; name: string; email: string };
  }
  console.error('Validation failed:', data);
  return null;
};

const validUserData = { id: 1, name: 'John Doe', email: 'john@example.com' }; // 正常なデータ
console.log('Manual Validation (Valid Data):', validateUserData(validUserData));

///////////////////////////////////////////////////////////////////////////////
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
