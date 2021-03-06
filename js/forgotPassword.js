//Closes popup when cancel button is clicked
$(document).on("click", "#forgot-cancel-button", function () {
    $("#forgot-password-popup").popup("close")

})
//Closes popup when close button is clicked
$(document).on("click", "#forgot-close-button", function () {
    $("#forgot-password-confirm-popup").popup("close")

})
//Asks the database to send a password reset email
$(document).on("click", "#forgot-confirm-button", function () {
    if(forgotPasswordValidate()){
        firebase.auth().sendPasswordResetEmail($("#forgot-password-input").val()).then(function(){
            $("#forgot-password-popup").popup("close")
            setTimeout(function(){
                $("#forgot-password-confirm-popup").popup("open")
            }, 300)
        })
    }

})

//Validates the user's email
function forgotPasswordValidate(){
    var emailRegex = /^[A-Z0-9_.+-]+@[A-Z0-9_.+-]+\.[A-Z]{2,}$/i;
    var check = true

    if (emailRegex.test($("#forgot-password-input").val())) {
        $("#forgot-password-input-label .invalid-input-star").css("display", "none");
    }
    else {
        $("#forgot-password-input-label .invalid-input-star").css("display", "inline");
        check = false;
    }

    return check
}