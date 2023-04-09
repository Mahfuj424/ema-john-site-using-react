import { getShoppingCart } from "../components/utilities/fakedb";

const cartProductLoader = async () => {
    const loadedProduct = await fetch('products.json');
    const products = await loadedProduct.json();

    const storedCart = getShoppingCart();

    const saveCart = [];
    
    for (const id in storedCart) {
        const addedProduct = products.find(pd => pd.id === id);
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        saveCart.push(addedProduct)
    }
    
    return saveCart;
}


export default cartProductLoader;