import { deleteDoc, doc, addDoc, collection, getDocs, where, query, updateDoc} from "firebase/firestore";
import myDB from "./DB";

const productsCollection = "products";

/** ///////////// **/
/** SHOW PRODUCTS **/
/** ///////////// **/
const getAllProducts = async (myCategory) => {
    const result = [];

    let myQuery;
    if (myCategory) {
        myQuery = query(collection(myDB, productsCollection), where("category", "==", myCategory));
    } else {
        myQuery = collection(myDB, productsCollection);
    }

    await getDocs(myQuery)
        //.then & .catch tager ét paramter som er en callback funktion
        .then((allProducts) => {
            allProducts.forEach((product) => {
                //Super grim data, vi "spreader" product.data og tilføjer et id og gemmer så alle dokumenterne med et id igen i en ny liste.
                result.push({
                    ...product.data(),
                    id: product.id,
                });
            });
        }).catch(() => {
            console.log("getAllProducts fejlede");
        });

    return result;
}

/** //////////// **/
/** ADD PRODUCTS **/
/** //////////// **/
const addNewProduct = async (title, frontImage, description, price, category) => {

    await addDoc(collection(myDB, productsCollection), {
        title,
        frontImage,
        description,
        price,
        category,
    }).catch((e) => {
        console.error("Error adding document: ", e);
    });
}


/** ///////////// **/
/** EDIT PRODUCTS **/
/** ///////////// **/
const editProduct = async (productId, changedObject) => {
    await updateDoc(doc(myDB, productsCollection, productId), changedObject)
}

/** /////////////// **/
/** DELETE PRODUCTS **/
/** /////////////// **/
const deleteProduct = async (productId) => {
    await deleteDoc(doc(myDB, productsCollection, productId))
}

export default {
    getAllProducts,
    addNewProduct,
    editProduct,
    deleteProduct,
}
