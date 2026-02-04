function toggleMenu() {
  const menu = document.getElementById("menu-lateral");
  menu.style.right = menu.style.right === "0px" ? "-260px" : "0px";
}



  
  let lastScroll = 0;
  const header = document.getElementById('header');
  const delta = 8;      // sensibilidade (quanto maior, mais suave)
  const headerHeight = header.offsetHeight;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (Math.abs(currentScroll - lastScroll) <= delta) return;

    if (currentScroll > lastScroll && currentScroll > headerHeight + 40) {
      header.classList.add('header-hide');
    } else if (currentScroll < lastScroll) {
      header.classList.remove('header-hide');
    }

    lastScroll = currentScroll;
  });

  
  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    // no topo
    if (currentScroll <= 50) {
      header.classList.remove("show");
      header.classList.remove("hide");
      return;
    }

    // rolando para baixo
    if (currentScroll > lastScroll) {
      header.classList.add("hide");
      header.classList.remove("show");
    } 
    // rolando para cima
    else {
      header.classList.add("show");
      header.classList.remove("hide");
    }

    lastScroll = currentScroll;
  });

