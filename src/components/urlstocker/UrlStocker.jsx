import React from "react";
import { BoxTitle } from "./BoxTitle";
import { BoxDeleteButton } from "./button/BoxDeleteButton";
import { UrlAddInput } from "./input/UrlAddInput";
import { Stockers } from "./Stockers";
import { Draggable } from "react-beautiful-dnd";

export const UrlStocker = ({
  urlStocker,
  setUrlStockers,
  urlStockers,
  index,
}) => {
  const [inputUrl, setInputUrl] = React.useState("");
  const [urlList, setUrlList] = React.useState([]);
  const [inputCompanyName, setInputCompanyName] = React.useState('');
  const [urlMemo, setUrlMemo] = React.useState('自由にメモしてね');

  return (
    <Draggable draggableId={urlStocker.id} index={index}>
      {(provided) => (
        <div
          className="urlstocker"
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <div className="urlstockerTitle" {...provided.dragHandleProps}>
            <BoxTitle />
            <BoxDeleteButton
              urlStocker={urlStocker}
              setUrlStockers={setUrlStockers}
              urlStockers={urlStockers}
            />
          </div>
          <UrlAddInput
            inputUrl={inputUrl}
            setInputUrl={setInputUrl}
            urlList={urlList}
            setUrlList={setUrlList}
            inputCompanyName={inputCompanyName}
            setInputCompanyName={setInputCompanyName}
            urlMemo={urlMemo}
            setUrlMemo={setUrlMemo}
          />
          <Stockers
            inputUrl={inputUrl}
            urlList={urlList}
            setUrlList={setUrlList}
          />
        </div>
      )}
    </Draggable>
  );
};
