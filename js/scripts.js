function selectProjectType(e) {
    var elems = document.querySelectorAll("a.active");
    [].forEach.call(elems, function(el) {
    el.classList.remove("active");
    el.classList.add("header__nav__link");
    });
    e.target.className = "active";
  }
