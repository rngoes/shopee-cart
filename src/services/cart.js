// Adiciona item no carrinho
async function addItem(userCart, item){
userCart.push(item)
}

//Calcular total
async function calculateTotal(userCart) {
    console.log("\nShopee Cart Total is:")
    console.log(userCart.reduce((total, item) => total + item.subtotal(), 0));
}

//Deletar item do carrinho
async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);

    if (index !== -1) {
        userCart.splice(index, 1);
    }
}

//Remover um item 
async function removeItem(userCart, item) {
    const indexFound = userCart.findIndex((p) => p.name === item.name);

    if (indexFound == -1) {
        console.log("Item não encontrado");
        return;
    }

    if (userCart[indexFound].quantity > 1) {
        userCart[indexFound].quantity -= 1;
        return;
    }

    if (userCart[indexFound].quantity == 1) {
        userCart.splice(indexFound, 1);
        return;
    }
}


async function displayCart(userCart){
    console.log("\nShopee cart list:");
    userCart.forEach((item, index) => {
        console.log(`${index +1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal: R$ ${item.subtotal()}`)
    });
}

export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displayCart
}