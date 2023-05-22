var x = document.getElementById("search_input");

x.addEventListener("focus", focusOn, true);
x.addEventListener("blur", blurOn, true);

function focusOn()
{
    document.getElementById("searchBack").style.opacity = "0.8";
    document.getElementById("searchBack").style.boxShadow = "0 0 2px 2px #33FFFF";
    document.getElementById("search_submit").style.visibility = "visible";
}

function blurOn()
{
    document.getElementById("searchBack").style.opacity = "0.5";
    document.getElementById("searchBack").style.boxShadow = "none";

    var y = document.forms["search_form"]["search_input"].value;
    if (y == null || y == "")
    {
        document.getElementById("search_submit").style.visibility = "hidden";
    }
    else
    {
        document.getElementById("search_submit").style.visibility = "visible";
    }
}

function start_search()
{
    var y = document.forms["search_form"]["search_input"].value;
    var new_url = 'https://cn.bing.com/search?q=' + y;
    location = new_url;
    return false;
    //window.open(new_url);

    input.addEventListener("keyup", function(event) 
    {
        event.preventDefault();
        if (event.keyCode === 13) 
        {
            document.getElementById("search_submit").click();
        }
    });
}