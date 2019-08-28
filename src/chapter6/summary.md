* DOMとは
DOM = Document Object Model  
JavaScriptなどのプログラムからHTMLの要素を操作するためのインターフェース  

* DOMオブジェクト
DOMでは、HTML文書や要素を表すオブジェクトを通じて、JavaScriptからHTML文書を操作する。  
window = Windowオブジェクトと呼ばれ、Webブラウザの１つのウィンドウもしくはタブを表す。  
document = Documentオブジェクトと呼ばれ、HTML文書全体を表す。  
DOMでイベントハンドラを登録する目的は、JavaScriptとHTMLのコードを分離すること。

* JavaScriptが実行されるタイミング  
WebブラウザはHTML文書を上から順に解析して表示するらしい。
script要素は同期実行(ブロッキング実行)なので、途中にscript要素があると解析されるまで、HTML文書の解析に進めない。

* イベントハンドラ  
idが'button'のinput要素にイベントハンドラ foo関数を登録  
クリックしたときにfoo関数が実行される  
```javascript
// input要素を取得
const button = document.getElementById('button');
// onclickがイベントハンドラプロパティ
button.onclick = foo;
// イベントハンドラの解除
button.onclick = null;
```
