var mailkcocoa = new MilkCocoa('vueibn3d9q5.mlkcca.com'),
  mesDS = milkcocoa.dataStore('message'),
  nameEl, mailEl, msgEl;

window.onload = function(){
  nameEl = document.getElementById("name");
  mailEl = document.getElementById("mail");
  msgEl  = document.getElementById("msg");
}

function clickEvent(){
  var name =nameEl.value, mail = mailEl.value, msg = msgEl.value;
  var mes = '';
  if(!name) mes += 'お名前 ';
  if(!mail) mes += 'メールアドレス ';
  if(!msg) mes += 'メッセージ ';

  if(!name || !mail ||  !msg ){
    mes += 'が入力されていません。';
  }else{
    pushContact({
      name : name,
      mail : mail,
      msg : msg
    });
    mes = '送信しました。';
  }
  console.log(mes);
};

function pushContact(body){
  mesDS.push(body,function(data){
    console.log(data);
  });
}

