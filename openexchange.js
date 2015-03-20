$(function () {
    $.ajax({
        type: 'GET',
        url: 'http://openexchangerates.org/api/latest.json?app_id=b4c95044710a495193aadb8040d238c8',
        dataType: 'jsonp',
        success: function(json) {
            var usd = json.rates.USD;
            var euro = json.rates.EUR;
            var gbp = json.rates.GBP;
            var cad = json.rates.CAD;
            var yen = json.rates.JPY;
            var btc = json.rates.BTC;

            var amount = $('#base').val();
            updateCurrencies();
            
             $('#base').on('input', function(e) 
             {
                 amount = $('#base').val();
                 updateCurrencies();
             });

            function updateCurrencies() {
                $('#usd').attr("value", amount * usd);
                $('#eur').attr("value", amount * euro);
                $('#gbp').attr("value", amount * gbp);
                $('#cad').attr("value", amount * cad);
                $('#jpy').attr("value", amount * yen);
                $('#btc').attr("value", amount * btc);
            }
        }
    });
});
