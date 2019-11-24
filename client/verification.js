var $password2 = $("#password2");
var $password = $("#password");
var $username = $("#username");
var $name = $("#name");
var $surname = $("#surname");
var $email = $("#email");
var userAllowed = false;

$("form span").hide();

function isPasswordValid() {
    return $password.val().length > 7;
}

function arePasswordsMatching() {
    return $password.val() === $password2.val();
}

function canSubmit() {
    return isPasswordValid() && arePasswordsMatching() && isUserAllowed() && !areEmpty();
}

function areEmpty() {
    if($("#name").val().length == 0 ||
        $("#surname").val().length == 0 ||
        $("#email").val().length == 0 ||
        $("#password").val().length == 0)
        return true;
    else
        return false;
}

function passwordEvent() {
    if (isPasswordValid()) {
        $password.next().hide();
    } else {
        $password.next().show();
    }
}

function confirmPasswordEvent() {
    if (arePasswordsMatching()) {
        $password2.next().hide();
    } else {
        $password2.next().show();
    }
}

function userEvent() {
    if (isUserAllowed()) {
        $username.next().hide();
    } else {
        $username.next().show();
    }
}

function isUserAllowed() {
    userRequest();
    return userAllowed;
}
function userRequest() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        var DONE = 4;
        var OK = 404;
        if (xhr.readyState == DONE) {
            if (xhr.status == OK) {
                userAllowed = true;
            }
            else {
                userAllowed = false;
            }
        }
    }

    link = 'http://localhost:5000/user/' + $username.val();
    xhr.open('GET', link, false);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send();
}
function enableSubmitEvent() {
    $("#submit").prop("disabled", !canSubmit());
}


$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);
$password2.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);
$username.focus(userEvent).keyup(userEvent).keyup(enableSubmitEvent());
$name.focus(areEmpty).keyup(areEmpty).keyup(enableSubmitEvent());
$surname .focus(areEmpty).keyup(areEmpty).keyup(enableSubmitEvent());
$email.focus(areEmpty).keyup(areEmpty).keyup(enableSubmitEvent());

enableSubmitEvent();

$("#submit").click(function () {
    var mydata = { firstname: $("#name").val(), lastname: $("#surname").val(), login: $username.val(), password: $password.val()};

    $.ajax({
        url: 'http://localhost:5000/register',
        type: 'POST',
        data: JSON.stringify(mydata),
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        async: false,
        success: function() {
            window.location.href = "http://localhost:8080/login.html";
            alert("Signed Up Successfully");
        },
        error: function () {
            alert("Mistakes were made");
        }
    });
})

