const dbConnect = require("./mongodb")


const update = async () => {
    const db = await dbConnect();

    const result = await db.updateOne({ name: "note 13 " }, { $set: { name: "note 15 max" } })




    console.log(result);

}

update()