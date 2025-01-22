// 型定義
type User = {
  id: number;
  name: string;
};

// サンプルデータ
const validData: User = {
  id: 0,
  name: "John Doe",
};

// invalidData の型アサーション（ランタイムエラー検知を省略）
const invalidData = {
  id: "0",
  name: "Jane Doe",
} as unknown as User; // 強制的に型を一致させる

// ランダムに validData または invalidData を返す関数
const getRandomData = (): User => {
  return Math.random() > 0.5 ? validData : invalidData;
};

const randomData = getRandomData(); // <----APIから取得したものを想定

console.log(`id: ${randomData.id + 1} ユーザ名: ${randomData.name}`);
console.log('result:', randomData);