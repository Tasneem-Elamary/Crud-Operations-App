import sql from '../DB/connection.js'


export const addProduct = (req, res, next) => {
    const { name,  description, userID } = req.body
    sql.execute(`insert into products (productName , productDesc , userID) 
    values('${name}' , '${description}' , ${userID})`,
        (err, result) => {
            if (err) {
                res.json({ message: "Query error", err })
            } else {
                if (result.affectedRows) {
                    res.json({ message: "Done", result })

                } else {
                    res.json({ message: "In-valid data", result })
                }
            }
        })
}


export const getProduct = (req, res) => {
    const { id } = req.params
    sql.execute(`select 
    p.productName , p.productDesc 
     from products as p inner join users as u on u.id = p.userID 
    where p.id = ${id}`, (err, result) => {
        if (err) {
            res.json({ message: "Query error", err })
        } else {
            res.json({ message: "Done", result })

        }
    })
}

export const getProductByName = (req, res) => {
    const { searchKey } = req.query
        if(searchKey){
            console.log(searchKey);
            sql.execute(`select  p.id,
             p.productName , p.productDesc  
             from products as p inner join users as u on u.id = p.userID  WHERE p.productName like '${searchKey}%' `,(err,result)=>{
                if(err){
                    res.json({message:"Query error", err})
                }
                else{
                    res.json({ message: "Done",  result })
                }
            })
        } else {
            sql.execute(`select  p.id,
              p.productName , p.productDesc  
             from products as p inner join users as u on u.id = p.userID `, (err, result) => {
        if (err) {
            res.json({ message: "Query error", err })
        } else {
            res.json({ message: "Done", result })

        }
    })
        }
        
        }


export const updateProduct = (req, res) => {
    const { id } = req.params
    const { name, description } = req.body
    sql.execute(`update products set productName='${name}' ,
    productDesc ='${description}' 
     where id=${id}`, (err, result) => {
        if (err) {
            res.json({ message: "Query error", err })
        } else {
            res.json({ message: "Done", result })

        }
    })
}


export const deleteProduct = (req, res) => {

    const { id } = req.params
    sql.execute(`delete from products where id = ${id}`, (err, result) => {
        if (err) {
            res.json({ message: "Query error", err })
        } else {
            if (result.affectedRows) {
                res.json({ message: "Done", result })

            } else {
                res.json({ message: "In-valid product ID"})

            }
        }
    })
}