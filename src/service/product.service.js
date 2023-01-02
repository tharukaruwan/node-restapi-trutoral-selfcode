
let data = [{ id: 1, name: "name1"}, { id: 2, name: "name2" }];

function createProduct({ id, name }) {
    data.push({ id, name });
    return { id, name };
}

function editProduct({ id, name }) {
    const newProductList = data.map((product) => {
        if (product.id == id) {
            return {
                ...product,
                name: name,
            }
        } else return product;
    });
    data = newProductList;
    return { id, name };
}

function getProducts() {
    return data;
}

function getProduct({ id }) {
    return data.filter((product) => (product.id == id));
}

function deleteProduct({ id }) {
    const index = data.findIndex(product => product.id == id);
    if (index) {
        data.splice(index, 1);
        return true;
    } else return false;
}

module.exports = { getProducts, getProduct, editProduct, deleteProduct, createProduct };