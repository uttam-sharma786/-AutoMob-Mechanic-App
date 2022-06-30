function myfunction(){
    location.assign("http://127.0.0.1:5500/AutoMob-Mechanic/services.html"); // assign method load new document
} 

function pop_up() {
    alert("Invalid creditales");
}

var xhr = new XMLHttpRequest();

xhr.open('GET','users.json','true'); // which means load it asynchronously
xhr.responseType = 'text';
xhr.send();

xhr.onload = function() {
    if(xhr.status === 200){
        var myStuff = JSON.parse(xhr.responseText);
        console.log(myStuff[0].first);
    } // end of the if 
} // end of the funciton