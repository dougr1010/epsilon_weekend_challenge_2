console.log('Hello Epsilon!');

$(document).ready(function(){
console.log("I'm still running...")

var apikey = 'c44505900db04fb90a007914d6bc84e6'; // API key
var myCost = 0;

$(document).ready(function() {


    getTents();
    //getFurniture();
    //getKitchen();
    //displayCost();
});



//---------------------------------------------------------------------------------
function getTents(){

    $.ajax ({
        type: 'GET',
        dataType: 'jsonp',
        crossDomain: true,
        json: 'json_callback',
        url:'http://api.sierratradingpost.com/api/1.0/products/search~tents/?perpage=96&api_key=' + apikey
    }).done(function(response){
        //console.log(response);
        displayTents(response);
        getFurniture();
    });
}

function displayTents(response) {
    //console.log(response);

    //var tentIX=31; //31
    //var screenIX=9; //9
    var tentIX=null; //31
    var screenIX=null; //9
    
    for(var i=0;i<response.Result.length;i++){
         //console.log(i + ":  " + response.Result[i].Name);
         //console.log("resultID: " + response.Result[i].Id);
         if(response.Result[i].Id =="8026N") {tentIX = i};
         if(response.Result[i].Id =="JI984") {screenIX = i};
         //if((tentIX !=null) && (screenIX!=null)) break;
     }
     //console.log("tentIX: " + tentIX);
     //console.log("screenIX: " + screenIX);
  
    var $myData =   "<div class='content' " +
                        "<p> <b>Product Name: </b>" + response.Result[tentIX].Name + "<br/>" +
                             "<b>Description: </b>" + response.Result[tentIX].DescriptionHtmlSimple + "<br/>" +
                             "<b>Price: $</b>" + response.Result[tentIX].SuggestedRetailPrice + "<br/>" +
                             "<img src = '" + response.Result[tentIX]['Images'].PrimaryMedium + "'</p>" +
                        "<p> <b>Product Name: </b>" + response.Result[screenIX]['Name'] + "<br/>" +
                            "<b>Description: </b>" + response.Result[screenIX].DescriptionHtmlSimple + "<br/>" +
                             "<b>Price: $</b>" + response.Result[screenIX].SuggestedRetailPrice + "<br/>" +
                            "<img src = '" + response.Result[screenIX]['Images'].PrimaryMedium + "'</p>" + 
                    "</div>";
    myCost += parseFloat(response.Result[tentIX].SuggestedRetailPrice);
    myCost += parseFloat(response.Result[screenIX].SuggestedRetailPrice);
    console.log("myCost-tents: " + myCost);
    $('.tent-placeholder').append($myData);
    return;
}
//---------------------------------------------------------------------------------
function getFurniture(){

    $.ajax ({
        type: 'GET',
        dataType: 'jsonp',
        crossDomain: true,
        json: 'json_callback',
        url:'http://api.sierratradingpost.com/api/1.0/products/search~furniture/?perpage=96&api_key=' + apikey
    }).done(function(response){
        //console.log(response);
        displayFurniture(response);
        getKitchen();
    });
}

    var chairIX = null;
    var tableIX = null;

function displayFurniture(response) {
    //console.log(response);

    for(var i=0;i<response.Result.length;i++){
         //console.log(i + ":  " + response.Result[i].Name);  
         if(response.Result[i].Id =="98172") {chairIX = i};
         if(response.Result[i].Id =="2291F") {tableIX = i};
   }
  
    var $myData =   "<div class='content' " +
                           "<p> <b>Product Name: </b>" + response.Result[chairIX].Name + "<br/>" +
                         "<b>Description: </b>" + response.Result[chairIX].DescriptionHtmlSimple + "<br/>" +
                         "<b>Price: $</b>" + response.Result[chairIX].SuggestedRetailPrice + "<br/>" +
                         "<img src = '" + response.Result[chairIX]['Images'].PrimaryMedium + "'</p>" +
                    "<p> <b>Product Name: </b>" + response.Result[tableIX]['Name'] + "<br/>" +
                        "<b>Description: </b>" + response.Result[tableIX].DescriptionHtmlSimple + "<br/>" +
                         "<b>Price: $</b>" + response.Result[tableIX].SuggestedRetailPrice + "<br/>" +
                        "<img src = '" + response.Result[tableIX]['Images'].PrimaryMedium + "'</p>";
                    "</div>";
    myCost += parseFloat(response.Result[chairIX].SuggestedRetailPrice);
    myCost += parseFloat(response.Result[tableIX].SuggestedRetailPrice);
    console.log("myCost-furniture: " + myCost);
    $('.furniture-placeholder').append($myData);
}
//---------------------------------------------------------------------------------
function getKitchen(){

    $.ajax ({
        type: 'GET',
        dataType: 'jsonp',
        crossDomain: true,
        json: 'json_callback',
        url:'http://api.sierratradingpost.com/api/1.0/products/search~outdoor-cooking/?perpage=96&api_key=' + apikey
    }).done(function(response){
        //console.log(response);
        displayKitchen(response);
        displayCost();
    });
}

function displayKitchen(response) {
    //console.log(response);

    var stoveIX=null;
    var panIX=null;
    var sporkIX=null;
    var cornIX=null;
    for(var i=0;i<response.Result.length;i++){
        //console.log(i + ":  " + response.Result[i].Name);  
        if(response.Result[i].Id =="6770H") {stoveIX = i};
        if(response.Result[i].Id =="1962T") {panIX = i};
        if(response.Result[i].Id =="9058J") {sporkIX = i};
        if(response.Result[i].Id =="8592P") {cornIX = i};
    }
  

    var $myData =   "<div class='content' " +
                        "<p> <b>Product Name: </b>" + response.Result[stoveIX].Name + "<br/>" +
                             "<b>Description: </b>" + response.Result[stoveIX].DescriptionHtmlSimple + "<br/>" +
                             "<b>Price: $</b>" + response.Result[stoveIX].SuggestedRetailPrice + "<br/>" +
                             "<img src = '" + response.Result[stoveIX]['Images'].PrimaryMedium + "'</p>" +
                        "<p> <b>Product Name: </b>" + response.Result[panIX]['Name'] + "<br/>" +
                            "<b>Description: </b>" + response.Result[panIX].DescriptionHtmlSimple + "<br/>" +
                             "<b>Price: $</b>" + response.Result[panIX].SuggestedRetailPrice + "<br/>" +
                            "<img src = '" + response.Result[panIX]['Images'].PrimaryMedium + "'</p>" + 
                        "<p> <b>Product Name: </b>" + response.Result[sporkIX]['Name'] + "<br/>" +
                            "<b>Description: </b>" + response.Result[sporkIX].DescriptionHtmlSimple + "<br/>" +
                             "<b>Price: $</b>" + response.Result[sporkIX].SuggestedRetailPrice + "<br/>" +
                            "<img src = '" + response.Result[sporkIX]['Images'].PrimaryMedium + "'</p>" + 
                    "</div>";
    myCost += parseFloat(response.Result[stoveIX].SuggestedRetailPrice);
    myCost += parseFloat(response.Result[panIX].SuggestedRetailPrice);
    myCost += parseFloat(response.Result[sporkIX].SuggestedRetailPrice);
    console.log("myCost-kitchen: " + myCost);
    $('.kitchen-placeholder').append($myData);

    var $myData =   "<div class='content' " +
                        "<p> <b>Product Name: </b>" + response.Result[30].Name + "<br/>" +
                             "<b>Description:</b> " + response.Result[cornIX].DescriptionHtmlSimple + "<br/>" +
                             "<b>Price: $" + response.Result[cornIX].SuggestedRetailPrice + "<br/>" +
                             "<img src = '" + response.Result[cornIX]['Images'].PrimaryMedium + "'</p>" +
                    "</div>";
    myCost += parseFloat(response.Result[cornIX].SuggestedRetailPrice);
    console.log("myCost-food: " + myCost);
    $('.food-placeholder').append($myData);

}
//---------------------------------------------------------------------------------

function displayCost() {
    console.log("display myCost: " + myCost);
    $('.coin').append(myCost);
}
//---------------------------------------------------------------------------------



});