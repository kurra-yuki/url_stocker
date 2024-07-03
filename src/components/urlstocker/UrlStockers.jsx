import React, { useState, useEffect } from "react";
import { UrlStocker } from "./UrlStocker";
import { AddUrlStockerButton } from "./button/AddUrlStockerButton";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

//Boxの並び替え処理
const reorder = (urlStockers, startIndex, endIndex) => {
  const remove = urlStockers.splice( startIndex, 1 );
  urlStockers.splice(endIndex, 0, remove[0]);
};


export const UrlStockers = () => {
  //windowのサイズを検知してisMobileを変更してDnDの方向を変更する
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //初期値を設定
  const [urlStockers, setUrlStockers] = useState([
    {
      id: "0",
      Draggable: "item0",
    },
  ]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);


  const handleDragEnd = (result) => {
    reorder(urlStockers, result.source.index, result.destination.index);
    setUrlStockers(urlStockers);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      {/* 参考演算子でisMobileに応じて垂直に入れ替えか水平に入れ替えか変更する */}
      <Droppable droppableId="droppableId" direction={isMobile ? "vertical" : "horizontal"}>
        {(provided) => (
          <div
            className="stockerArea"
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={{ display: isMobile ? "block" : "flex" }}
          >
            {urlStockers.map((urlStocker, index) => (
              <UrlStocker
                key={urlStocker.id}
                index={index}
                urlStocker={urlStocker}
                setUrlStockers={setUrlStockers}
                urlStockers={urlStockers}
              />
            ))}
            {provided.placeholder}
            <AddUrlStockerButton
              urlStockers={urlStockers}
              setUrlStockers={setUrlStockers}
            />
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};