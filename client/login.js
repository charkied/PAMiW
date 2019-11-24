var $password = $("#password");
var $username = $("#username");

$("form span").hide();


// function canSubmit() {
//     return !areEmpty();
// }
//
// function areEmpty() {
//     if($("#username").val().length == 0 ||
//         $("#password").val().length == 0)
//         return true;
//     else
//         return false;
// }
//
// function enableSubmitEvent() {
//     $("#submit").prop("disabled", !canSubmit());
// }
//
// $password.focus(enableSubmitEvent).keyup(enableSubmitEvent()).keypress(enableSubmitEvent());
// $username.focus(enableSubmitEvent).keyup(enableSubmitEvent()).keypress(enableSubmitEvent());
//
// enableSubmitEvent();

$("#submit").click(function () {
    var mydata = {login: $username.val(), password: $password.val()};
    $.ajax({
        url: 'http://localhost:5000/login',
        type: 'POST',
        data: JSON.stringify(mydata),
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        async: false,
        success: function(data) {
            alert("Logged In Successfully");
            localStorage.setItem('token', data['access_token']);
            console.log(localStorage.getItem('token'));
            window.location.href = "http://localhost:8080/menu.html";
        },
        error: function () {
            alert("Mistakes were made");
        }
    });
})

$("#register").click(function () {
    window.location.href = "http://localhost:8080/";
})