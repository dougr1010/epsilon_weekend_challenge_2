console.log('Hello Epsilon!');

$(document).ready(function(){
console.log("I'm still running...")

var apikey = 'c44505900db04fb90a007914d6bc84e6'; // API key
var myCost = 0;

$(document).ready(function() {


    getTents();
    getFurniture();
    getKitchen();
    displayCost();
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
    });
}

function displayTents(response) {
    //console.log(response);

    for(var i=0;i<response.Result.length;i++){
         //console.log(i + ":  " + response.Result[i].Name);  
    }
  
    var $myData =   "<div class='content' " +
                        "<p> <b>Product Name: </b>" + response.Result[34].Name + "<br/>" +
                             "<b>Description: </b>" + response.Result[34].DescriptionHtmlSimple + "<br/>" +
                             "<b>Price: $</b>" + response.Result[34].SuggestedRetailPrice + "<br/>" +
                             "<img src = '" + response.Result[34]['Images'].PrimaryMedium + "'</p>" +
                        "<p> <b>Product Name: </b>" + response.Result[17]['Name'] + "<br/>" +
                            "<b>Description: </b>" + response.Result[17].DescriptionHtmlSimple + "<br/>" +
                             "<b>Price: $</b>" + response.Result[17].SuggestedRetailPrice + "<br/>" +
                            "<img src = '" + response.Result[17]['Images'].PrimaryMedium + "'</p>" + 
                    "</div>";
    myCost += parseFloat(response.Result[34].SuggestedRetailPrice);
    myCost += parseFloat(response.Result[17].SuggestedRetailPrice);
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
    });
}

function displayFurniture(response) {
    //console.log(response);

    for(var i=0;i<response.Result.length;i++){
         //console.log(i + ":  " + response.Result[i].Name);  
    }
  
    var $myData =   "<div class='content' " +
                           "<p> <b>Product Name: </b>" + response.Result[1].Name + "<br/>" +
                         "<b>Description: </b>" + response.Result[1].DescriptionHtmlSimple + "<br/>" +
                         "<b>Price: $</b>" + response.Result[1].SuggestedRetailPrice + "<br/>" +
                         "<img src = '" + response.Result[1]['Images'].PrimaryMedium + "'</p>" +
                    "<p> <b>Product Name: </b>" + response.Result[4]['Name'] + "<br/>" +
                        "<b>Description: </b>" + response.Result[4].DescriptionHtmlSimple + "<br/>" +
                         "<b>Price: $</b>" + response.Result[4].SuggestedRetailPrice + "<br/>" +
                        "<img src = '" + response.Result[4]['Images'].PrimaryMedium + "'</p>";
                    "</div>";
    myCost += parseFloat(response.Result[1].SuggestedRetailPrice);
    myCost += parseFloat(response.Result[4].SuggestedRetailPrice);
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
    });
}

function displayKitchen(response) {
    //console.log(response);

    for(var i=0;i<response.Result.length;i++){
         //console.log(i + ":  " + response.Result[i].Name);  
    }
  
    var $myData =   "<div class='content' " +
                        "<p> <b>Product Name: </b>" + response.Result[23].Name + "<br/>" +
                             "<b>Description: </b>" + response.Result[23].DescriptionHtmlSimple + "<br/>" +
                             "<b>Price: $</b>" + response.Result[23].SuggestedRetailPrice + "<br/>" +
                             "<img src = '" + response.Result[23]['Images'].PrimaryMedium + "'</p>" +
                        "<p> <b>Product Name: </b>" + response.Result[35]['Name'] + "<br/>" +
                            "<b>Description: </b>" + response.Result[35].DescriptionHtmlSimple + "<br/>" +
                             "<b>Price: $</b>" + response.Result[35].SuggestedRetailPrice + "<br/>" +
                            "<img src = '" + response.Result[35]['Images'].PrimaryMedium + "'</p>" + 
                        "<p> <b>Product Name: </b>" + response.Result[3]['Name'] + "<br/>" +
                            "<b>Description: </b>" + response.Result[3].DescriptionHtmlSimple + "<br/>" +
                             "<b>Price: $</b>" + response.Result[3].SuggestedRetailPrice + "<br/>" +
                            "<img src = '" + response.Result[3]['Images'].PrimaryMedium + "'</p>" + 
                    "</div>";
    myCost += parseFloat(response.Result[23].SuggestedRetailPrice);
    myCost += parseFloat(response.Result[35].SuggestedRetailPrice);
    myCost += parseFloat(response.Result[3].SuggestedRetailPrice);
    console.log("myCost-kitchen: " + myCost);
    $('.kitchen-placeholder').append($myData);

    var $myData =   "<div class='content' " +
                        "<p> <b>Product Name: </b>" + response.Result[17].Name + "<br/>" +
                             "<b>Description:</b> " + response.Result[17].DescriptionHtmlSimple + "<br/>" +
                             "<b>Price: $" + response.Result[17].SuggestedRetailPrice + "<br/>" +
                             "<img src = '" + response.Result[17]['Images'].PrimaryMedium + "'</p>" +
                    "</div>";
    myCost += parseFloat(response.Result[17].SuggestedRetailPrice);
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