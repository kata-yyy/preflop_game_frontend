// アクションの種類
export type Action = "Fold" | "Call" | "Raise" | null;

// トランプ
export interface CardObj {
  suit: string;
  num: string;
};

// 出題するハンドと正しいアクションの組み合わせ
export interface Question {
  hand: CardObj[];
  correct_action: Action;
};

// プリフロップハンド表
export interface HandTable {
  [key: string]: Action;
};