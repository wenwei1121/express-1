const { db } = require("../firebase")
const { collection, doc, getDocs, addDoc, deleteDoc } = require("@firebase/firestore")

exports.getFavorites = async () => {
    const favorite = []
    const querySnapShot = await getDocs(collection(db, "searchFavorites"))
    querySnapShot.forEach(doc => {
        favorite.push({
            id: doc.id,
            ...doc.data(),
        })
    })
    return favorite
}

exports.addFavorite = async (parameter) => {
    await addDoc(collection(db, "searchFavorites"), parameter)
}

exports.deleteFavorite = async (id) => {
    await deleteDoc(doc(db, "searchFavorites", id))
}