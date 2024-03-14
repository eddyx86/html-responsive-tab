!function(){

  const tabHeadingAll = document.querySelectorAll(".tabs-header .tab");
  const tabContentAll = document.querySelectorAll(".tabs-content .tab-content");

  const removeAllActive = function(){
    const fn = node => node.classList.remove("active");
    return ()=>{
      tabContentAll.forEach(fn);
      tabHeadingAll.forEach(fn);
    };
  }();

  tabHeadingAll.forEach((h, i) => {
    h.addEventListener("click", () => {
      removeAllActive();
      tabContentAll[i].classList.add("active");
      h.classList.add("active");
    });
  });

}()

