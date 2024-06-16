import React, { useState } from 'react';
import 'stylesheets/Mypage.css';
import { Action } from 'interfaces/preflop_game';
import { hand_table_cells } from 'data/preflop_game';
import { preflop_hand_table } from 'data/preflop_game';
import { HandTable } from 'interfaces/preflop_game';

const Mypage: React.FC = () => {
  const rows: string[] = ["A", "K", "Q", "J", "T", "9", "8", "7", "6", "5", "4", "3", "2"];
  const columns: string[] = ["A", "K", "Q", "J", "T", "9", "8", "7", "6", "5", "4", "3", "2"];

  // レンジ表のアクションを初期化
  const initialGrid = (): Action[][] => {
    const hand_table: Action[][] = Array.from({ length: 13 }, () => Array(13).fill("Call"));
    for (let i = 0; i < 13; i++) {
      for (let j = 0; j < 13; j++) {
        hand_table[i][j] = preflop_hand_table[hand_table_cells[i][j]]
      }
    }
    return hand_table;
  };

  // レンジ表のアクションを管理するための配列
  const [grid, setGrid] = useState<Action[][]>(initialGrid());

  // 次の文字を取得する関数
  const getNextAction = (current_action: Action): Action => {
    const actions: Action[] = ["Call", "Raise", "Fold"];
    const current_index: number = actions.indexOf(current_action);
    return actions[(current_index + 1) % actions.length];
  };

  // マスがクリックされたときのイベントハンドラ
  const handleCellClick = (rowIndex: number, colIndex: number) => {
    const newGrid = grid.map((row, rIdx) =>
      row.map((cell, cIdx) => {
        if (rIdx === rowIndex && cIdx === colIndex) {
          return getNextAction(cell);
        }
        return cell;
      })
    );
    setGrid(newGrid);
  };

  // セルのクラス名を取得する関数
  const getCellClassName = (value: Action): string => {
    switch (value) {
      case "Call":
        return "cell-call";
      case "Raise":
        return "cell-raise";
      case "Fold":
        return "cell-fold";
      default:
        return '';
    }
  };

  const testButtonClicked = () => {
    const hand_table_test: HandTable = {};
    for (let i = 0; i < 13; i++) {
      for (let j = 0; j < 13; j++) {
        hand_table_test[hand_table_cells[i][j]] = grid[i][j]
      }
    }
    console.log(hand_table_test);
  };

  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th></th>
            {columns.map((col, index) => (
              <th key={index}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={row}>
              <th>{row}</th>
              {columns.map((col, colIndex) => (
                <td
                  key={colIndex}
                  className={getCellClassName(grid[rowIndex][colIndex])}
                  onClick={() => handleCellClick(rowIndex, colIndex)}
                >
                  {hand_table_cells[rowIndex][colIndex]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={testButtonClicked}>テスト</button>
    </div>
  );
};

export default Mypage;