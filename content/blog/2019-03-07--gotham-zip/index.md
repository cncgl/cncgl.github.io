---
title: 郵便番号検索APIを作り直した
date: "2019-03-07"
description: "Japanese Zip Code API again"
category: "rust"
cover: iterograph_2019_03_08.png
---

前回、サーバーレスで郵便番号検索を作ったのですが、S3 のランニングコストがもったいないので、VPS に移すことにしました。VPS は使っても使わなくても料金変わらないので。

単純なので、何で書いても良かったのですが、勉強を兼ねて Rust で書いてみました。なかなか、自分のものにならないですね。所有権のところがよくわかってないです。

ドキュメントがないですが、ここにおいておきました。
https://github.com/cncgl/gotham-zip
