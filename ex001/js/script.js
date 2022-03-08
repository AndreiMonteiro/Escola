function fechar(){
    document.getElementById('popup').style.display = "none"
}
function entrar(){
    let login = document.getElementById("login").value; 
    let senha = document.getElementById("senha").value;

    if(login == "admin" && senha == "admin") {
        fechar();
    }
    else{
        document.getElementById('msg').style.display="block";
    }
}
    


