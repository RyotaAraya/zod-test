import { z } from "zod";

// Userスキーマ定義
const UserSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
});

// 型定義
type User = z.infer<typeof UserSchema>;

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
};

// ランダム
const getRandomData = () => {
  return Math.random() > 0.5 ? validData : invalidData;
};

// データを検証する関数
const validateUser = (user: User)=> {
  try {
    return UserSchema.parse(user); // スキーマで検証
  } catch (error) {
    console.error("Validation failed:", error);
    return null;
  }
};

// ランダムなデータを取得
const randomData = getRandomData() as User;
const validatedUser = validateUser(randomData);

console.log("Result:", validatedUser);
console.log("-----------------------------------");

// 後続の処理
if (validatedUser) {
  console.log(`id: ${validatedUser.id + 1} ユーザ名: ${validatedUser.name} メールアドレス: ${validatedUser.email}`);
} else {
  console.log("ユーザ取得に失敗しました。");
}
