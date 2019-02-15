# 翻译 API
基于 [Google 翻译(cn)](https://translate.google.cn) 的翻译 API。

# 接口文档

```json
Get 请求:

/?w=word[&f=auto&t=zh]

响应(JSON):
{
    "word": "word",
    "text": "字",
    "candidate": [
        "字",
        "词",
        "单词",
        "话",
        "言",
        "言辞",
        "笔墨",
        "约言",
        "字",
        "词",
        "单词"
    ]
}
```

## 接口参数
|键|说明|
|--|--|
|w|要翻译的内容|
|f|来源语言，默认为自动识别。（可选）|
|t|目标语言，默认为中文。（可选）|

> 注：如果没有设置目标语言，目标语言则默认为中文。但当要翻译的内容超过 50% 的内容为中文（且没有设置目标语言），则目标语言将会被默认为英文。

## 响应内容
|键|说明|
|--|--|
|word|要翻译的内容|
|text|推荐翻译结果|
|candidate|其他可选翻译结果|

## 语言代码
接口参数的 `f` 和 `t` 的值应为语言代码。你可以在[这儿](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) (ISO 639-1) 查看。

## 示例

```json
GET /?w=word&t=ja

{
    "word": "word",
    "text": "ワード",
    "candidate": [
        "ワード",
        "単語",
        "語",
        "言葉",
        "語句",
        "伝言",
        "一言半句",
        "口舌"
    ]
}

GET /?w=中文&f=zh&t=ko

{
    "word": "中文",
    "text": "중국어",
    "candidate": [
        "중국어"
    ]
}

GET /?w=中文

{
    "word": "中文",
    "text": "Chinese",
    "candidate": [
        "Chinese"
    ]
}
```
---
[English Readme](./readme.md)