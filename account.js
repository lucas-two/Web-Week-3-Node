module.exports = function(app,path){

    app.get('/accounts',function(req,res){
    let filepath = path.resolve('./www/accounts.html');
    res.sendFile(filepath);

    });
}