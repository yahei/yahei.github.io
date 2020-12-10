
// 金額からポイントの使用量を計算
function calc_point() {
  // 読み書きの準備
  var point = document.getElementById("point");
  var target = Number(document.getElementById("target").value);
  
  point.innerHTML = "";

  var result = Math.floor(target/1.3);
  if (target>=650) {
    result = target - 150;
  }

  for (var cnt=0; cnt<2; cnt++) {
    var p = result + cnt;
    p = Math.max(0,p);
    if (p>=500) {
      point.innerHTML += p + "P使用 : " + (p+150) + "円分<br>"
    } else {
      point.innerHTML += p + "P使用 : " + Math.ceil(p*1.3) + "円分<br>"
    }
  }
}
