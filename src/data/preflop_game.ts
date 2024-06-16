import { HandTable } from "interfaces/preflop_game";

// "T"を"10"に変換するため
export const card_num: {[key: string]: string} = {
  "A": "A",
  "2": "2",
  "3": "3",
  "4": "4",
  "5": "5",
  "6": "6",
  "7": "7",
  "8": "8",
  "9": "9",
  "T": "10",
  "J": "J",
  "Q": "Q",
  "K": "K",
} as const;

// スートを記号に変換
export const card_suit: {[key: string]: string} = {
  "Heart": "♥️",
  "Diamond": "♦️",
  "Club": "♣️",
  "Spade": "♠️",
} as const;

export const suited_nums: string[] = [
  "AK", "AQ", "AJ", "AT", "A9", "A8", "A7", "A6", "A5", "A4", "A3", "A2",
  "KQ", "KJ", "KT", "K9", "K8", "K7", "K6", "K5", "K4", "K3", "K2",
  "QJ", "QT", "Q9", "Q8", "Q7", "Q6", "Q5", "Q4", "Q3", "Q2",
  "JT", "J9", "J8", "J7", "J6", "J5", "J4", "J3", "J2",
  "T9", "T8", "T7", "T6", "T5", "T4", "T3", "T2",
  "98", "97", "96", "95", "94", "93", "92",
  "87", "86", "85", "84", "83", "82", 
  "76", "75", "74", "73", "72",
  "65", "64", "63", "62",
  "54", "54", "53",
  "43", "42",
  "32",
];

export const off_suited_nums: string[] = [
  "AK", "AQ", "AJ", "AT", "A9", "A8", "A7", "A6", "A5", "A4", "A3", "A2",
  "KQ", "KJ", "KT", "K9", "K8", "K7", "K6", "K5", "K4", "K3", "K2",
  "QJ", "QT", "Q9", "Q8", "Q7", "Q6", "Q5", "Q4", "Q3", "Q2",
  "JT", "J9", "J8", "J7", "J6", "J5", "J4", "J3", "J2",
  "T9", "T8", "T7", "T6", "T5", "T4", "T3", "T2",
  "98", "97", "96", "95", "94", "93", "92",
  "87", "86", "85", "84", "83", "82", 
  "76", "75", "74", "73", "72",
  "65", "64", "63", "62",
  "54", "54", "53",
  "43", "42",
  "32",
];

export const pair_nums: string[] = [
  "AA", "KK", "QQ", "TT", "99", "88", "77", "66", "55", "44", "33", "22",
];

// スーテッドハンドのスートの組み合わせ
export const suited_suits: string[][] = [
  ["Heart", "Heart"], ["Diamond", "Diamond"], ["Club", "Club"], ["Spade", "Spade"],
];

// オフスーテッドハンドのスートの組み合わせ
export const off_suited_suits: string[][] = [
  ["Heart", "Diamond"], ["Heart", "Club"],    ["Heart", "Spade"],
  ["Diamond", "Heart"], ["Diamond", "Club"],  ["Diamond", "Spade"],
  ["Club", "Heart"],    ["Club", "Diamond"],  ["Club", "Spade"],
  ["Spade", "Heart"],   ["Spade", "Diamond"], ["Spade", "Club"],
];

export const preflop_hand_table: HandTable = {
  "AA": "Raise", "KK": "Raise", "QQ": "Raise", "JJ": "Raise", "TT": "Raise", "99": "Raise", "88": "Raise",
  "77": "Raise", "66": "Raise", "55": "Raise", "44": "Raise", "33": "Raise", "22": "Fold",
  "AKs": "Raise", "AQs": "Raise", "AJs": "Raise", "ATs": "Raise", "A9s": "Raise", "A8s": "Raise",
  "A7s": "Raise", "A6s": "Raise", "A5s": "Raise", "A4s": "Raise", "A3s": "Raise", "A2s": "Raise",
  "KQs": "Raise", "KJs": "Raise", "KTs": "Raise", "K9s": "Raise", "K8s": "Raise", "K7s": "Raise",
  "K6s": "Raise", "K5s": "Raise", "K4s": "Raise", "K3s": "Raise", "K2s": "Raise",
  "QJs": "Raise", "QTs": "Raise", "Q9s": "Raise", "Q8s": "Raise", "Q7s": "Raise", "Q6s": "Raise",
  "Q5s": "Fold", "Q4s": "Fold", "Q3s": "Fold", "Q2s": "Fold",
  "JTs": "Raise", "J9s": "Raise", "J8s": "Raise", "J7s": "Raise",
  "J6s": "Fold", "J5s": "Fold", "J4s": "Fold", "J3s": "Fold", "J2s": "Fold",
  "T9s": "Raise", "T8s": "Raise", "T7s": "Raise",
  "T6s": "Fold", "T5s": "Fold", "T4s": "Fold", "T3s": "Fold", "T2s": "Fold",
  "98s": "Raise", "97s": "Raise", "96s": "Fold", "95s": "Fold", "94s": "Fold", "93s": "Fold", "92s": "Fold",
  "87s": "Raise", "86s": "Raise", "85s": "Fold", "84s": "Fold", "83s": "Fold", "82s": "Fold",
  "76s": "Raise", "75s": "Fold", "74s": "Fold", "73s": "Fold", "72s": "Fold",
  "65s": "Raise", "64s": "Fold", "63s": "Fold", "62s": "Fold",
  "54s": "Raise", "53s": "Fold", "52s": "Fold", "43s": "Fold", "42s": "Fold", "32s": "Fold",
  "AKo": "Raise", "AQo": "Raise", "AJo": "Raise", "ATo": "Raise", "A9o": "Raise", "A8o": "Raise",
  "A7o": "Raise", "A6o": "Raise", "A5o": "Raise", "A4o": "Raise", "A3o": "Fold", "A2o": "Fold",
  "KQo": "Raise", "KJo": "Raise", "KTo": "Raise", "K9o": "Raise", "K8o": "Fold", "K7o": "Fold",
  "K6o": "Fold", "K5o": "Fold", "K4o": "Fold", "K3o": "Fold", "K2o": "Fold",
  "QJo": "Raise", "QTo": "Raise", "Q9o": "Raise", "Q8o": "Fold", "Q7o": "Fold", "Q6o": "Fold",
  "Q5o": "Fold", "Q4o": "Fold", "Q3o": "Fold", "Q2o": "Fold",
  "JTo": "Raise", "J9o": "Raise", "J8o": "Fold", "J7o": "Fold",
  "J6o": "Fold", "J5o": "Fold", "J4o": "Fold", "J3o": "Fold", "J2o": "Fold",
  "T9o": "Raise", "T8o": "Fold", "T7o": "Fold",
  "T6o": "Fold", "T5o": "Fold", "T4o": "Fold", "T3o": "Fold", "T2o": "Fold",
  "98o": "Fold", "97o": "Fold", "96o": "Fold", "95o": "Fold", "94o": "Fold", "93o": "Fold", "92o": "Fold",
  "87o": "Fold", "86o": "Fold", "85o": "Fold", "84o": "Fold", "83o": "Fold", "82o": "Fold",
  "76o": "Fold", "75o": "Fold", "74o": "Fold", "73o": "Fold", "72o": "Fold",
  "65o": "Fold", "64o": "Fold", "63o": "Fold", "62o": "Fold",
  "54o": "Fold", "53o": "Fold", "52o": "Fold", "43o": "Fold", "42o": "Fold", "32o": "Fold",
};

export const hand_table_cells: string[][] = [
  ["AA", "AKs", "AQs", "AJs", "ATs", "A9s", "A8s", "A7s", "A6s", "A5s", "A4s", "A3s", "A2s"],
  ["AKo", "KK", "KQs", "KJs", "KTs", "K9s", "K8s", "K7s", "K6s", "K5s", "K4s", "K3s", "K2s"],
  ["AQo", "KQo", "QQ", "QJs", "QTs", "Q9s", "Q8s", "Q7s", "Q6s", "Q5s", "Q4s", "Q3s", "Q2s"],
  ["AJo", "KJo", "QJo", "JJ", "JTs", "J9s", "J8s", "J7s", "J6s", "J5s", "J4s", "J3s", "J2s"],
  ["ATo", "KTo", "QTo", "JTo", "TT", "T9s", "T8s", "T7s", "T6s", "T5s", "T4s", "T3s", "T2s"],
  ["A9o", "K9o", "Q9o", "J9o", "T9o", "99", "98s", "97s", "96s", "95s", "94s", "93s", "92s"],
  ["A8o", "K8o", "Q8o", "J8o", "T8o", "98o", "88", "87s", "86s", "85s", "84s", "83s", "82s"],
  ["A7o", "K7o", "Q7o", "J7o", "T7o", "97o", "87o", "77", "76s", "75s", "74s", "73s", "72s"],
  ["A6o", "K6o", "Q6o", "J6o", "T6o", "96o", "86o", "76o", "66", "65s", "64s", "63s", "62s"],
  ["A5o", "K5o", "Q5o", "J5o", "T5o", "95o", "85o", "75o", "65o", "55", "54s", "53s", "52s"],
  ["A4o", "K4o", "Q4o", "J4o", "T4o", "94o", "84o", "74o", "64o", "54o", "44", "43s", "42s"],
  ["A3o", "K3o", "Q3o", "J3o", "T3o", "93o", "83o", "73o", "63o", "53o", "43o", "33", "32s"],
  ["A2o", "K2o", "Q2o", "J2o", "T2o", "92o", "82o", "72o", "62o", "52o", "42o", "32o", "22"],
];
