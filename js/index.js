    function addPadding(id){
        var element = document.getElementById(id);
        var style = window.getComputedStyle(element);
        var padding = style.paddingTop;
        document.getElementById(id).style.paddingTop = "62px";
        setTimeout(function(){
          document.getElementById(id).style.paddingTop = "0";
        }, 3000);
    }
    function openNav() {
        document.getElementById("sideNav").style.width = "100%";
    }

    function closeNav() {
        if (screen.width <= 991) {
            document.getElementById("sideNav").style.width = "0";
        }
    }
