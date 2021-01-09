/// 送信する前に4つのIDを一つに結合する
function joinID() {
  document.getElementById('cardId1').disabled = true;
  document.getElementById('cardId2').disabled = true;
  document.getElementById('cardId3').disabled = true;
  document.getElementById('cardId4').disabled = true;

  document.getElementById('joinedID').value = 
    document.getElementById('cardId1').value +
    document.getElementById('cardId2').value +
    document.getElementById('cardId3').value +
    document.getElementById('cardId4').value;
}

/// GETで送られてきたパラメータを受け取る
function getParams() {
  // getパラメータ受け取り
  query = window.location.href.split('?')[1];
  json_query = '{"' + decodeURI(query.replace(/&/g, '", "').replace(/=/g, '": "')) + '"}';
  params = JSON.parse(json_query);

  // ページに反映
  // 表示されるが送信されない要素
  document.getElementById('cardId1_v').value = params['i'].slice( 0, 4);
  document.getElementById('cardId2_v').value = params['i'].slice( 4, 8);
  document.getElementById('cardId3_v').value = params['i'].slice( 8,12);
  document.getElementById('cardId4_v').value = params['i'].slice(12,16);
  document.getElementById('cardPin_v').value = params['p'];
  // 実際に送信される隠し要素
  document.getElementById('cardId1').value = params['i'].slice( 0, 4);
  document.getElementById('cardId2').value = params['i'].slice( 4, 8);
  document.getElementById('cardId3').value = params['i'].slice( 8,12);
  document.getElementById('cardId4').value = params['i'].slice(12,16);
  document.getElementById('cardPin').value = params['p'];
}
