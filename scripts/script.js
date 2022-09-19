function carrousel(deCarrousel) {
  const groupTarget = 16;
  var groupCount = 0;

  const groups = deCarrousel.children;
  const naarLinks = 1;
  const naarRechts = -1;

  function iniCarrousel() {
    for (let i = 0; i < groups.length; i++) {
      setIndex(groups[i], i + 1);
      groups[i].querySelector("img").addEventListener("click", klikOpFoto);
    }
  }

  document
    .querySelector(".group-section > button:first-of-type")
    .addEventListener("click", function () {
      draaiGroup(naarLinks);
    });

  document
    .querySelector(".group-section > button:last-of-type")
    .addEventListener("click", function () {
      draaiGroup(naarRechts);
    });

  function klikOpFoto() {
    let theGroup = this.closest("[data-index]");
    let newNumber = parseInt(theGroup.getAttribute("data-index"));

    if (newNumber != 1) {
      let aantalGroups = groups.length;
      let aantalStappen = newNumber - 1;
      let richting = naarRechts;

      if (newNumber - 1 > Math.ceil(aantalGroups / 2)) {
        richting = naarLinks;
        aantalStappen = aantalGroups - aantalStappen;
      }

      draaiGroup(richting);

      if (aantalStappen > 1) {
        let teller = 1;
        var draaien = setInterval(function () {
          draaiGroup(richting);
          teller++;
          if (teller === aantalStappen) {
            clearInterval(draaien);
          }
        }, 75);
      }
    }
  }

  function draaiGroup(richting) {
    let carrousel = document.querySelector(".group-section");
    let huidigeBasisHoek = parseInt(getComputedStyle(carrousel).getPropertyValue("--carrouselHoek"));
    let nieuweBasisHoek = huidigeBasisHoek + richting;
    carrousel.style.setProperty("--carrouselHoek", nieuweBasisHoek);

    for (let i = 0; i < groups.length; i++){
        let newIndex = parseInt(groups[i].getAttribute("data-index")) + richting;
        if (newIndex < 1) {
            newIndex = groups.length;
        } else if (newIndex > groups.length) {
            newIndex = 1;
        }
        setIndex(groups[i], newIndex);
    }
  }

  function setIndex(group, index){
    group.setAttribute("data-index", index);
  }

  function getGroupsTarget(){
    return(groupTarget);
  }

  function getGroupsCount(){
    return(groupCount);
  }

  carrousel.getGroupsTarget = getGroupsTarget;
  carrousel.getGroupsCount = getGroupsCount;

  iniCarrousel();
}

window.addEventListener('load', function(){
    carrousel(document.querySelector("#group-section ul"));
});
