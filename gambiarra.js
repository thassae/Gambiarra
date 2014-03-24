/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$('#formEmentas').submit(function(event) {
    event.preventDefault();
    if ($("#formEmentas input").val() != '' && $.isNumeric($("#formEmentas input").val())) {
        var createProperties = {
            url: 'http://www.ementario.uerj.br/pesquisa.php?' + $('#formEmentas').serialize(),
            active: true
        };
        chrome.tabs.create(createProperties);
    }
    else
    {
       $('#modalContent').html('<div class="alert alert-danger">Você realmente precisa digitar o número da disciplina corretamente!<br><br>Cheque se o campo não está em branco ou se não possui caracteres alfanuméricos.</div>');
       $('#alertModal').modal('show');
    }
});