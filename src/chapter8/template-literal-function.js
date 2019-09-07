function htmlEscape(strings, ...values) {
  let result = strings[0];
  for (let i = 0; i < values.length; i++) {
    result += escape(values[i]) + strings[i + 1];
  }
  return result;
}

function escape(s) {
  return s
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/'/g, '&#39;')
      .replace(/"/g, '&quot;')
      .replace(/`/g, '&#096;');
}

const userinput = '<script>alert("test")</script>';
// テンプレートリテラルの前に関数名を記述することでテンプレートリテラルの内容を引数として関数を呼び出すことができる
const message = htmlEscape`<p>${userinput}</p>`;
console.log(message);
