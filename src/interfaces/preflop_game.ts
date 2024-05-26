// アクションの種類
export type Action = "Fold" | "Call" | "Raise" | null;

// トランプ
export interface CardObj {
  suit: string;
  num: string;
};
