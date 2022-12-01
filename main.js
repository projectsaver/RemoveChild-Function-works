let itemList = [{
        itemName: "Veg Biryani",
        uniqueNo: 1,
    },
    {
        itemName: "Chicken 65",
        uniqueNo: 2,
    },
    {
        itemName: "Paratha",
        uniqueNo: 3,
    }
];

let unOrderList = document.getElementById("unOrderList");


function addListItemsWithButtons(items) {
    let createdivEle = document.createElement("div");
    createdivEle.id = "div" + itemList.uniqueNo;
    createdivEle.classList.add("m-2", "d-flex", "flex-row");
    unOrderList.appendChild(createdivEle);

    let createLiItems = document.createElement("li");
    createLiItems.id = "item" + items.uniqueNo;
    createLiItems.classList.add("d-flex", "flex-column", "justify-content-center");
    createLiItems.textContent = items.itemName;
    createdivEle.appendChild(createLiItems);

    let createButton = document.createElement("button");
    createButton.id = "button" + items.uniqueNo;
    createButton.classList.add("btn", "btn-danger", "m-2");
    createButton.textContent = "Cancel";
    createdivEle.appendChild(createButton);

    createButton.onclick = function() {
        let deleteButton = document.getElementById(createdivEle.id);
        unOrderList.removeChild(deleteButton);
    };
}
for (let items of itemList) {
    addListItemsWithButtons(items);
}
