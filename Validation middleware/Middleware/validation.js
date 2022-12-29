const validation = (req,res,next) => {
        let {Id,Name,Rating,Description,Genre,Cast} = req.body;
        if(Id && Name && Rating && Description && Genre && Cast){
            if(typeof Id ==='number' && typeof Name ==='string' && typeof Description==='string' && typeof Genre ==='string' && typeof Rating ==='number' && Array.isArray(Cast) &&  Cast.every(ele=> typeof ele ==='string')){
               next();
            }else{
                res.status(400).send({
                    message : 'Validation Failed. Please try'
                })
            }
        }else{
            res.status(400).send({
                message : 'Validation Failed. Please try'
            })
        }
}

module.exports = validation