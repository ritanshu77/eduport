class controller{
    constructor(){
        return{
            HomePage:this.HomePage.bind(this),

        }
    }
    async HomePage(req,res,next){
        try{
            res.render('homepage');
        }catch(error){
            console.log(error)
        }
    }
}

module.exports=new controller();