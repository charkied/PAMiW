$.ajaxSetup({
    headers:{
        'Authorization': 'Bearer ' + localStorage.getItem('token')
        // "Authorization": "Bearer {}".format(localStorage.getItem('token'))
    }
});

var $password = $("#password");
var $username = $("#username");

$("form span").hide();


$("#upload").click(function () {
    window.location.href = "http://localhost:8080/upload.html";
})

$("#logout").click(function () {
    $.ajax({
        url: 'http://localhost:5000/logout',
        type: 'DELETE',
        async: false,
        success: function() {
            alert("Logged out Successfully");
            window.location.href = "http://localhost:8080/login.html";
        },
        error: function (data) {
            console.log(data);
            alert("Mistakes were made");
            window.location.href = "http://localhost:8080/menu.html";
        }
    });
    window.location.href = "http://localhost:8080/login.html";
})

$("#download").click(function () {
    // var download = require('./download.min');
    var url = `http://localhost:5000/download`;
    var res = fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        }).then(response => response.blob())
        .then(function (blob) {
            console.log(blob);
            saveAs(blob, 'download.pdf');
        });
        // var blob =  res.blob();
        // saveAs(res, "downloaded.pdf");
})
