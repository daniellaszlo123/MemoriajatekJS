window.addEventListener("load", init);

function ID(elem) {
    return document.getElementById(elem);
}

function $(elem) {
    return document.querySelectorAll(elem);
}
const kepTomb=["kepek/kep1.jpg", "kepek/kep1.jpg", "kepek/kep2.jpg", "kepek/kep3.jpg", 
    "kepek/kep4.jpg", "kepek/kep5.jpg", "kepek/kep6.jpg", "kepek/kep7.jpg", "kepek/kep2.jpg", 
    "kepek/kep3.jpg", "kepek/kep4.jpg", "kepek/kep5.jpg", "kepek/kep6.jpg", "kepek/kep7.jpg"];
const hatter="kepek/hatter.jpg";
const kivalasztottTomb=[];
//console.log(kepTomb.join(", "));

var txt="";
function init() {

    kepTomb.forEach(function(elem, index){
        txt+=`<img id="${index}" src="${hatter}" alt="kep">`;
    });
    //console.log(txt);
    ID("kepek").innerHTML=txt;

    const kepElemek=$("#kepek img")
    //console.log(kepElemek);
    kepElemek.forEach(function (elem) {
        elem.addEventListener("click", megfordit);
    });
}

function megfordit(event) {
    event.target.removeEventListener("click", megfordit);

    console.log(event.target.id);
    event.target.src=kepTomb[event.target.id];

    kivalasztottTomb.push(Number(event.target.id));
    console.log(kivalasztottTomb);


    let elso=kivalasztottTomb[0];
    let masodik=kivalasztottTomb[1];
    if (kivalasztottTomb.length===2) {
        if (kepTomb[elso]===kepTomb[masodik] /*&& !(elso === masodik)*/) {
            console.log("eltalaltad");
            kivalasztottTomb.splice(0);
        }else{
            setTimeout(() => {
                /*let elsoKiv=ID(kivalasztottTomb[0]);
                let masodikKiv=ID(kivalasztottTomb[1]);
                console.log("nem jo");
                elsoKiv.src=hatter;
                masodikKiv.src=hatter;
                kivalasztottTomb.splice(0, 2);*/
                kivalasztottTomb.forEach(function (elem) {
                    ID(elem).src=hatter;
                    ID(elem).addEventListener("click", megfordit);
                })
                kivalasztottTomb.splice(0);
            }, 1000);
        }
    }


}




