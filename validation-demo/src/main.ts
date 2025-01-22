import './style.css'

let validationType;
// Zod
import { z } from 'zod';
const UserSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
});
validationType = 'Zod'

const userData = { id: 1, name: 'John Doe', email: 'john@example.com' };
console.log(UserSchema.parse(userData));

// Valibot
// import { object, pipe, email, string, number, parse } from 'valibot';
// validationType = 'Valibot'
// const UserSchema = object({
//   id: number(),
//   name: string(),
//   email: pipe(string(), email()),
// });

// const userData = { id: 1, name: 'John Doe', email: 'john@example.com' };
// console.log(parse(UserSchema, userData));


// 手動
// const validateUserData = (data: unknown): { id: number; name: string; email: string } | null => {
//   validationType = '手動'
//   if (
//     typeof data === 'object' &&
//     data !== null &&
//     typeof (data as any).id === 'number' &&
//     typeof (data as any).name === 'string' &&
//     typeof (data as any).email === 'string' &&
//     /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test((data as any).email) // メール形式の正規表現
//   ) {
//     return data as { id: number; name: string; email: string };
//   }
//   console.error('Validation failed:', data);
//   return null;
// };

// const validUserData = { id: 1, name: 'John Doe', email: 'john@example.com' };
// console.log('Manual Validation (Valid Data):', validateUserData(validUserData));

///////////////////////////////////////////////////////////////////////////////
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>${validationType}</h1>
    <h1>Vite + TypeScript</h1>
  </div>
`
