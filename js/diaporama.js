
function sliding(){
// télécharger le fichier texte des urls (une url par ligne)
    var xmlhttp=new XMLHttpRequest();
    xmlhttp.open("GET","https://raw.githubusercontent.com/ujubib/DiapoTumblr/main/js/liste.txt",true);
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xmlhttp.send();
    xmlhttp.onreadystatechange=function(){
        if (xmlhttp.readyState==4 && xmlhttp.status==200){
            var imgList=xmlhttp.responseText;
// charger chaque ligne comme valeur dans un tableau (*type change* string-->array)            
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
// récupérer la liste des images jouées dans la console du navigateur (f12)                 
                    console.log(imgList[k]);
// Temps (ms) entre chaque image
                }, 5000 * k);
            }
        }    
    }        
}
