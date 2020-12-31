const menu = [
    {
        id: 1,
        title: "Potato Skins",
        category: "apps",
        price: "$6.99",
        img: "potato-skins-5.jpg",
        desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.`
    },
    {
        id: 2,
        title: "Nachos",
        category: "apps",
        price: "$12.99",
        img: "Nachos-LEAD-3.jpg",
        desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur quisquam.`
    },
];

//get all parent elements from html
const food = document.querySelector(".food");
const buttons = document.querySelector(".buttons");

//displays all item when page loads
window.addEventListener("DOMContentLoaded", function () {
    displayMenuItems(menu);
    displayMenuButtons();
  });

  function displayMenuItems(menuItems) {
      let displayMenu = menuItems.map(function (item) {
          //console.log(item);
      return `<article class="food-descript">
      <img src=${item.img} alt=${item.title} class="picture"/>
      <div class="information">
        <header>
        <h2>${item.title}</h2>
        <h2 class="price">${item.price}</h4>
        </header>
        <p class="text">
        ${item.desc}
        </p>
        </div>
        </article>`;
  });

    displayMenu = displayMenu.join("");
    //console.log(displayMenu);
    food.innerHTML = displayMenu;
  }
    function displayMenuButtons() {
        const categories = menu.reduce(
            function (values, item) {
                if (!values.includes(item.category)) {
                    values.push(item.category);
                }
                return values;
            },
            ["all"]
        );
        const categoryBtns = categories.map(function (category) {
            return `<button type="button" class="filter" data-id=${category}>
            ${category}</button>`;
        })
        .join("");

        buttons.innerHTML = categoryBtns;
        const filterBtns = buttons.querySelectorAll(".buttons");
        //console.log(buttons);

        filterBtns.forEach(function (btn){
            btn.addEventListener("click", function (e) {
                console.log(e.currentTarget.dataset);
                const category = e.currentTarget.dataset.id;
                const menuCategory = menu.filter(function (menuItem) {
                    //console.log(menuItem.category);
                    if(menuItem.category === category) {
                        return menuItem;
                    }
                });
                if (category ==="all") {
                    displayMenuItems(menu);
                } else {
                    displayMenuItems(menuCategory);
                }
            });
        });
    }
