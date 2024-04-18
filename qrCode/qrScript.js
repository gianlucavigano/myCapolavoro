let imgBox= document.getElementById("imgBox");
let qrImage= document.getElementById("qrImage");
let qrText = document.getElementById("qrText");

function generateQR(){
    if(qrText.value.length > 0){
        qrImage.src=" https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgBox.classList.add("show-img");
    onQRGenerated();
    }else{
        qrText.classList.add('error');
        setTimeout(()=>{
            qrText.classList.remove('error');
        },1000);
    }
}

function onQRGenerated() {
    // Utilizziamo setTimeout per garantire che la transizione avvenga dopo la resa del browser
    setTimeout(function () {
        
        document.querySelector('.container').style.marginTop = "12%";
    }, 0);
}


