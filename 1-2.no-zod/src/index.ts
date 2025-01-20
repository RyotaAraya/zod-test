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
};

// ランダムに validData または invalidData を返す関数
const getRandomData = () => {
  return Math.random() > 0.5 ? validData : invalidData;
};

// データを検証する関数
const validateUser = (data: User) => {
  if (
    typeof data === "object" &&
    data !== null &&
    typeof (data as any).id === "number" &&
    typeof (data as any).name === "string" &&
    typeof (data as any).email === "string" &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test((data as any).email) // メール形式の正規表現
  ) {
    return data;
  } else {
    console.error("Validation failed:", data);
    return null;
  }
};

// ランダムなデータを取得
const randomData = getRandomData() as User;
const validatedUser = validateUser(randomData);

// 後続の処理
if (validatedUser) {
  console.log('意図したデータです：', randomData);
  console.log(`id: ${validatedUser.id} ユーザ名: ${validatedUser.name} メールアドレス: ${validatedUser.email}`);
} else {
  console.log("ユーザ取得に失敗しました。");
}
