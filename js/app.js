// this is the modal listener 
function addModalListener(){
    $(".bg-click").click(function(e){
        
    });
};



// there are the initlisteners that contain the callout listener that allows the user to continue past loggin in
function initListeners(){

    $("#submit").click(function(e) {
        e.preventDefault()

        let text = $("#callout-text").val();
        gsap.to($(".modal"), {ease: "elastic.in", scale: 0, duration: 2, onComplete: showAlert, onCompleteParams: [text]});
        console.log("Signing In! Please wait one sec.")
    })
    
    $("#showModal").click(function(e) {
       gsap.to($(".modal"), {ease: "elastic.out", scale: 1, duration: 2});
        addModalListener();
    });
    $(window).on("hashchange", route);
    route();
};
// this is the alert for the user for when they sign in 
function showAlert(info) {
    console.log("Welcome back " + info)
    $("callout-text").val("")
};

function route() {
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#/", "");

    if (pageID == "") {
        model.placeholder("home")
    } else {
        model.placeholder(pageID)
    }
}


$(document).ready(function () {
    gsap.set($(".modal"), {scale: 0});
    initListeners();
    model.placeholder("home")
});