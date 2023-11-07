function openMobileMenu(){
   document.querySelector("body").classList.toggle("mobile-menu-open");
}

function openSubMenu(btn){
   btn.closest('.menu-item-has-children').classList.add('open-submenu');
}

function closeSubMenu(btn){
   btn.closest('.open-submenu').classList.remove('open-submenu');
}

// Add SubMenu Toggle Button
let subMenuToggler = document.createElement('button');
subMenuToggler.innerHTML = `<i class="fa-light fa-angle-right"></i>`;
subMenuToggler.classList.add('sub-menu-toggler');
subMenuToggler.classList.add('d-lg-none');
subMenuToggler.setAttribute("onclick", "openSubMenu(this)");
document.querySelector("nav.nav-menu > ul > li.menu-item-has-children").appendChild(subMenuToggler);