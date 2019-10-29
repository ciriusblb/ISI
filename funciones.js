(function() {
    
    
    var myTabs = document.querySelectorAll("ul.isi__tabs > li");
    function myTabClicks(tabClickEvent) {
        for (var i = 0; i < myTabs.length; i++ ) {
            myTabs[i].classList.remove("isi__tab_active");
        }
        var clickedTab = tabClickEvent.currentTarget;
        clickedTab.classList.add("isi__tab_active");
        tabClickEvent.preventDefault();
        var myContentPanes = document.querySelectorAll(".isi__tab_pane");
        for ( var i = 0; i < myContentPanes.length; i++) {
            myContentPanes[i].classList.remove("active");
        }
        var anchorReference = tabClickEvent.target;
        var activePaneId = anchorReference.getAttribute("href");
        var activePane = document.querySelector(activePaneId);
        activePane.classList.add("active");
    }
    for (var i = 0; i < myTabs.length; i++) {
		myTabs[i].addEventListener("click", myTabClicks)
	}
    
    
    
    var myLaboTabs = document.querySelectorAll("ul.isi__labotabs > li");
    function myLaboTabClicks(tabClickEvent) {
        for (var i = 0; i < myLaboTabs.length; i++ ) {
            myLaboTabs[i].classList.remove("isi__active");
        }
        var clickedLaboTab = tabClickEvent.currentTarget;
        clickedLaboTab.classList.add("isi__active");
        tabClickEvent.preventDefault();
        var myContentLaboPanes = document.querySelectorAll(".isi__laboPane");
        for ( var i = 0; i < myContentLaboPanes.length; i++) {
            myContentLaboPanes[i].classList.remove("isi__pane_active");
        }
        var anchorLaboReference = tabClickEvent.target;
        var activeLaboPaneId = anchorLaboReference.getAttribute("href");
        var activeLaboPane = document.querySelector(activeLaboPaneId);
        activeLaboPane.classList.add("isi__pane_active");
    }
    for (var j = 0; j < myLaboTabs.length; j++) {
		myLaboTabs[j].addEventListener("click", myLaboTabClicks)
	}
    
    
    var menu = document.getElementById("isi__navbar");
    var btnMenu = document.getElementById("isi__btnMenu");
    function playMenu() {
        if (menu.classList.contains('isi__navbar_hide')) {
            console.log("hola");
            menu.classList.remove("isi__navbar_hide");
          } else {
              console.log("adios");
            menu.classList.add("isi__navbar_hide");
          }
    }
    
    btnMenu.addEventListener("click", playMenu);
    
    
    
}());