$(document).ready(function(){
   $('#formulario-continuar').click(function(){
        let nome = $('#nome').val();
        let email = $('#email').val();
        let ddd = $('#ddd').val();
        let telefone = $('#telefone').val(); 
       

       
        if(nome == ""){
            alert("É necessário informar o nome completo.");
            $('#nome').focus();
            return false;
        }

        if(email == ""){
            alert("É necessário informar o e-mail.");
            $('#email').focus();
            return false;
        }

        if(ddd == ""){
            alert("É necessário informar o ddd.");
            $('#ddd').focus();
            return false;
        }

        if(telefone == ""){
            alert("É necessário informar o telefone.");
            $('#telefone').focus();
            return false;
        }
        
        $('#div-primeiro-passo').addClass('collapse');
        $('#div-segundo-passo').removeClass('collapse');
   });

   $('#formulario').submit(function(){
        let tipo_divida_cartao = $('#tipo_divida_cartao');
        let tipo_divida_cheque_especial = $('#tipo_divida_cheque_especial');
        let tipo_divida_emprestimo_especial = $('#tipo_divida_emprestimo_especial');
        let tipo_divida_outros = $('#tipo_divida_outros');
        let divida = $('#divida').val();
        let mensagem = $('#mensagem').val();

        if(!tipo_divida_cartao.is(":checked") && !tipo_divida_cheque_especial.is(":checked") && !tipo_divida_emprestimo_especial.is(":checked") && !tipo_divida_outros.is(":checked")){
            alert("É necessário informar ao menos um tipo de dívida.");
            return false;
        }

        if(divida == ""){
            alert("É necessário informar o valor da dívida.");
            $('#divida').focus();
            return false;
        }
        
        if(mensagem == ""){
            alert("É necessário informar a mensagem.");
            $('#mensagem').focus();
            return false;
        }
   });
});