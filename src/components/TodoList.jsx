import React, { useState } from "react";

const TodoList = ({ todos, onAdd }) => {
  const [isAdding, setIsAdding] = useState(true); // 이미지처럼 기본적으로 입력창이 열린 상태
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    if (!inputValue.trim()) return;
    onAdd({ text: inputValue, date: "오늘" });
    setInputValue("");
  };

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <div key={todo.id} className="todo-item">
          <div className="checkbox"></div>
          <div className="todo-content">
            <div className="todo-text">{todo.text}</div>
            <div className="todo-date">🗓️ {todo.date}</div>
          </div>
        </div>
      ))}

      {isAdding ? (
        <div className="task-editor">
          <input
            type="text"
            placeholder="작업 이름"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <textarea placeholder="설명" rows="2"></textarea>
          <div className="editor-actions">
            <div className="btns-left">
              <button>📅 날짜</button>
              <button>📎 첨부</button>
              <button>🚩 우선 순위</button>
              <button>⏰ 미리 알림</button>
            </div>
            <div className="btns-right">
              <button className="cancel-btn" onClick={() => setIsAdding(false)}>
                취소
              </button>
              <button className="submit-btn" onClick={handleSubmit}>
                작업 추가
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button className="add-placeholder" onClick={() => setIsAdding(true)}>
          + 작업 추가
        </button>
      )}

      <style jsx="true">{`
        .todo-item {
          display: flex;
          padding: 12px 0;
          border-bottom: 1px solid #f0f0f0;
          align-items: flex-start;
        }
        .checkbox {
          width: 18px;
          height: 18px;
          border: 1px solid #ccc;
          border-radius: 50%;
          margin-right: 12px;
          margin-top: 3px;
          cursor: pointer;
        }
        .todo-text {
          font-size: 14px;
          margin-bottom: 4px;
        }
        .todo-date {
          font-size: 12px;
          color: #692991;
        }

        .task-editor {
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 15px;
          margin-top: 20px;
        }
        .task-editor input {
          width: 100%;
          border: none;
          font-size: 14px;
          font-weight: bold;
          outline: none;
          margin-bottom: 8px;
        }
        .task-editor textarea {
          width: 100%;
          border: none;
          font-size: 13px;
          outline: none;
          resize: none;
          color: #666;
        }

        .editor-actions {
          display: flex;
          justify-content: space-between;
          margin-top: 15px;
          border-top: 1px solid #f0f0f0;
          pt: 10px;
        }
        .btns-left button {
          background: none;
          border: 1px solid #eee;
          margin-right: 5px;
          padding: 5px 10px;
          border-radius: 5px;
          font-size: 12px;
          cursor: pointer;
        }
        .btns-right button {
          padding: 8px 16px;
          border-radius: 5px;
          cursor: pointer;
          font-size: 13px;
          border: none;
        }
        .cancel-btn {
          background: #f5f5f5;
          margin-right: 8px;
        }
        .submit-btn {
          background: #e44232;
          color: white;
          opacity: 0.5;
        }
        .add-placeholder {
          background: none;
          border: none;
          color: #888;
          cursor: pointer;
          margin-top: 20px;
          font-size: 14px;
        }
      `}</style>
    </div>
  );
};

export default TodoList;
