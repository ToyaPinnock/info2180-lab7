window.onload = function() {
    document.getElementById("lookup").addEventListener("click", function(e) {
        e.preventDefault();
        var http = new XMLHttpRequest();
        var input = document.getElementById("country").value;
        var url = "world.php?m=" + input;

        http.open("GET", url, true);

        http.onreadystatechange = function() {
            if (http.readyState == 4 && http.status == 200) {

            }
        }

        http.send();
    });

}