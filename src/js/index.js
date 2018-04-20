//Slider 
$(document).ready(function () {
    $('.Slide-Container').slick({
        autoplay: true,
        dots: true,
        arrows: false,
        fade: true,
        mobileFirst: true,
        speed: 3000
    });
});

//40 Collection Fetch Request -- Brings Data To Page
function get40Collection() {
    fetch("http://localhost:3000/db/db.json").then(function (data) {
        return data.json();
    }).then(function (data) {
        for (var i = 0; i < 10; i++) {
            var model = data.models[i].model;
            var price = "$" + data.models[i].price;
            var sqft = data.models[i].sqft + " SQ.FT";
            var indDiv = "<div class=Individual> <img src=src/assets/model-fpo.jpg /> <div class=Individual-Info> <p id=Model>" + model + "</p> <p id=Price>" + price + "</p> </div> <p>" + sqft + "</p> </div>";
            $('.Forty-Collection').append(indDiv);
        }
    }).catch(function (err) {
        console.log(err);
    });
}

//Semi-Detached Collection Fetch Request -- Brings Data To Page 
function getSemiCollection() {
    fetch("http://localhost:3000/db/db.json").then(function (data) {
        return data.json();
    }).then(function (data) {
        for (var i = 10; i < 15; i++) {
            var model = data.models[i].model;
            var price = "$" + data.models[i].price;
            var sqft = data.models[i].sqft + " SQ.FT";
            var indDiv = "<div class=Individual> <img src=src/assets/model-fpo.jpg /> <div class=Individual-Info> <p id=Model>" + model + "</p> <p id=Price>" + price + "</p> </div> <p>" + sqft + "</p> </div>";
            $('.Semi-Collection').append(indDiv);
        }
    }).catch(function (err) {
        console.log(err);
    });
}

//Calling The Fetch Requests / Changing Styles 
$('#Floor-Plans-Btn').click(function () {
    $(".Floor-Plans-Btn").css({
        "background-color": "#009ba5",
        "color": "white"
    })
    $('.Placeholder-Collection').fadeOut();
    $('.Collection-Title').fadeIn("slow");
    get40Collection();
    getSemiCollection();
    $('.Forty-Collection').fadeIn("slow");
    $('.Semi-Collection').fadeIn("slow");
    $('.Forty-Collection').css("display", "flex");
    $('.Semi-Collection').css("display", "flex");
});