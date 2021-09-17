# Diaporama de mon Tumblr

la fermeture de Tumbview m'a obligé à faire ça une fois le deuil passé...

## Liste des urls des images
Récupérée via le logiciel xxxxx qui génère un fichier `.txt` avec une url par ligne :

- `list.txt`

## [[index.html]]

```html
<!DOCTYPE html>
<html>
    
    <head>
        <meta charset="utf-8" />
        <title>La Fausse Sceptique - Diaporama</title>
        <link rel="stylesheet" media="screen" type="text/css" href="css/diaporama.css"/>
        <script type="text/javascript" src="js/diaporama.js"></script>
    </head>
    
    <body onload="sliding()">
        
        <div id="cadre">
            <img id="affiche" src=""/>
        </div>
    
        
        <p id="legende">Images curated on <a class="lienLegende" href="https://sceptique.tumblr.com" target="_blank">Tumblr - La fausse sceptique</a> by <a class="lienLegende" href="https://uju-11ty.netlify.app/" target="_blank">UjuBib</a>. Current image : <a id="viewLink" class="lienLegende" href="" target="_blank"></a></p>

    </body>

</html>
```

## [[css/diaporama.css]]

```css
body {
    background-color: #660033;
}
#cadre {
    position: fixed;
    height: 100%;
    width: 100%;
}
#affiche {
    position:fixed;
    top: 5%;
    bottom: 5%;
    left: 0;
    right: 0;
    height: 90%;
    width: auto;
    margin:auto;
    border: 1em solid #ffcce6;
    border-radius: 1em;
}
#legende {
    position:absolute;
    bottom:0;
    left:5px;
    color: pink;
    font-family: monospace;
    font-size: 0.8em;
}
a.lienLegende, a.lienLegende:visited {
    color: grey;
    text-decoration: none;
    font-style: italic;
}
a.lienLegende:hover {
    color:khaki;
}
```

## [[js/diaporama.js]]

```js
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

```
