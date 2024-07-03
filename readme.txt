react-beautiful-dndが動かないときの対処法について

1, ターミナルで以下のコードを実行
>npm install react-beautiful-dnd

2, index.jsのコードを変更
修正前
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

修正後
root.render(
    <App />
);

FontAwesomeの導入について

1, npm
インストール必須
npm install @fortawesome/react-fontawesome
npm install @fortawesome/fontawesome-svg-core
npm install @fortawesome/free-solid-svg-icons

使用するアイコンによって異なる
npm install @fortawesome/react-fontawesome
npm install @fortawesome/fontawesome-svg-core


2, FontAwesomeをインポートし、目的のアイコンもインポートする
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

3, 以下のようにアイコンを表示する
<FontAwesomeIcon icon={faTrashCan} />
