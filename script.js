h = document.createElement("h2")
h.setAttribute("class", "h2")
h.innerHTML = ("pagination")
document.body.append(h)




p = document.createElement("div");
p.setAttribute("class", "container")

ok = document.createElement("textarea")
ok.setAttribute("type", "text")
ok.setAttribute("id", "good")
document.body.append(ok)

/*tex=document.createElement("textarea")
document.body.append(tex)*/

pag = document.createElement("button");
pag.setAttribute("class", "pag")
pag.innerHTML = ("1")


pag2 = document.createElement("button");
pag2.setAttribute("class", "pag")
pag2.innerHTML = ("2")

pag3 = document.createElement("button");
pag3.setAttribute("class", "pag")
pag3.innerHTML = ("3")

pag4 = document.createElement("button");
pag4.setAttribute("class", "pag")
pag4.innerHTML = ("4")

pag5 = document.createElement("button");
pag5.setAttribute("class", "pag")
pag5.innerHTML = ("5")

pag6 = document.createElement("button");
pag6.setAttribute("class", "pag")
pag6.innerHTML = ("6")

pag7 = document.createElement("button");
pag7.setAttribute("class", "pag")
pag7.innerHTML = ("7")


p.append(pag, pag2, pag3, pag4, pag5, pag6, pag7)
document.body.append(p)





/*
async function val(){
    let valu=await fetch("https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json")
  let mes=await valu.json();
  m=document.getElementsByClassName("pag")
  for(let i=0;i<m.length;i++)
{
m[i].addEventListener("click",bon)
function bon()
{
good.value=mes[i].email
console.log(good)
}
}
}*/



/*
l = document.getElementsByClassName("pag")
for (let i = 0; i < l.length; i++) {
    l[i].addEventListener("click", bon)

    function bon() {
        m = l[i].innerHTML
        console.log(m)
    }
} */

async function pa() {
    let valu = await fetch("https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json")
    let mes = await valu.json();
    l = document.getElementsByClassName("pag")
    for (let i = 0; i < l.length; i++) {
        l[i].addEventListener("click", pa)

        {
            good.value += mes[l[i].innerHTML].email
            console.log(good.value)
        }
    }
    /*    for (let i = 0; i < mes.length; i++) {
            go = mes[m].email;
            console.log(go)
        }*/
}
pa()