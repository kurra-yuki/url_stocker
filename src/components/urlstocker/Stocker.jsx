import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { faFilePen } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { Memo } from './Memo'

export const Stocker = ({urlText, urlList, setUrlList, index}) => {
  const handleDelete = (id) => {
    // ユーザーに確認を求める
    const isConfirmed = window.confirm("削除してもよろしいですか");
    if (isConfirmed) {
      // 確認が取れた場合、ilter関数で削除されたURLを取得しリストからアイテムを削除
      setUrlList(urlList.filter((urlText) => urlText.id !== id));  
    }
  }

  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleMemoCheck = () => {
    setIsModalOpen(true); // モーダルを開く
  }
  
  return (
    //Draggableコンポーネントで囲むid,draggableId,indexを渡すのはwarningを消すためと状態の管理のため
    <Draggable draggableId={urlText.draggableId} index={index}>
      {(provided) => (
        //以下keyやref等は決まり文句
        <div
          className="urlBox"
          key={urlText.id}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <a
            href={urlText.url}
            className="urlText"
            target="_blank"
            rel="noopener noreferrer"
          >
            {urlText.companyName}
          </a>
          <button className="memoButton" onClick={() => handleMemoCheck()}>
            {/* モーダルを使ってメモ機能の追加 */}
            <FontAwesomeIcon icon={faFilePen} />
          </button>
          <Memo
            urlmemo={urlText.memo}
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
          <button
            className="trashButton"
            onClick={() => handleDelete(urlText.id)}
          >
            {/*FontAwesomeよりアイコンを取得 */}
            <FontAwesomeIcon icon={faTrashCan} />
          </button>
        </div>
      )}
    </Draggable>
  );
}
