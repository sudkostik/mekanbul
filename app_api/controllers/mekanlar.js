var mongoose=require("mongoose");
var Mekan=mongoose.model("mekan"); //nesne büyük harfle yazılır.

const cevapOlustur=function(res,status,content) {  //res okuycak json contenti basıcak
    res.status(status).json(content);

}

const mekanlariListele=function(req,res) { // req,res/istek ve cevap 
    cevapOlustur(res,200,{"durum":"başarılı"});
}
const mekanEkle=function(req,res) { // req,res/istek ve cevap 
    cevapOlustur(res,200,{"durum":"başarılı"});
}
const mekanGetir=function(req,res) { // req,res/istek ve cevap 
    cevapOlustur(res,200,{"durum":"başarılı"});
}
const mekanGuncelle=function(req,res) { // req,res/istek ve cevap 
    cevapOlustur(res,200,{"durum":"başarılı"});
}
const mekanSil=function(req,res) { // req,res/istek ve cevap 
    cevapOlustur(res,200,{"durum":"başarılı"});
}

module.exports={
    mekanEkle,
    mekanGetir,
    mekanGuncelle,
    mekanSil,
    mekanlariListele
}
