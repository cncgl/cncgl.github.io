---
title: Flutter でガワアプリ
date: "2019-03-18"
description: "Flutter でガワアプリを作ろうと思う。"
category: "Flutter"
cover: iterograph_2019_03_18.png
---

Flutter でガワアプリを作ろうと思う。
WebView のプラグインがあり、下記記事を参照してやってみた。

[webview plugin](https://pub.dartlang.org/packages/webview_flutter) は バージョンが上がって名称が変わっているので、その変更をしなければならない。

pubspec.yaml に webview_flutter を追加する。

```yaml
--- 略 ---
dependencies:
  flutter:
    sdk: flutter

  cupertino_icons: ^0.1.2
  webview_flutter: ^0.3.4
--- 略 ---
```

main.dart はこんな感じ

```dart
import 'package:flutter/material.dart';
import 'package:webview_flutter/webview_flutter.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      routes: {
        "/": (_) => WebView(
          initialUrl: "https://www.google.com"
        )
      }
    );
  }
}
```
ドキュメントにある通り、iOS で動かす場合は（エミュレータの場合も）``ios/Runner/Info.plist`` に次のキーを追加しなければならない。

```xml
<key>io.flutter.embedded_views_preview</key>
<string>YES</string>
```

とりあえず、Android, iOS の実機とエミュレータで表示を確認した。JavaScript とかの再現具合はこれから検証する。

動かない場合は flutter doctor とか flutter run --verbose で調べてみると良い。

参考
- [FlutterでWebViewを表示する](https://qiita.com/Horie1024/items/f5eedd485a436f2c0592)

- [Google公式Flutter用WebViewプラグインを一通り使ってみた](https://qiita.com/aoinakanishi/items/e58e7dd537ca1d1b76d6)
