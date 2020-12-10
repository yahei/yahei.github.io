// スタックと入力中文字列の変数
// 値は文字列で持っている
var stack = [];
var current = "0";
var input_flag = true;

// 初期化処理
function init() {
  // 特殊キー
  funcs = {
    "s": swap,
    "r": root,
    "i": inversion,
    "c": clear,
    "+": plus,
    "-": minus,
    "*": mul,
    "/": div,
    ".": input("."),
    "p": push,
  }
  // 数字キー
  for (let cnt=0; cnt <10; cnt++) {
    funcs[cnt] = input(cnt);
  }
  // 関数を登録
  for (let id in funcs) {
    document.getElementById(id).onclick = funcs[id];
  }

  refresh();
}

// 表示を更新
function refresh() {
  // 先頭の0を取る
  while (current.charAt(0)==="0" && current.charAt(1)!==".") current=current.slice(1);
  if (current === "") current = "0";
  
  // 表示
  
  // --スタック領域
  // カンマ区切りにする
  var stack2 = stack.map(value => Number(value).toLocaleString(undefined, { maximumFractionDigits: 20 }));
  // 結合
  str = stack2.join("<br>");
  // スタック最後の改行
  if (stack.length > 0) str += "<br>";

  // --最新行
  var current_line = Number(current).toLocaleString(undefined, { maximumFractionDigits: 20 });
  // 小数点入力中なら末尾に.を付ける
  if (current.charAt(current.length-1) === ".") current_line += ".";
  // 入力受付中なら下線付きで表示
  if (input_flag) {
    current_line = "<u>" + current_line + "</u>";
  }

  str += current_line;

  // 画面に反映
  var elem_stack = document.getElementById("stack");
  elem_stack.innerHTML = str;
  elem_stack.scrollTo(0, elem_stack.scrollHeight);
}

// 数字や記号を入力する
function input(c) {
  return () => {
    if (!input_flag) {
      push();
      input_flag = true;
    }
    var back = current;
    current += c;
    if (isNaN(Number(current))) current = back;
    refresh();
  };
}

// 入力中の数字をクリアする
function clear() {
  current = "0";
  input_flag = true;
  refresh();
}

// スタックにプッシュする
function push() {
  stack.push(current);
  clear();
}

// 四則演算
function plus() {
  if (stack.length < 1) retrun;
  current = '' + (Number(stack.pop()) + Number(current));
  input_flag = false;
  refresh();
}

function minus() {
  if (stack.length < 1) retrun;
  current = '' + (Number(stack.pop()) - Number(current));
  input_flag = false;
  refresh();
}

function mul() {
  if (stack.length < 1) retrun;
  current = '' + (Number(stack.pop()) * Number(current));
  input_flag = false;
  refresh();
}

function div() {
  if (stack.length < 1) retrun;
  current = '' + (Number(stack.pop()) / Number(current));
  input_flag = false;
  refresh();
}

// 平方根
function root() {
  current = '' + (Math.sqrt(Number(current)));
  input_flag = false;
  refresh();
}

// スタックの先頭から2つを入れ替える
function swap() {
  if (stack.length < 1) return;
  var x = stack.pop();
  stack.push(current);
  current = x;
  input_flag = false;
  refresh();
}

// 符号を反転する
function inversion() {
  current = ''+ (-current);
  refresh();
}
