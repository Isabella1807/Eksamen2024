import myDB from './DB';
import { collection, query, where, getDocs, addDoc } from 'firebase/firestore';

const footerInformation = "footerInfo";

const getAllInformation = async (myInfo) => {
    const result = [];

    let infoQuery;
    if (myInfo) {
        infoQuery = query(collection(myDB, footerInformation), where("category", "==", infoQuery));
    } else {
        infoQuery = collection(myDB, footerInformation);
    }

    await getDocs(infoQuery)
        .then((allInformation) => {
            allInformation.forEach((information) => {
                result.push({
                    ...information.data(),
                    id: information.id,
                });
            });
        }).catch(() => {
            console.log("getAllIformation fejlede");
        });
    return result;
}

const addNewInformation = async (footerTitle, footerHours, phone, /*imageName, ext*/) => {
    await addDoc(collection(myDB, footerInformation), {
        footerTitle,
        footerHours,
        phone,
        /*imageName,
        ext*/
    }).then((a) => {
        console.log("document added: ", a);
    }).catch((e) => {
        console.log("error adding document; ", e);
    });
}

export default {
    getAllInformation,
    addNewInformation
};

