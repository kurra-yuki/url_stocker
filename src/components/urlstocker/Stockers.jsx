import React from 'react'
import {Stocker} from './Stocker'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

//URLの並び替え処理
const reorder = (urlList, startIndex, endIndex) => {
  const remove = urlList.splice( startIndex, 1 );
  urlList.splice(endIndex, 0, remove[0]);
};

export const Stockers = ({ urlList, setUrlList }) => {
  //ドラッグアンドドロップの処理
  const handleDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    reorder(urlList, result.source.index, result.destination.index);
    setUrlList(urlList);
  };

  //map関数で入力済みのURLを展開する
  return (
    <div>
      {/* 公式リファレンスの概念図通りに囲っていく */}
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="droppable">
          {/* Droppableの中身は関数でまとめること */}
          {(provided) => (
            //divタグにはDroppableのプロパティを渡す
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {urlList.map((urlText, index) => (
                //ここのdivタグにはkeyは必須(warningが出る)
                <div key={urlText.id}> 
                  <Stocker
                    index={index}
                    urlText={urlText}
                    urlList={urlList}
                    setUrlList={setUrlList}
                    urlmemo={urlText.memo}
                  />
                </div>
              ))}
              {/* ↓なんかわからんけど必要らしい */}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
