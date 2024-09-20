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

<img width='1440' alt='schermafbeelding' src='https://github.com/RenzoWille/squad-page-rmr/blob/main/Screenshot%202024-09-20%20084119.png?raw=true'>



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

#### BODY

  De structuur van de body is [HEADER](#HEADER), [CAROUSEL](#CAROUSEL): 
  
  ##### HEADER
  In de header staat de H1 titel.
  
  ##### CAROUSEL
  In de carousel staan de verschillende classes de squad page aan moet voldoen om de carousel werkend te maken. Dit wordt gedaan door: 
 ```html
       <div class="carousel">
        <div class="carousel-wrapper">
            <div class="carousel-slide">
  ```
  
### CSS

In de CSS staat een `carousel-slide;` op de html voor een animatie wanneer de pagina wordt ingeladen dat de carousel naar links blijft bewegen door de carousel leven in te blazen.

```css
     .carousel-slide {
    display: flex;
    flex: 1 0 calc(100% / 33); /* Elke afbeelding neemt 1/33 van de wrapper */
    margin-right: 20px;
}
```
### JavaScript

In de JavaScript staat de 'carousel-slide' toepassing die zorgt dat de carousel draait.

(foto van JavaScript)

Bij de achtergrond van de tweede pagina zijn sterren op de achtergrond toegepast. Deze sterren staan elke keer op een andere plek doordat de functie 'random' is gebruikt.

<img width='1440' alt='schermafbeelding' src='https://github.com/RenzoWille/squad-page-rmr/blob/main/Screenshot%202024-09-20%20084449.png?raw=true)'>


## Bronnen 

Renzo: https://renzowille.github.io/squad-page-rmr/indexrenzo.html
Riley: https://renzowille.github.io/squad-page-rmr/docs/index.html
Miel: https://renzowille.github.io/squad-page-rmr/indexMiel.html

Final:


  
## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
