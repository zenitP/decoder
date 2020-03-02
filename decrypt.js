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

    message = message.replace(/([a-z])\1/g, '');
    document.getElementById('result').innerHTML = "<br><textarea rows='10' cols='80'>" + message;
}

