# Squad Page RMR

Dit is het ontwerp van de squad page gemaakt door Renzo, Miel en Riley.

## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Gebruik](#gebruik)
  * [Kenmerken](#kenmerken)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving

Voor Sprint 1 is er de opdracht gegeven om een Squad Page te ontwerpen in groepen van drie personen. De reden voor deze Squad Page is om de visitekaartjes en interessante plekken op de Amstel Campus te laten zien op een interactieve manier.

Met behulp van foto's is er laten zien wat onze gedachtegang was tijdens dit project en welke ontwerpen er zijn gemaakt. 

De pagina is responsive ontworpen en dus bereikbaar voor mobiele, tablet, en desktop gebruikers. 

Hier staat de website: https://renzowille.github.io/squad-page-rmr/finalindex.html

<img width="1439" alt="squadpage" src="https://github.com/user-attachments/assets/b17df2d0-29f7-4fb2-a3b5-435c5b91b696">

_Layout van de homepage_


## Gebruik

De Squad Page kan op deze manier gebruikt worden: 

KLik op de foto van de persoon van wiens visitekaartje je wilt zien, dit brengt je naar een ander tablad waar je het visitekaartje kan zien en gebruiken. Zoals je ziet, zijn alle foto's in een carousel gezet waardoor de doorloop makkelijk en clean is. Hover over een foto, en de carousel stopt met draaien voor een optimale gebruikservaring.

Voor de map van de Amstel Campus, hover over een punt op de kaart om meer informatie te kunnen zien over een interessante plek op de campus waar gewerkt kan worden.


### Visitekaartjes

<img width="1440" alt="Scherm­afbeelding 2024-09-19 om 10 43 08" src="https://github.com/user-attachments/assets/21fa9bef-c3ab-4146-a3d5-46ce249219dd">


### Amstel Campus

Bij dit deel van de squad page kunnen bezoekers verschillende interessante plekken vinden op de Amstel Campus. Door over een bepaalde locatie te hoveren komt er bepaalde informatie vrij om te kunnen lezen.

![image](https://user-images.githubusercontent.com/1391509/195097814-cd3b3468-815e-478d-ada3-464c36a5ca68.png)



## Kenmerken

De website is gebouwd met [HTML](#html) en [CSS](#CSS), en [JavaScript](#JavaScript).

### HTML

Hieronder staat de basis structuur uitgelegd met de setting in de [HEAD](#HEAD) en opmaak van de [BODY](#BODY):

#### HEAD
  
  In de `<head>` worden twee CSS file geladen. De algemene styleguide met basis settings en kleuren. 
  En een local CSS file met specifieke styling voor deze pagina. 
  ```html
<link rel="stylesheet" href="finalstyles.css">   
  ```

  In de `<head>` wordt een extern font geladen: De Open Sans
  
  ```html
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400&amp;display=swap" rel="stylesheet">
  ```

#### BODY

  De structuur van de body is [HEADER](#HEADER), [MAIN](#MAIN) en [FOOTER](#FOOTER): 
  
  ##### HEADER
  In de header staat de H1 titel en eerste paragraaf. In de eerste paragraaf wordt gellinkt naar de contactgegevens en routebeschrijving.
  
  ##### MAIN
  In de main staan twee sections, de section contactgegevens met een id en een section voor de routebeschrijving met een id. De id's worden gebruikt om vanuit de eerste paragraaf te linken. 
 ```html
      <section id="contactgegevens">

      <section id="routebeschrijving">
  ```
 
  ##### FOOTER
  
  In de `<footer>` staan alle microsites van FDND. 
  
  
### CSS

In de CSS staat een `scroll-behavior: smooth;` op de html voor een animatie als iemand op de links contactgegevens en routebeschrijving klikt. Dit zijn anchors naar de sections met de id. 

#### Font-size

De `<h1>` font-size staat op 2.4em en line-height van 120%. 
De `<section>` font-size staat op 1.2em .

In de CSS zijn 3 minor breakpoints voor Small-screens:

#### @media 20em

Minor breakpoint met o.a. een aangepaste `<h1>` font-size van 1.4em, omdat de titel anders te breed is voor een small-screen.

#### @media 25em

Minor breakpoint met een aangepaste `<h1>` font-size van 1.6em, om de titel zo groot mogelijk te maken zonder dat die te breed wordt.


#### @media 30em

Margin en padding aanpassingen voor smalle schermen. 

Het verplichte HVA en FDND logo worden 70% kleiner getoond en links gepositioneerd, omdat die anders te breed worden voor een small-screen.
```css
      body:before, body:after{
        transform: scale(.7);
        left: -3rem;
      }
```
### JavaScript



## Bronnen 

Renzo: https://renzowille.github.io/squad-page-rmr/indexrenzo.html
Riley: https://renzowille.github.io/squad-page-rmr/docs/index.html
Miel: https://renzowille.github.io/squad-page-rmr/indexMiel.html


  
## Licentie

![GNU GPL V3](https://www.gnu.org/graphics/gplv3-127x51.png)

This work is licensed under [GNU GPLv3](./LICENSE).
