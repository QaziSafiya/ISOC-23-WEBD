// let navbarMenu = document.querySelector(".navbar-menu");
// let dropdownIsOpen = false;

// // Handle dropdown menu toggle
// navbarMenu.addEventListener("click", (event) => {
//   if (event.target.classList.contains("dropdown-toggler")) {
//     let target = document.querySelector(`#${event.target.dataset.dropdown}`);

//     if (target) {
//       if (target.classList.contains("show")) {
//         target.classList.remove("show");
//         dropdownIsOpen = false;
//       } else {
//         target.classList.add("show");
//         dropdownIsOpen = true;
//       }
//     }
//   }
// });

// // Handle closing dropdowns if a user clicks outside
// document.body.addEventListener("click", (event) => {
//   if (dropdownIsOpen) {
//     navbarMenu.querySelectorAll(".dropdown").forEach((dropdown) => {
//       let targetIsDropdown = dropdown == event.target;
//       let clickedOnDropdownToggle =
//         event.target.classList.contains("dropdown-toggler");

//       if (clickedOnDropdownToggle) {
//         return;
//       }

//       if (!targetIsDropdown && !dropdown.contains(event.target)) {
//         dropdown.classList.remove("show");
//       }
//     });
//   }
// });

// // Open links in mobiles
// function handleSmallScreens() {
//   document.querySelector(".navbar-toggler").addEventListener("click", () => {
//     if (!navbarMenu.classList.contains("active")) {
//       navbarMenu.classList.add("active");
//     } else {
//       navbarMenu.classList.remove("active");
//     }
//   });
// }

// handleSmallScreens();

// search functionality
function filter() {
  let filter = document.getElementById("find").value.toUpperCase();
  let item = document.querySelectorAll(".card");
  let l = document.getElementsByTagName("h2");

  for (var i = 0; i <= l.length; i++) {
    let a = item[i].getElementsByTagName("h2")[0];
    let value = a.innerHTML || a.innerText || a.textContent;
    if (value.toUpperCase().indexOf(filter) > -1) {
      item[i].style.display = "";
    } else {
      item[i].style.display = "none";
    }
  }
}

//  filter functionality

function loading() {
  const button = document.querySelectorAll(".btnselect");
  const card = document.querySelectorAll(".column");

  button.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      e.preventDefault();
      const filter = e.target.dataset.filter;
      card.forEach((store) => {
        if (filter === "all") {
          store.style.display = "block";
        } else {
          if (store.classList.contains(filter)) {
            store.style.display = "block";
          } else {
            store.style.display = "none";
          }
        }
      });
    });
  });
}
loading();

const toggledark = document.getElementById("toggledark");
const heading = document.querySelector("head");

toggledark.addEventListener("click", () => {
  if (document.body.style.backgroundColor == "white") {
    document.body.style.backgroundColor = "black";

    document.body.style.color = "white";

    toggledark.textContent = "🌔";
  } else {
    document.body.style.backgroundColor = "white";

    document.body.style.color = "red";

    toggledark.textContent = "🌞";
  }
});
