var mongoose=require("mongoose");
var Mekan=mongoose.model("mekan"); //nesne büyük harfle yazılır.





const cevapOlustur=function(res,status,content) {  //res okuycak json contenti basıcak
    res.status(status).json(content);

}
const yorumEkle=function(req,res) { // req,res/istek ve cevap 
    cevapOlustur(res,200,{"durum":"başarılı"});
}
const yorumSil=function(req,res) { // req,res/istek ve cevap 
    cevapOlustur(res,200,{"durum":"başarılı"});
}
const yorumGuncelle=function(req,res) { // req,res/istek ve cevap 
    cevapOlustur(res,200,{"durum":"başarılı"});
}
const yorumGetir=function(req,res) { // req,res/istek ve cevap 
    cevapOlustur(res,200,{"durum":"başarılı"});
}

module.exports={
    cevapOlustur,
    yorumEkle,
    yorumSil,
    yorumGuncelle,
    yorumGetir
}