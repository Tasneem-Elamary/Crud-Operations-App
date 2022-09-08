import sql from '../DB/connection.js'


    export const signUp = (req, res, next) => {
        const{name,email,password}=req.body
        sql.execute(`select * from users where email='${email}' `,
            (err, result) => {
                if (err) {
                    res.json({ message: "Query error", err })
                } else {
                    if (result.length ==1 ) {
                        res.json({ message: "Already-exist", result })
    
                    } else {
                        sql.execute(`INSERT INTO users (userName,email,password) VALUES ('${name}', '${email}','${password}')`,
                        (err,result)=>{
                            if(err){
                                res.json({message:"Query error", err})
                            }
                            else{
                                res.json({ message: "Done",  result })
                                
                            }
                        })
    
                    }
                }
            })
    }
    

    export const signIn = (req, res, next) => {
        const { email, password } = req.body
        sql.execute(`select * from users where email='${email}' and password='${password}'`,
            (err, result) => {
                if (err) {
                    res.json({ message: "Query error", err })
                } else {
                    if (result.length ==1 ) {
                        res.json({ message: "Done", result })
    
                    } else {
                        res.json({ message: "In-valid account" })
    
                    }
                }
            })
    }
    


    