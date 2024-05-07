---
title: 郵便番号検索 API を作った
date: "2019-03-06"
description: "昨年秋、AWS Lambda に Ruby が追加されました。勉強を兼ねて郵便番号検索の API を実装しました。"
category: "aws"
cover: iterograph_2019_03_07.png
---

昨年秋、AWS Lambda に Ruby が追加されました。勉強を兼ねて郵便番号検索の API を実装しました。

郵便番号のデータは、こちらのものを使わせてもらいました。
https://qiita.com/kmdsbng/items/935820212801e68867f0

このデータを S3 においてリクエストパラメータから返しているだけです。

ソースはこちら
https://github.com/cncgl/lambda-zip
