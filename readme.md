# Translate Server
A simple web interface to translate. There is power by Google Translate.

# Interface

```json
Get Request:
/?w=word[&f=auto&t=zh]

Response:
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

## Parameter
|key|description|
|--|--|
|w|The word want to translate|
|f|The source language. Default is recognized automatically. (Optional)|
|t|The target language. Default is Chinese. (Optional)|

> Note: If there is no source language, the language will be recognized automatically. When there is about 50% Chinese, the source language will be changed to Chinese.

## Response
|key|description|
|--|--|
|word|The word want to translate|
|text|The most match result|
|candidate|Other translate result|

## Language Code
You can check it in [here](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) (ISO 639-1).