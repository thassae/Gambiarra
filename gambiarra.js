/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$('#form').submit(function(event) {
    event.preventDefault();
    if ($("#form input").val() != '') {
        var createProperties = {
            url: 'http://www.ementario.uerj.br/pesquisa.php?' + $('#form').serialize(),
            active: true
        };
        chrome.tabs.create(createProperties);
    }
    else
    {
       $('#modalContent').html('Você realmente precisa digitar o número da disciplina!');
       $('#alertModal').modal('show');
    }
});