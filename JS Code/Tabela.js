$(document).ready(function() {
    $.ajax({
        url: 'Zaposleni.json', 
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            var tableBody = $('#TabelaZaposlenih tbody');
            
            $.each(data, function(index, Zaposleni) {
                var row = $('<tr>');
                row.append($('<td>').text(Zaposleni.Ime));
                row.append($('<td>').text(Zaposleni.Prezime));
                row.append($('<td>').text(Zaposleni.Pozicija));
                tableBody.append(row);
            });
        },
        error: function() {
            console.error('Error loading employee data.');
        }
    });
});
