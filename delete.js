const dbConnect = require("./mongodb")

const deleteData = async () => {
    const db = await dbConnect();

    const result = await db.deleteOne({ name: "m 40" })
    console.log(result);
}

deleteData()