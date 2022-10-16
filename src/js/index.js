const tabs = document.querySelectorAll(".tab");

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {

        if(tab.classList.contains("selected")) {
            return;
        }

        tabSelected(tab);

        showTheInformationTab(tab);

    });
});

function tabSelected(tab) {
    const tabSelected = document.querySelector(".tab.selected");
    tabSelected.classList.remove("selected");

    tab.classList.add("selected");
}

function showTheInformationTab(tab) {
    const informationSelected = document.querySelector(".information.selected");
    informationSelected.classList.remove("selected");

    const tabInfoElementId = `information-${tab.id}`
        
    const informationToBeShown = document.getElementById(tabInfoElementId);
        
    informationToBeShown.classList.add("selected");
}