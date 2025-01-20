// 型定義
type User = {
  id: number;
  name: string;
  email: string;
};

// サンプルデータ
const validData: User = {
  id: 0,
  name: "John Doe",
  email: "john.doe@example.com",
};

// invalidData の型アサーション（ランタイムエラー検知を省略）
const invalidData = {
  id: "0",
  name: "Jane Doe",
  email: "invalid-email",
} as unknown as User; // 強制的に型を一致させる

// ランダムに validData または invalidData を返す関数
const getRandomData = (): User => {
  return Math.random() > 0.5 ? validData : invalidData;
};

// データをそのまま出力
const randomData = getRandomData();

if (typeof randomData.id === 'number') {
  console.log('意図したデータです：', randomData);
}
else {
  console.log('意図してないデータを取得しました', randomData); 
}

console.log(`id: ${randomData.id + 1} ユーザ名: ${randomData.name} メールアドレス: ${randomData.email}`);
