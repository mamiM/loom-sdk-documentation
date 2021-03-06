---
id: join-testnet
title: テストネットへの参加
sidebar_label: テストネットへの参加
---
この開発者向けドキュメーンテーションは、PlasmaChainテストネットに参加しデプロイを行う方法についてのものである。 ノードの運営方法やバリデータになる方法についての情報をお探しであれば、 [バリデーターガイド](validator.html)をチェックすること。

**前提条件**

- Loomがインストール済みであること ([手順はこちら](https://loomx.io/developers/docs/ja/basic-install-osx.html#installation) )

```bash
 curl https://raw.githubusercontent.com/loomnetwork/loom-sdk-documentation/master/scripts/get_loom.sh | sh
```

**Loomで秘密鍵を生成し、パブリックアドレスを取得する方法**

    $ ./loom genkey -k priv_key -a pub_key
    

結果

```bash
local address: 0x3B334bEd1e7d3e7d9214495120160D9236aCbC31
local address base64: OzNL7R59Pn2SFElRIBYNkjasvDE=
```

そしてこれは`priv_key`という名前と`pub_key`という名前でファイルを生成し、`priv_key`ファイルはあなたの秘密鍵を含みDAppチェーンへのデプロイに使う。

# Karma Faucetの使用方法

1. [Karma Faucet](https://faucet.dappchains.com)のウェブサイトにアクセスする。   
      
      
    ![image](/developers/img/faucet/1.png)   
      
      
    
2. 受信者アドレス(recipient address)に、あなたのtruffleアカウントと同じアカウントの`public address` を入力する。   
      
      
    ![image](/developers/img/faucet/2.png)   
      
      
    
3. コントラクトをデプロイしたいテストネット・ネットワークを選択する。   
      
      
    ![image](/developers/img/faucet/3.png)   
      
      
    
4. `request` ボタンをクリックする。   
      
      
    ![image](/developers/img/faucet/4.png)   
      
      
    
5. 選択したテストネットにコントラクトをデプロイする前に、`faucet-karma` が表示できていることを確認する。   
      
      
    ![image](/developers/img/faucet/5.png)

# Truffleサンプルをテストネットへデプロイ

1. node 及び yarn/npm がインストールされていることを確認
2. テストネットのURLを以下ページから取得する[PlasmaChain Testnets](testnet-plasma.html)
3. ソースを取得: 
        bash
        git clone https://github.com/loomnetwork/truffle-dappchain-example
        cd truffle-dappchain-example
        # copy the private key generated earlier to the root directory of the example repo
        cp ../priv_key extdev_private_key

4. もし例示したコントラクトを`extdev-plasma-us1`にデプロイしたい場合このステップをスキップする。そうでなければあなたがデプロイしたいネットワークを`truffle-config.js`に追加する。
5. Nodeモジュールをインストールする: 
        bash
        yarn

6. デプロイの実行: 
        bash
        yarn deploy:extdev もしkarmaがない場合は、これはエラーとなり失敗する。 
    
    `Failed to commit Tx: origin has no karma` その場合は [Karma Faucet からkarmaをリクエストする。](http://faucet.dappchains.com)