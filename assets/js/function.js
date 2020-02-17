$(document).ready(function(){
   $('#formulario-continuar').click(function(){
        let nome = $('#nome').val();
        let cep = $('#cep').val();
        let email = $('#email').val();
        let endereco = $('#endereco').val();
        let numero = $('#numero').val();
        let telefone = $('#telefone').val();
        let bairro = $('#bairro').val();
        let datanascimento = $('#data').val();
        let cidade = $('#cidade').val();
        let estado = $('#estado').val();
       

       
        if(nome == ""){
            alert("É necessário informar o nome.");
            $('#nome').focus();
            return false;
        }

        if(cep == ""){
            alert("É necessário informar o cep.");
            $('#cep').focus();
            return false;
        }

        if(email == ""){
            alert("É necessário informar o e-mail.");
            $('#email').focus();
            return false;
        }

        if(endereco  == ""){
            alert("É necessário informar o endereço.");
            $('#endereco').focus();
            return false;
        }

        if(numero  == ""){
            alert("É necessário informar o número.");
            $('#numero').focus();
            return false;
        }


        if(telefone == ""){
            alert("É necessário informar o telefone.");
            $('#telefone').focus();
            return false;
        }

        if(bairro  == ""){
            alert("É necessário informar o bairro.");
            $('#bairro').focus();
            return false;
        }

        if(data  == ""){
            alert("É necessário informar a data de nascimento.");
            $('#data').focus();
            return false;
        }
        
       
   });
}); 