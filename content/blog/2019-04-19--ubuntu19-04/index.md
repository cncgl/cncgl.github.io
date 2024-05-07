---
title: Ubuntu19.04
date: "2019-04-19"
description: "Ubuntu 19.04 が出たので install log を残しておこうと思う。"
category: "Linux"
cover: iterograph_2019_04_19.png
---

Ubuntu 19.04 が出たので install log を残しておこうと思う。

## xfce をインストールする

```bash
$ sudo apt install xubuntu-desktop
```
選択画面で lightdm を選択する。再起動で反映される。

## 必要なソフトウェアをインストールする

筆者は、terminator をよく使うのでそれをインストールする。
```bash
$ sudo apt install terminator
```
chrome, visual source code はそれぞれダウンロードしてからインストールする。
Jetbrains IDE は jetbrains toolbox をダウンロードして、インストールする。

```bash
$ sudo dpkg -i google-chrome-stable_current_amd64.deb
$ sudo dpkg -i code_<VERSION-REVISION>_amd64.deb
$ tar xvf jetbrains-toolbox-<VERSION>.tar.gz
$ jetbrains-toolbox-<VERSION>/jetbrains-toolbox
```

## zsh  をインストールする

zsh は標準ではインストールされないのでインストールする。また、oh-my-zsh をインストールする。

```bash
$ sudo apt install zsh
$ chsh -s $(which zsh)
$ git clone https://github.com/robbyrussell/oh-my-zsh.git ~/.oh-my-zsh
```

以上
