# /auto

MVPワークスペース用の自動実行コマンドです。

## 目的
対象MVPに応じて、適切なフローを選択し、
以下の順番で必ず実行します。

1. /mvp-plan
2. /auto-build-ui or /auto-build-crud or /auto-build-generator
3. /demo-check

## 入力
- 対象MVP
- 今回見せたい価値
- 今回作る範囲
- 制約（任意）

## 分岐

### Generator系
- mvp-lp-generator → /auto-build-generator

### CRUD系
- mvp-booking-system
- mvp-estimate-manager
- mvp-freelance-manager
→ /auto-build-crud

### UI系
- mvp-subscription-ec → /auto-build-ui

## 実行ルール

- いきなりコードを書かない
- 必ず plan → build → check の順で実行
- 3分デモで伝わらないものは作らない
- 認証・決済は入れない
