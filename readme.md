# WLD Clicker Advanced

フロントイメージ（ver.1）
https://v0.dev/chat/DOyoPVcPrxs?b=b_7zQwMxH09LV
フロントイメージ（ver.2）
https://v0.dev/chat/DOyoPVcPrxs?b=b_od7TermAqQ9


## 概要

WLD Clicker Advancedは、World App用のミニアプリとして開発されたクリッカーゲームです。プレイヤーはクリックしてCLKを獲得し、アップグレードを購入してより効率的にCLKを集めることができます。

##　実装前アイデア
５分間でどれだけのCLKが獲得できるかのタイムアタックチャレンジ機能
・タイムアタックの詳細設計
-1WLDで殿堂入りにチャレンジ
-殿堂入りに成功したら、以降のチャレンジに失敗した人の1WLDのうち20%が殿堂入りプレイヤーに還元

## 機能

- クリックしてCLKを獲得
- オートクリッカーの購入
- クリックパワーのアップグレード
- スコアのリーダーボードへの提出
- 殿堂入りシステム

## 技術スタック

- React
- ethers.js
- @worldcoin/minikit-js

npm start

ブラウザで `http://localhost:3000` を開いてアプリを確認します。

2. MiniKitのモック作成：
`src/minikit-mock.js` ファイルを作成し、MiniKitの機能をモックします。

3. App.jsでMiniKitMockを使用：
開発環境では作成したモックを使用するように設定します。

4. Worldcoin Simulatorを使用してIDKitのQRコードをテストします。

## ビルドとデプロイ

1. プロダクション用にビルドします：npm run build

2. World App開発者ポータル（https://developer.worldcoin.org/）にアクセスします。

3. 新しいミニアプリを作成し、必要な情報を入力します。

4. `dist` フォルダの内容をWorld App開発者ポータルにアップロードします。

5. アプリを公開し、World Appでテストします。

## 注意事項

- このアプリはWorld App環境で実行することを想定しています。
- ローカル開発環境では一部の機能が制限される場合があります。
- 実際のWLD取引やスマートコントラクトの呼び出しは、このサンプルコードには含まれていません。本番環境では適切なセキュリティ対策と実装が必要です。
