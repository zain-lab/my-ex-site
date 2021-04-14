
var animalContainer = document.getElementById("animal-info");
var btn = document.getElementById("btn");
 btn.addEventListener("click", function(){


    var ourRequest = new XMLHttpRequest();
ourRequest.open('GET','http://127.0.0.1:8087/api/GetAllData.php ');
ourRequest.onload = function(){

   var ourData=JSON.parse( ourRequest.responseText);
   console.log(ourData);
   renderHTML(ourData);

};
ourRequest.send();

 });
 function renderHTML(data){
    var htmlString = "";
     for(i = 0 ; i < data.length ; i++){
         htmlString += "<p>" +  data[i].id + "is aimal" +  data[i].name+  ".</p>";
     }


 }
