
function sliding(){
// télécharger le fichier texte des urls (une url par ligne)
    var xmlhttp=new XMLHttpRequest();
    xmlhttp.open("GET","https://raw.githubusercontent.com/ujubib/DiapoTumblr/main/js/liste.txt",true);
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xmlhttp.send();
    xmlhttp.onreadystatechange=function(){
        if (xmlhttp.readyState==4 && xmlhttp.status==200){
            var imgList=xmlhttp.responseText;
// charger chaque ligne comme valeur dans un tableau (*type change*)            
            imgList=imgList.split("\n");
            console.log(imgList[0],imgList[1],imgList[2]);
// mélanger le tableau
            var j, x, i;
            for (i = imgList.length - 1; i > 0; i--) {
                j = Math.floor(Math.random() * (i + 1));
                x = imgList[i];
                imgList[i] = imgList[j];
                imgList[j] = x;
            }
            console.log(imgList[0],imgList[1],imgList[2]);
// Parcourir le tableau pour afficher les images (avec un timeout)
            for (let k in imgList) {
                 setTimeout(() => {
                    var image = document.getElementById('affiche');
                    image.src = imgList[k];
                    var lien = document.getElementById('viewLink'); 
                    lien.href = imgList[k];
                    lien.innerText = imgList[k];
                    
                    console.log(imgList[k]);
                }, 4000 * k);
            }
        }    
    }        
}

/*
function sliding(){
    let imgList = [
        "https://64.media.tumblr.com/55550b748952bd5a7db52edfab12e52e/tumblr_mfiqmjJrZF1rkgns5o1_640.jpg",
        "https://64.media.tumblr.com/tumblr_luckm3LxQa1qbcporo1_500.jpg",
        "https://64.media.tumblr.com/89d9947f5eb39ff25b46248f7a794f32/tumblr_mhlrhrK0Zn1qki31io1_640.jpg",
        "https://64.media.tumblr.com/54bcea0bf3840f75a7600416962cbccc/tumblr_mm2m4zdLDU1rms8aio1_640.jpg",
        "https://64.media.tumblr.com/tumblr_lyx2zwy3bj1r9yklpo1_500.jpg",
        "https://64.media.tumblr.com/tumblr_m52vo36ebe1rnqouso1_540.jpg",
        "https://64.media.tumblr.com/tumblr_m6thz4vRit1qa59a8o1_1280.jpg"
    ];
    let index = Math.floor(Math.random() * imgList.length);
    var image = document.getElementById('affiche');
    image.src = imgList[index];
    setTimeout(sliding, 4000);
}
*/
