const dbConnect = require("./mongodb") 

const insert = async () =>{

    const db = await dbConnect();
    const result = await db.insertMany(
        [{
        name:"reno Z2",
        brand:"OPPO",
        price:200,
        category:"mobile"
    },{
        name:"redmi 2",
        brand:"Xiomi",
        price:200,
        category:"mobile"
    },{
        name:"s23 ultra",
        brand:"samsung",
        price:200,
        category:"mobile"
    }]
    )
    console.log(result);
}

insert()