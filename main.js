var btnGenerate = document.getElementById('start');
var txtNumber = document.getElementById('number');
var letters = ["images/A.jpg","images/B.jpg","images/C.jpg","images/D.jpg",
    "images/E.jpg","images/F.jpg","images/G.png","images/H.jpg","images/I.png",
    "images/J.jpg","images/K.png","images/L.jpg","images/M.gif","images/N.png",
    "images/O.png","images/P.jpg","images/Q.jpg","images/R.jpg","images/S.png",
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
// var btnGenerateClick = {
//     'btnGenerateClick':[

//     ]
// };
// localStorage.clear();
// window.localStorage.clear()
//setInterval( ()=> window.localStorage.clear() ,20000);
btnGenerate.addEventListener('click',function(e){

    btnsContainer.innerHTML = "";
    let num = validNumber(txtNumber.value );
    if(!num){
        alert("Enter A Vaild Number in Range 1 -> 26");
        return ;
    }

    if(localStorage.getItem('btnGenerateClick') !== null){
        //Is Stored In LocalStorage
        let str = "btn Generate IS  Clicked At "+new Date().toLocaleString()+
            " to generate "+num +" character";
        str = new eventOBJ(e.target,e.type,num) ;
        // console.log(str);
        let btnGenerateClick = JSON.parse(localStorage.getItem('btnGenerateClick'));
        // console.log(btnGenerateClick);
        btnGenerateClick.btnGenerateClick.push(str);
        // console.log(btnGenerateClick.btnGenerateClick[btnGenerateClick.btnGenerateClick.length-1]);
        localStorage.setItem('btnGenerateClick',JSON.stringify(btnGenerateClick));
        console.log(btnGenerateClick);
    }else {
        //Is Not Stored
        let str = "btn Generate IS  Clicked At "+new Date().toLocaleString()+
            " to generate "+num+" character";
        str = new eventOBJ(e.target,e.type,num) ;;
        console.log(str);
        var btnGenerateClick = {
            'btnGenerateClick':[

            ]
        };
        btnGenerateClick.btnGenerateClick.push(str);
        localStorage.setItem('btnGenerateClick',JSON.stringify(btnGenerateClick));
        console.log(btnGenerateClick);
    }

    
    var indexs = generatIndexs(num);
    // console.log(indexs);
    for(var i=0;i<indexs.length;i++){
        //  console.log(indexs[i]+"  "+letters[indexs[i]]);
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

            /**
             * store event to local storage
             */

            if(localStorage.getItem('btnLetterClick') !== null){
                //Is Stored In LocalStorage
                let str = "btn button  Clicked At "+new Date().toLocaleString()+
                    " to  "+e.target.firstChild.textContent +" character";
                // str = [new Date().toLocaleString() , e.target.firstChild.textContent ];
                str = new eventOBJ(e.target,e.type,e.target.firstChild.textContent );
                let btnLetterClick = JSON.parse(localStorage.getItem('btnLetterClick'));
                // console.log(btnGenerateClick);
                btnLetterClick.btnLetterClick.push(str);
                localStorage.setItem('btnLetterClick',JSON.stringify(btnLetterClick));
                console.log(btnLetterClick);
            }else {
                //Is Not Stored
                let str = "btn button  Clicked At "+new Date().toLocaleString()+
                    " to  "+e.target.firstChild.textContent +" character";
                // str = [new Date().toLocaleString() , e.target.firstChild.textContent ];
                str = new eventOBJ(e.target,e.type,e.target.firstChild.textContent );
                var btnLetterClick = {
                'btnLetterClick':[
    
                ]
                };
                btnLetterClick.btnLetterClick.push(str);
                localStorage.setItem('btnLetterClick',JSON.stringify(btnLetterClick));
                console.log(btnLetterClick);
            }
             /**
              * End 
              */

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
        //Math.floor(Math.random() * 26) + 1
        let num = Math.floor(Math.random()*(26-0)+0);
        if( arr.includes(num)){
            // console.log(num);
            i--;
            continue;
            
        }
        
        // console.log("num "+num);
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

window.onload = function (e){
    if(localStorage.getItem('load') !== null){
        //Is Stored In LocalStorage
        
        // let str = new Date().toLocaleString() ;
        str = new this.eventOBJ(e.target,e.type,"LOAD");
        let load = JSON.parse(localStorage.getItem('load'));
        // console.log(btnGenerateClick);
        load.load.push(str);
        localStorage.setItem('load',JSON.stringify(load));
        console.log(load);
    }else {
        //Is Not Stored
        // let str = new Date().toLocaleString() ;
        str = new this.eventOBJ(e.target,e.type,"LOAD");
        var load = {
        'load':[

        ]
        };
        load.load.push(str);
        localStorage.setItem('load',JSON.stringify(load));
        console.log(load);
    }
}



window.onunload = function (e){
    if(localStorage.getItem('unload') !== null){
        //Is Stored In LocalStorage
        
        // let str = new Date().toLocaleString() ;
        str = new this.eventOBJ(e.target,e.type,"unload");
        let unload = JSON.parse(localStorage.getItem('unload'));
        // console.log(btnGenerateClick);
        unload.unload.push(str);
        localStorage.setItem('unload',JSON.stringify(load));
        console.log(load);
    }else {
        //Is Not Stored
        // let str = new Date().toLocaleString() ;
        str = new this.eventOBJ(e.target,e.type,"unload");
        var unload = {
        'unload':[

        ]
        };
        unload.unload.push(str);
        localStorage.setItem('unload',JSON.stringify(load));
        console.log(unload);
    }
}





function eventOBJ (target,type,name){
    this.dNow = new Date().toLocaleString();
    this.target = target;
    this.type = type;
    this.name = name;
}

