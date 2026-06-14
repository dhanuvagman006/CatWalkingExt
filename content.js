window.addEventListener("load", () => {

  // ==========================
  // WALKING CAT (left → right)
  // ==========================
  const walkingCat = document.createElement("img");

  // gif source
  walkingCat.src = chrome.runtime.getURL("walking-cat.gif");

  // styling
  walkingCat.style.position = "fixed";
  walkingCat.style.bottom = "2px";
  walkingCat.style.left = "-150px";   // start outside screen
  walkingCat.style.width = "100px";
  walkingCat.style.zIndex = "2147483647";
  walkingCat.style.pointerEvents = "none";

  // add to page
  document.body.appendChild(walkingCat);

  // movement variable
  let position = -150;

  // animation function
  function walkCat() {
    position += 0.7;

    // move toward right
    walkingCat.style.left = position + "px";

    // reset after leaving screen
    if (position > window.innerWidth) {
      position = -150;
    }

    requestAnimationFrame(walkCat);
  }

  walkCat();



//   const cornerCat = document.createElement("img");

//   // second gif
//   cornerCat.src = chrome.runtime.getURL("sleeping-cat.gif");

//   // fixed bottom-left
//   cornerCat.style.position = "fixed";
//   cornerCat.style.bottom = "5px";
//   cornerCat.style.left = "1px";
//   cornerCat.style.width = "120px";
//   cornerCat.style.zIndex = "2147483647";
//   cornerCat.style.pointerEvents = "none";

//   // add to page
//   document.body.appendChild(cornerCat);

});