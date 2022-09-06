const { db } = require("../firebase")
const { collection, doc, getDocs, setDoc, addDoc, deleteDoc } = require("@firebase/firestore")

exports.getMembers = async () => {
    const members = []
    const querySnapShot = await getDocs(collection(db, "members"))
    querySnapShot.forEach(doc => {
        members.push({
            id: doc.id,
            ...doc.data(),
            isEditting: false
        })
    })
    return members
}

exports.addMember = async (parameter) => {
    await addDoc(collection(db, "members"), parameter)
}

exports.updateMember = async (id, other) => {
    await setDoc(doc(db, "members", id), other)
}

exports.deleteMember = async (id) => {
    await deleteDoc(doc(db, "members", id))
}