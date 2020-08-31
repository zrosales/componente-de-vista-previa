window.onresize = function(event) {
    status=0;
    document.getElementById("sharing-container-dark").style.display="none";
    document.getElementById("sharing-container-light").style.display="flex";
};

function showSharing(){
    console.log(status);
    if(status==0 || status == undefined){
        document.getElementById("sharing-container-dark").style.display="flex";
        if (window.innerWidth<='768'){
            document.getElementById("sharing-container-light").style.display="none";
        }
        status = 1;
    }
    else if(status==1){
        document.getElementById("sharing-container-dark").style.display="none";
        if (window.innerWidth<='768'){
            document.getElementById("sharing-container-light").style.display="flex";
        }
        status = 0;
    }
    console.log(status);
}