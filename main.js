var btnGenerate = document.getElementById('start');
var txtNumber = document.getElementById('number');
var letters = ["images/A.jpg","images/B.jpg","images/C.jpg","images/D.jpg",
    "images/E.jpg","images/F.jpg","images/G.png","images/H.jpg","images/I.png",
    "images/J.jpg","images/K.png","images/L.jpg","images/M.gif","images/N.png",
    "images/O.png","images/p.jpg","images/Q.jpg","images/R.jpg","images/S.png",
    "images/T.png","images/U.png","images/V.png","images/W.png","images/X.jpeg"
    ,"images/Y.png","images/Z.jpg"
];
var btnsContainer = document.getElementById('let');
var img = document.getElementById('img');
// console.log(letters[0].substr(7,1));
// console.log(letters);
/**
 * handel the btn whene click
 * 
 */
btnGenerate.addEventListener('click',function(){
    btnsContainer.innerHTML = "";
    let num = validNumber(txtNumber.value );
    if(!num){
        alert("Enter A Vaild Number in Range 1 -> 26");
        return ;
    }
    var indexs = generatIndexs(num);
    console.log(indexs);
    for(var i=0;i<indexs.length;i++){
        console.log(indexs[i]+"  "+letters[indexs[i]]);
        let node = document.createElement('button');
        node.setAttribute('class','btn');
        let txt = document.createTextNode(letters[indexs[i]].substr(7,1));
        node.appendChild(txt);
        let hidden = document.createElement('input');
        hidden.setAttribute('hidden','"true"');
        hidden.setAttribute('name',letters[indexs[i]]);
        //getAttribute
        node.appendChild(hidden);
        node.addEventListener('click',function(e){
            // alert(node.textContent);
            // img.setAttribute('src',e.target.firstChild.getAttribute('name'));
            let path = (e.target.firstChild.nextSibling.getAttribute('name'));
            img.setAttribute('src',path);
            img.setAttribute('style','imgStyle');
        });
        btnsContainer.appendChild(node);
    }
});



/**
 * 
 * @param {range of random numbers } range 
 */
function generatIndexs(range){
    var arr = []
    for(var i=0;i<range;i++){
        let num = Math.ceil(Math.random()*(26-1)+0);
        if(num in arr){
            console.log(num);
            i--;
            continue;
            
        }
        
        console.log("num "+num);
        arr.push(num);
    }
    return arr;
}


/**
 * test Validation Of number in range 1 -> 26 
 * @param {int} num 
 */
function validNumber(num){
    let pattern = /[0-9]+/;
    let validNum = pattern.test(num);
    if(!validNum){
        return false;
    }
    num = parseInt(num);
    if(num<1 || num > 26)
        return false;
    return num;
}