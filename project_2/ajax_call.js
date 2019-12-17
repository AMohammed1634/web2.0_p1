setInterval( function (){
    var data=getLocalStorage();
    console.log(data)
$.ajax({
       "type":'POST',
       "url":"http://localhost/P2/Server.php",
       "data":{
           'oblects': {

                "data":data
           }

       },

       "success":function(response){
           console.log("Server Replid "+response);
           // console.log(typeof response);
           localStorage.clear();
           // console.log(server_data);
       }
    })},5000 );
console.log(getLocalStorage());


function getLocalStorage(){
    // console.log("ASD")
    $object = [];
    if(localStorage.getItem("btnLetterClick") !== null){
        var $data = JSON.parse(localStorage.getItem("btnLetterClick"));
        for(var i=0;i<$data.btnLetterClick.length;i++){
            $object.push($data.btnLetterClick[i]);
        }
        // $object.push($data.btnLetterClick);
    }
    if(localStorage.getItem("btnGenerateClick") !== null){
        var $data = JSON.parse(localStorage.getItem("btnGenerateClick"));
        for(var i=0;i<$data.btnGenerateClick.length;i++){
            $object.push($data.btnGenerateClick[i]);
        }
        // $object.push($data.btnGenerateClick);
    }
    if(localStorage.getItem("load") !== null){
        var load = JSON.parse(localStorage.getItem("load"));
        for ( var i=0;i<load.load.length;i++){
            $object.push(load.load[i]);
        }
        // $object.push(load.load);
    }
    if(localStorage.getItem("unload") !== null){

    }
    /**
     * 2D array $object
     */
    console.log("Before Send -- ");
    console.log($object);
    return $object;

}
