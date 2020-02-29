function execute(){

    var area = document.getElementById('textarea').value;
    edwardDecrypt(area);
}

function edwardDecrypt(message){
  
      /*
      or [a-z] as /gi
      */

      message = message.replace(/[^a-zA-Z]/g, '');
      message = message.replace(/([a-zA-Z])\1/g, '');

      document.getElementById('result').innerHTML = "<br><textarea rows='10' cols='80'>" + message;
}
