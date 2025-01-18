import { z } from "zod";

// スキーマ定義
const UserSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
});

// 正しいデータ
const validData = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
};

// 間違ったデータ
const invalidData = {
  id: "1", // 数値ではなく文字列
  name: "Alice",
  email: "invalid-email",
};

console.log("=== 正しいデータの検証 ===");
try {
  const parsedData = UserSchema.parse(validData);
  console.log("検証成功:", parsedData);
} catch (err) {
  if (err instanceof z.ZodError) {
    console.error("検証失敗:", err.errors);
  } else {
    console.error("予期しないエラー:", err);
  }
}

console.log("=== 間違ったデータの検証 ===");
try {
  const parsedData = UserSchema.parse(invalidData);
  console.log("検証成功:", parsedData);
} catch (err) {
  if (err instanceof z.ZodError) {
    console.error("検証失敗:", err.errors);
  } else {
    console.error("予期しないエラー:", err);
  }
}
