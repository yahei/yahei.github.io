function save() {
  // 取得
  data = {};
  data['id1'] = document.getElementById('cardId1').value;
  data['id2'] = document.getElementById('cardId2').value;
  data['id3'] = document.getElementById('cardId3').value;
  data['id4'] = document.getElementById('cardId4').value;
  data['pin'] = document.getElementById('cardPin').value;

  // cookie書き込み
  document.cookie = JSON.stringify(data);
} 

function load() {
  // cookie読み込み
  cookies = JSON.parse(document.cookie);

  // ページに反映
  document.getElementById('cardId1').value = cookies['id1'];
  document.getElementById('cardId2').value = cookies['id2'];
  document.getElementById('cardId3').value = cookies['id3'];
  document.getElementById('cardId4').value = cookies['id4'];
  document.getElementById('cardPin').value = cookies['pin'];
}
