function vegetarianMenu(menu){
    const menuNode = document.querySelector("#menu");
    const vegarianOptions = menu.filter(option => option.isVegetarian === true);

    vegarianOptions.forEach(option => {
        let dish = document.createElement('li');
        dish.textContent = option.name;
        menuNode.appendChild(dish);
    });
}

const menu = [
    {
        name: "Chicaken parmensean",
        isVegetarian: false,
    },
    {
        name: "Stuffed shells",
        isVegetarian: true,
    },
    {
        name: "Spaghetti and meatballs",
        isVegetarian: false,
    },
    {
        name: "Tiramisu",
        isVegetarian: true,
    },
];

vegetarianMenu(menu);