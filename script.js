const filterContainer = document.querySelector(".gallery-filter"),
    galleryItems = document.querySelectorAll(".gallery-item");

filterContainer.addEventListener("click", (Event) => {
    if (Event.target.classList.contains("filter-item")) {
        // deactivate existing  active 'filter-item'
        filterContainer.querySelector(".active").classList.remove("active");
        // activate new 'filter-item'
        Event.target.classList.add("active");
        const filterValue = event.target.getAttribute("data-filter");
        // console.log(filterValue);
        galleryItems.forEach((item) => {
            if (item.classList.contains(filterValue) || filterValue === 'all') {
                item.classList.remove("hide");
                item.classList.add("show");

            }
            else {
                item.classList.remove("show");
                item.classList.add("hide");
            }
        });
    }   
});


let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    // console.log(pos);
    let calcHeight = document.documentElement.
        scrollHeight - document.documentElement.clientHeight;
    let calcScrollValue = Math.round((pos * 100) / calcHeight);
    // console.log(calcScrollValue);
    if (pos > 100) {
        scrollProgress.style.display = "grid";
    }
    else {
        scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click",() => {
    document.documentElement.scrollTop = 0;
    });
    
    scrollProgress.style.background = 'conic-gradient (#03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)';
};
window.onscroll = calcScrollValue;
window.onload = calcScrollValue;


