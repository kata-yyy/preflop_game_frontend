import React, { useState } from 'react';
import 'stylesheets/Mypage.css';
import { Action } from 'interfaces/preflop_game';

const Mypage: React.FC = () => {
  const rows: string[] = ["A", "K", "Q", "J", "T", "9", "8", "7", "6", "5", "4", "3", "2"]
  const columns: string[] = ["A", "K", "Q", "J", "T", "9", "8", "7", "6", "5", "4", "3", "2"]

  // 10x10のマスの状態を管理するための配列
  const [grid, setGrid] = useState<Action[][]>(
    Array.from({ length: 13 }, () => Array(13).fill("Call"))
  );

  // 次の文字を取得する関数
  const getNextCharacter = (current_action: Action): Action => {
    const actions: Action[] = ["Call", "Raise", "Fold"];
    const current_index: number = actions.indexOf(current_action);
    return actions[(current_index + 1) % actions.length];
  };

  // マスがクリックされたときのイベントハンドラ
  const handleCellClick = (rowIndex: number, colIndex: number) => {
    const newGrid = grid.map((row, rIdx) =>
      row.map((cell, cIdx) => {
        if (rIdx === rowIndex && cIdx === colIndex) {
          return getNextCharacter(cell);
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
                  {grid[rowIndex][colIndex]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Mypage;