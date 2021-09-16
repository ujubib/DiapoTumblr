# Diaporama de mon Tumblr

la fermeture de Tumbview m'a obligé faire ça...

## Liste des urls
`list.txt`

## index.html

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>La Fausse Sceptique - Diaporama</title>
        <link rel="stylesheet" media="screen" type="text/css" href="css/diaporama.css"/>
        <script type="text/javascript" src="js/diaporama.js"></script>
    </head>
    <body onload="initSliding()">
        <div id="cadre">
            <img id="affiche" src=""/>
        </div>
    </body>
</html>
```

## css

```css
body {
    background-color: IndianRed;
}
#cadre {
    height: 100%;
    width: 100%;
}
#affiche {
    position:absolute;
    top: 5%;
    bottom: 5%;
    left: 0;
    right: 0;
    height: 90%;
    width: auto;
    margin:auto;
}
```

## js

```js


function sliding(){
    var xmlhttp=new XMLHttpRequest();
    xmlhttp.open("GET","liste.txt",true);
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xmlhttp.send();
    xmlhttp.onreadystatechange=function(){
        if (xmlhttp.readyState==4 && xmlhttp.status==200){
            var imgList=xmlhttp.responseText;
             imgList=imgList.split("\n");
            
            var j, x, i;
            for (i = imgList.length - 1; i > 0; i--) {
                j = Math.floor(Math.random() * (i + 1));
                x = imgList[i];
                imgList[i] = imgList[j];
                imgList[j] = x;
            }

            for (let k of imgList) {
                 setTimeout(() => {
                    var image = document.getElementById('affiche');
                    image.src = imgList[k];
                }, 4000 * k);
            }
        }    
    }        
}


function initSliding{
    var tablevue = new Array();
    tablevue[0]="x";
    sliding (tablevue);
}

var index = "0";
do {
    index = Math.floor(Math.random() * imgList.length);
} while (vus.includes("index")=true);



```