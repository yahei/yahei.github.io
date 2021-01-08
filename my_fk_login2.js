function get() {
  // getパラメータ受け取り
  query = window.location.href.split('?')[1];
  json_query = '{"' + decodeURI(query.replace(/&/g, '", "').replace(/=/g, '": "')) + '"}';
  params = JSON.parse(json_query);

  // ページに反映
  // 表示されるが送信されない要素
  document.getElementById('cardId1_v').value = params['cardId1'];
  document.getElementById('cardId2_v').value = params['cardId2'];
  document.getElementById('cardId3_v').value = params['cardId3'];
  document.getElementById('cardId4_v').value = params['cardId4'];
  document.getElementById('cardPin_v').value = params['cardPin'];
  // 実際に送信される隠し要素
  document.getElementById('cardId1').value = params['cardId1'];
  document.getElementById('cardId2').value = params['cardId2'];
  document.getElementById('cardId3').value = params['cardId3'];
  document.getElementById('cardId4').value = params['cardId4'];
  document.getElementById('cardPin').value = params['cardPin'];
}
