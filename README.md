# firebase_training001

React を利用して、ブラウザ上で動作する Todo アプリを作成し、それを firebase hosting にデプロイしました。

## 開発環境

- Windows 11 (21H2)
- WSL2 Ubuntu20.04
- React 18.2
- bootstrap 5.2.1
- react-bootstrap 2.5.0
- Node.js 16.11.1
- vite 3.1.0
- firebase-tools 11.10.0

## ローカルでの動作の手順

node が利用できる環境に当リポジトリをクローンします  
下記コマンドで依存パッケージをインストールします

```bash
$ npm install
```

下記コマンドで vite のローカルサーバを起動します

```bash
$ npm run dev

> firebase_training001@0.0.0 dev
> vite


  VITE v3.1.0  ready in 381 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

ターミナルに表示された localhost の URL にアクセスすると、トップページが表示されます

## firebase hosting へのデプロイ

教材の内容が若干古かったので、公式ドキュメントに沿って進めました。

```bash
# CLI ツールをインストール
$ npm install -g firebase-tools

# firebase にGoogle アカウントでログイン
$ firebase login

# firebase の設定の初期化(設定ファイルが生成される)
# vite を使っていると、dist ディレクトリにビルドされたファイルが保存されるので、
# デプロイ対象ディレクトリは　dist を指定すること
$ firebase init

# 指定したfirebase プロジェクトにデプロイ
$ firebase deploy
```

## 大変だったこと

教材の内容と各種パッケージの最新の内容が異なっていたので、そこの差を埋めるのに苦労しました。  
特に、Bootstrap5 で変更されたクラス名を調べるのが手間でした。

もう一点、useContext() を使って状態管理をグローバル化した際、TypeScript での型定義の仕方で苦労しました。  
解決の役に立ったページを最後に載せておきます。

## 参考資料

以下の教材をベースにソースコードを作成しました  
最短・最速で学ぶ Firebase Hosting + React Todo アプリ実装編 (React Hooks):  
https://www.udemy.com/course/firebase-hosting-todo-reactreact-hooks/

また、TypeScript での useContext() の利用の際の型定義方法について、以下のページを参考にしました  
【TypeScript】useContext と useState を組み合わせて、子孫コンポーネントから直接先祖コンポーネントの state を編集する:  
https://qiita.com/Rascal823/items/0f53ffbb410505b707f8
