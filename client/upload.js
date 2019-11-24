$.ajaxSetup({
    headers:{
        'Authorization': 'Bearer ' + localStorage.getItem('token')
        // "Authorization": "Bearer {}".format(localStorage.getItem('token'))
    }
});
$("#form").submit(function (e) {
    e.preventDefault();

    var file = document.getElementById('file').files[0];

    $.ajax({
        url: 'http://localhost:5000/upload',
        type: 'POST',
        data: file,
        // data: form.serialize(),
        contentType: 'multipart/form-data',
        async: false,
        processData: false,
        success: function() {
            alert("File Send Successfully");
            window.location.href = "http://localhost:8080/upload.html";
        },
        error: function (data) {
            console.log(data);
            alert("Token not valid");
            window.location.href = "http://localhost:8080/login.html";
        }
    });
})

$("#back").click(function () {
    window.location.href = "http://localhost:8080/menu.html";
})