function bill(){
    var cname = document.getElementById("cname").value;
    var dalQuan = parseInt(document.getElementById("dalQuant").value);
    var subjiQuant = parseInt(document.getElementById("sbjiQuant").value);
    var rotiQuant = parseInt(document.getElementById("rotiQuant").value);
    var chavalQuant = parseInt(document.getElementById("chavalQuant").value);
    document.getElementById("scname").innerHTML = cname;
    document.getElementById("sdlq").innerHTML = dalQuan;
    document.getElementById("sdala").innerHTML = dalQuan*40;
    document.getElementById("sSubjiQuantity").innerHTML = subjiQuant;
    document.getElementById("sSubjiQuant").innerHTML = subjiQuant*50;
    document.getElementById("sRotiQuantity").innerHTML = rotiQuant;
    document.getElementById("sRotiQuant").innerHTML = rotiQuant*5;
    document.getElementById("sChavalQuantity").innerHTML = chavalQuant;
    document.getElementById("sChavalQuant").innerHTML = chavalQuant*60;
    
    var totalA = (dalQuan*40)+(subjiQuant*50)+(rotiQuant*5)+(chavalQuant*60);
    var gstA = totalA* 0.18;
    document.getElementById("total").innerHTML = totalA;
    document.getElementById("gst").innerHTML = gstA;
    document.getElementById("finalTotal").innerHTML = totalA+gstA;
}