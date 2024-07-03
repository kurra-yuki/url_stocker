import React from "react";
import { v4 as uuidv4 } from "uuid";

export const UrlAddInput = ({
  inputUrl,
  setInputUrl,
  urlList,
  setUrlList,
  inputCompanyName,
  setInputCompanyName,
  urlMemo,
}) => {
  const handleSubmit = (e) => {
    const urlId = uuidv4();
    e.preventDefault(); // Enterキーでリロードされるのを防ぐ
    // 入力されたURLまたは会社名が空の場合は何もしない
    if (inputUrl === "" || inputCompanyName === "") {
      return;
    }
    // URLをスプレッド構文で追加
    setUrlList([
      ...urlList, // 既存のURLリスト
      {
        id: urlId, // idはuuidで生成
        draggableId: `urlText-${urlId}`, // draggableIdは`urlText-${id}`
        url: inputUrl, // 入力されたURLを追加
        companyName: inputCompanyName, // 入力された会社名を追加
        memo: urlMemo, // メモの初期値
      },
    ]);
    setInputUrl(""); // 入力欄を空にする
    setInputCompanyName(""); // 会社名入力欄を空にする
  };

  // 入力されたURLを取得
  const handleUrlChange = (e) => {
    setInputUrl(e.target.value);
  };

  const handleCompanyNameChange = (e) => {
    setInputCompanyName(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a URL"
          className="urlAddInput"
          onChange={handleUrlChange}
          value={inputUrl}
        />
        <input
          type="text"
          placeholder="Add a company name"
          className="companyNameInput"
          onChange={handleCompanyNameChange}
          value={inputCompanyName}
        />
        <button type="submit" className="submitInput" disabled={!inputUrl || !inputCompanyName}>Add</button>
      </form>
    </div>
  );
};