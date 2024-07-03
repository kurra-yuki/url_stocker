import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export const BoxDeleteButton = ({
  urlStocker,
  setUrlStockers,
  urlStockers,
}) => {
  const stockerDeleteButton = (id) => {
    const isConfirmed = window.confirm("削除してもよろしいですか");
    if (isConfirmed) {
      //Stocker削除ボタンの処理
      setUrlStockers(urlStockers.filter((e) => e.id !== id));
    }
  };
  return (
    <div>
      <button
        className="stockerDeleteButton"
        onClick={() => stockerDeleteButton(urlStocker.id)}
      >
        <FontAwesomeIcon icon={faXmark} />
      </button>
    </div>
  );
};
