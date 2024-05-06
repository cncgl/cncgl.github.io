---
title: mysql のパスワード変更
date: "2019-06-09"
description: ”Change MySQL root password”
category: "MySQL"
cover: iterograph_2019_06_09.png
---

MySQL の root パスワード変更をするときにハマってしまったのでメモしておく。
実行環境は Ubuntu 19.04 MySQL 5.7。

## MySQL を止める

```bash
$ sudo systemctl stop mysql
```

## パスワードなしでログインできる MySQL を起動する

UNIXドメインソケットが読み書きできないので、所有権を設定するのを忘れないように。
```bash
$ sudo mkdir -p /var/run/mysqld
$ sudo chown mysql:mysql /var/run/mysqld
$ sudo mysqld_safe --skip-grant-tables &
```

## MySQL へ接続する

この方法でパスワード変更した場合は、ネイティブ認証プラグインが設定されていないので
そのプラグインの組み込みもする。

```bash
$ mysql -uroot mysql
mysql> update user set authentication_string=PASSWORD("mynewpassword") where user='root';
mysql> update user set plugin = 'mysql_native_password' where user = 'root';
mysql> flush privileges;
mysql> quit
```

## MySQL を再起動する。

mysqld_safe でけでなく、mysqld も起動しているのでそれも停止する。

```bash
$ sudo kill -9 <mysqld_safe_pid>
$ ps aux | grep mysql
$ sudo kill -9 <mysqld_pid>
$ sudo systemctl start mysql
```

ログインできるようになれば完了
```bash
$ mysql -uroot -pmynewpassword
```

## 補足１
MySQL の初期パスワードは /var/log/mysqld.log にある。筆者は消してしまっていてわからなくなったので上記手順で行った。

```bash
$ cat /var/log/mysqld.log | grep 'temporary password'
```

## 補足2
MySQL のパスワードポリシーは初期だと 文字列長8、大文字・小文字・数値・特殊文字を含む必要があるため変更するには、グローバル変数を変更する。

```bash
mysql> SET GLOBAL validate_password_length=4;
mysql> SET GLOBAL validate_password_policy=LOW;
```


