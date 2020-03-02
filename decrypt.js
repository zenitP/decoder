function validate(){

    var reg = new RegExp(/[^a-z]/g);

    document.getElementById("textarea").addEventListener('input', function() {

        if (reg.test(this.value)) {

            reg.lastIndex = 0;
            this.value = this.value.replace(reg, '');
        }
    }, false)
}


function execute(){

    var area = document.getElementById('textarea').value;
    edwardDecrypt(area);
}

function edwardDecrypt(message){

    for (var i = message.length - 1; i > 0; i--) {

        if (message[i] == message[i - 1]) {

          message = message.slice(0, i - 1) + message.slice(i + 1);
        }
    }
    document.getElementById('result').innerHTML = "<br><textarea rows='10' cols='80' readonly>" + message;
}
