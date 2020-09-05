function descobrirTriangulo(){
    let n1 = parseFloat( document.getElementById("lado1").value);
    let n2 = parseFloat( document.getElementById("lado2").value);
    let n3 = parseFloat( document.getElementById("lado3").value);
    let mensagem = " "

    if(n1==n2 && n2==n3 && n1==n3){
    mensagem = "Triângulo Equilátero"
    }
    else if(n1!=n2 && n2!=n3){
        mensagem = "Triângulo Escaleno"
 
    }
    else if(n1==n2 || n2==n3 || n1==n3){
        mensagem = "Triângulo Isoceles"
    }
    else{
        mensagem = "Não existe triangulo com essas medidas"
    }
    console.log(mensagem);
    document.getElementById("resultado").innerText = mensagem;
}