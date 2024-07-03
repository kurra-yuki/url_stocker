import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export const Memo = ({ isOpen, onClose, urlmemo }) => {
  // useStateを使用してurlmemoの内容を管理するステートを作成
  const [memoContent, setMemoContent] = useState(urlmemo);
  const [isClicked, setIsClicked] = React.useState(false)


  if (!isOpen) return null;


  const handleClick = () => {
    setIsClicked(true);
  };

  // メモの内容を更新する関数
  const handleMemoChange = (event) => {
    setMemoContent(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();  //EnterKeyでのリロードを防ぐ
    setIsClicked(false);
  }

  //他をクリックしても閉じる
  const handleBlur = () => {
    setIsClicked(false);
  }

  return (
    <div className="memo">
      <div onClick={handleClick}>
        {isClicked ? (
          <form onSubmit={handleSubmit}>
            <input
            className="memo-input"
              autoFocus //フォームを開いた時に自動でフォーカスを当てる
              type="text"
              onChange={handleMemoChange}
              onBlur={handleBlur}
              value={memoContent}
            />
          </form>
        ) : (
          <h2>{memoContent}</h2>
        )}
      </div>
      <button className="closeButton" onClick={onClose}>
        <FontAwesomeIcon icon={faXmark} />
      </button>
    </div>
  );
};
