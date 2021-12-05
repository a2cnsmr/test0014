# 勉強


■参考ページ
●Dockerでnode.jsプロジェクトの開発環境構築
https://qiita.com/hbjpn/items/f638303d5960e24fa794


ここの例ではionic、cordova を使用しているが
docker-compose.yml の記述までを参考にした。


-----------------------------------------------------------
●Node.jsで5行Webサーバを書いてみよう〈Node.jsシリーズ vol.1〉
https://engineer.recruit-lifestyle.co.jp/techblog/2015-06-22-node1/


webserver.js のコードにあるlisten() の第２引数で、
ホストOS上でDockerを実行する場合は「127.0.0.1」でよいが、VM上で
実行する場合は「0.0.0.0」でリッスンさせること。


