import { z } from "zod";

// Userスキーマ定義
const UserSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
});

// 型定義
type User = z.infer<typeof UserSchema>; // <---------- new

// 意図した型
const validData: User = {
  id: 0,
  name: "John Doe",
  email: "john.doe@example.com",
};

// 意図してない型
const invalidData = {
  id: "0", // 型が間違っている
  name: "Jane Doe",
  email: "invalid-email", // 無効なメール形式
} as unknown as User;

// ランダム
const getRandomData = () => {
  return Math.random() > 0.5 ? validData : invalidData;
};

// データを検証する関数
const validateUser = (user: User)=> {
  try {
    return UserSchema.parse(user); // <--- new スキーマで検証
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error("検証失敗:", error.errors);
    } 
    return null;
  }
};

// ランダムなデータを取得
const randomData = getRandomData() as User;
const validatedUser = validateUser(randomData);

// 後続の処理
if (validatedUser) {
  console.log(`id: ${validatedUser.id + 1} ユーザ名: ${validatedUser.name} メールアドレス: ${validatedUser.email}`);
}
console.log('result:', randomData);

