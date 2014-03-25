/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$('#formHorarios').submit(function(event) {
    event.preventDefault();
    if ($("#formHorarios input").val() != '' ) {
        var createProperties = {
            url: 'https://www.alunoonline.uerj.br/id_consultas/id_horarios_turma.php?' + $('#formHorarios').serialize(),
            active: true
        };
        chrome.tabs.create(createProperties);
    }
    else
    {
       $('#modalContent').html('<div class="alert alert-danger">Você realmente precisa digitar a sua matrícula corretamente!<br><br>Cheque se o campo não está em branco ou se não possui caracteres alfanuméricos.</div>');
       $('#alertModal').modal('show');
    }
});

$('#formRID').submit(function(event) {
    event.preventDefault();
    if ($("#formRID input").val() != '' && $.isNumeric($("#formRID input").val())) {
        var createProperties = {
            url: 'https://www.alunoonline.uerj.br/requisicaoaluno/requisicao.php?requisicao=RID&' + $('#formRID').serialize(),
            active: true
        };
        chrome.tabs.create(createProperties);
    }
    else
    {
       $('#modalContent').html('<div class="alert alert-danger">Você realmente precisa digitar a sua matrícula corretamente!<br><br>Cheque se o campo não está em branco ou se não possui caracteres alfanuméricos.</div>');
       $('#alertModal').modal('show');
    }
});

$('#formSintese').submit(function(event) {
    event.preventDefault();
    if ($("#formSintese input").val() != '' && $.isNumeric($("#formSintese input").val())) {
        var createProperties = {
            url: 'https://www.alunoonline.uerj.br/requisicaoaluno/requisicao.php?requisicao=SinteseFormacao&' + $('#formSintese').serialize(),
            active: true
        };
        chrome.tabs.create(createProperties);
    }
    else
    {
       $('#modalContent').html('<div class="alert alert-danger">Você realmente precisa digitar a sua matrícula corretamente!<br><br>Cheque se o campo não está em branco ou se não possui caracteres alfanuméricos.</div>');
       $('#alertModal').modal('show');
    }
});

$('#formHistorico').submit(function(event) {
    event.preventDefault();
    if ($("#formHistorico input").val() != '' && $.isNumeric($("#formHistorico input").val())) {
        var createProperties = {
            url: 'https://www.alunoonline.uerj.br/requisicaoaluno/requisicao.php?requisicao=DisciplinasRealizadas&' + $('#formHistorico').serialize(),
            active: true
        };
        chrome.tabs.create(createProperties);
    }
    else
    {
       $('#modalContent').html('<div class="alert alert-danger">Você realmente precisa digitar a sua matrícula corretamente!<br><br>Cheque se o campo não está em branco ou se não possui caracteres alfanuméricos.</div>');
       $('#alertModal').modal('show');
    }
});


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