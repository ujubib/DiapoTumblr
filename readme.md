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
    <body onload="sliding()">
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
