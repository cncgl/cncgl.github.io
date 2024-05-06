---
title: Pipenv による Web Application の構築
date: "2019-09-28"
description: "Web Application with Pipenv"
category: Python
cover: iterograph_2019_09_28.png
---

以前は Python の構築は virtualenv で行なっていたが、他のプログラム言語と比べて構成が異なるのが気になって、Pipenv について調べてみた。

# Pipenv インストール

anyenv を利用して pyenv をインストールする(python のバージョンは好みで)

```
$ anyenv install pyenv
$ exec $SHELL -l
$ pyenv install anaconda3-5.3.1
$ pyenv global anaconda3-5.3.1
```

pipenv をインストールする。--user をつけることでユーザーディレクトリに install される。mac の上記環境の python であれば $HOME/.local/bin
にインストールされたが、環境により $HOME/Library であったり異なるらしい。パスが通っているか確認する。

```
$ pip install --user pipenv
$ pipenv --version
```

# 仮想環境

仮想環境はやはり作らないといけないらしい。プロジェクトのディレクトリを作り、python インタープリターをインストールする。

```
$ mkdir project1
$ cd projet1
$ pipenv --python 3.7.0
```

これで Python 3.7.0 のインストールと仮想環境の構築ができる。カレントディレクトリに Pipfile という設定ファイルが生成される。

仮想環境を有効にするには、``pipenv shell`` で shell を起動するか、直接 ``pipenv run python <args>`` のように実行する。 

構築された仮想環境のパスは --venv オプションで確認できる
```
$ pipenv --venv
```

## Django インストール

pipenv install コマンドで Django をインストールする。
インストールされたパッケージの一覧は、pipenv run pip list で確認できる。

```
$ pipenv install django==2.2.5
$ pipenv run pip list
Package    Version
---------- -------
Django     2.2.5
pip        19.2.3
pytz       2019.2
setuptools 41.2.0
sqlparse   0.3.0
wheel      0.33.6
```

プロジェクトの作成は django-admin が使えるようになっているのでそちらで作成する。

```
$ django-admin startporject myproject
```

以下のようなディレクトリとファイルが生成される。

```
project1             
├── myproject
│  ├── manage.py
│  └── myproject 
│     ├── __init__.py
│     ├── settings.py
│     ├── urls.py
│     └── wsgi.py
├── Pipfile
└── Pipfile.lock
```

生成された manage.py により実行する(pipenv shell より)。

```
$ python manage.py migrate
$ python manage.py runserver
```

デフォルトでは host: 127.0.0.1 port: 8000 で実行されるので、変更する場合は ``python manage.py runserver 0:3000`` などとする。

