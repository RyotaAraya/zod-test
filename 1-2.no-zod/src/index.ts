// 型定義
type User = {
  id: number;
  name: string;
  email: string;
};

// サンプルデータ
const validData: User = {
  id: 1,
  name: "John Doe",
  email: "john.doe@example.com",
};

const invalidData = {
  id: "not-a-number", // 型が間違っている
  name: "Jane Doe",
  email: "invalid-email", // 無効なメール形式
} as unknown as User;

// ランダムに validData または invalidData を返す関数
const getRandomData = (): User => {
  return Math.random() > 0.5 ? validData : invalidData;
};

// データを検証する関数
const validateUser = (user: User) => {
  if (
    typeof user === "object" && user !== null &&
    typeof user.id === "number" &&
    typeof user.name === "string" &&
    typeof user.email === "string" &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test((user as any).email) // メール形式の正規表現
  ) {
    return user;
  } else {
    console.error("Validation failed");
    return null;
  }
};

const randomData = getRandomData(); // <----APIから取得したものを想定
const validatedUser = validateUser(randomData); // <------追加した部分

// 後続の処理
if (validatedUser) {
  // User型のときだけ表示する
  console.log(`id: ${validatedUser.id} ユーザ名: ${validatedUser.name} メールアドレス: ${validatedUser.email}`);
}
console.log('result:', randomData);
