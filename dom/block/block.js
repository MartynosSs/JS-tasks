const quantitySelector = document.querySelector(".quantity-selector");
const colorSelector = document.querySelector(".color-selector");
const blockContainer = document.querySelector(".blocks");

const createMarkup = quantity => {
    let markup = "";

    for (let i = 0; i < quantity; i++) {
        const block = document.createElement("div");
        block.className = "item";
        block.innerText = i + 1;


        markup += block.outerHTML;
    }

    return markup;
}


quantitySelector.addEventListener("click", e => {
    const quantity = e.target.value;
    const markup = createMarkup(quantity);

    blockContainer.innerHTML = markup;
});

const colorTheBlock = (block, color) => {
    block.style.backgroundColor = color;
}

let changed = false;


colorSelector.addEventListener("change", e => {
    const color = e.target.value;
    const items = blockContainer.querySelectorAll(".item");

    changed = !changed;

    for (let i = 0; i < items.length; i++) {
        const currentBlock = items[i];
        const blockNumber = i + 1;
        let colorToApply = ""

        if (changed) {
            colorToApply = blockNumber % 2 != 0 ? color : "#fff";
        } else {
            colorToApply = blockNumber % 2 == 0 ? color : "#fff";

        }

        colorTheBlock(currentBlock, colorToApply)
    }

});