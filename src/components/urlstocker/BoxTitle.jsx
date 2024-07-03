import React from 'react'

export const BoxTitle = () => {
  const [isClicked, setIsClicked] = React.useState(false)
  const [title, setTitle] = React.useState('お気に入り');

  //クリックでフォームのインプット表示に切り替え
  const handleClick = () => {
    setIsClicked(true);
  };


  //formのinputの値を取得
  const handleChanged = (e) => {
    setTitle(e.target.value);
  };

  //Enterでタイトルを固定
  const handleSubmit = (e) => {
    e.preventDefault();  //EnterKeyでのリロードを防ぐ
    setIsClicked(false);
  }

  //他をクリックしてもタイトルを固定できるようにする
  const handleBlur = () => {
    setIsClicked(false);
  }

  //クリックされたらformのinput表示、されていなければtitleを表示(<h3>タグの内容)
  return (
    <div onClick={handleClick} className='title'>
      {isClicked ? 
        <form onSubmit={handleSubmit}>
          <input 
            className='title-input'
            autoFocus   //フォームを開いた時に自動でフォーカスを当てる
            type='text' 
            onChange={handleChanged} 
            onBlur={handleBlur} 
            value={title}
            maxLength={15}  //最大文字数を10文字に制限
          />
        </form> : <h2>{title}</h2>}
    </div>
  )
}
