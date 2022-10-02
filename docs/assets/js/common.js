$(function () {
    function tannpuku(val) {
        $('#tannpuku').append('<li>'+ val[0] + '</li>');
    }
    function wide(val) {
        $('#wide').append('<li>'+ val[0] + '</li>');
        $('#wide').append('<li>'+ val[1] + '</li>');
    }
    function sannrenn(val) {
        $('#sannrenn').append('<li>'+ val[0] + '</li>');
        $('#sannrenn').append('<li>'+ val[1] + '</li>');
        $('#sannrenn').append('<li>'+ val[2] + '</li>');
    }
    function generate_randomx(count) {
        var tannpukuval = new Array();
        var tannpukuvalCount = tannpukuval.length;
        for(var i = 0 ; i < count; i++){
            var candidate = Math.floor(Math.random() * count) + 1;
            for(var j = 0; j < tannpukuvalCount; j++) {
              if(candidate == tannpukuval[j]){
                candidate = Math.floor(Math.random() * count) + 1;
                j= -1;
              }
            }
            tannpukuval[i] = candidate;
            tannpukuvalCount++;
        }
        var wideval = new Array();
        var widevalCount = wideval.length;
        for(var i = 0 ; i < count; i++){
            var candidate = Math.floor(Math.random() * count) + 1;
            for(var j = 0; j < widevalCount; j++) {
              if(candidate == wideval[j]){
                candidate = Math.floor(Math.random() * count) + 1;
                j= -1;
              }
            }
            wideval[i] = candidate;
            widevalCount++;
        }
        var sannrennval = new Array();
        var sannrennvalCount = sannrennval.length;
        for(var i = 0 ; i < count; i++){
            var candidate = Math.floor(Math.random() * count) + 1;
            for(var j = 0; j < sannrennvalCount; j++) {
              if(candidate == sannrennval[j]){
                candidate = Math.floor(Math.random() * count) + 1;
                j= -1;
              }
            }
            sannrennval[i] = candidate;
            sannrennvalCount++;
        }
        console.log(tannpukuval)
        tannpuku(tannpukuval)
        wide(wideval)
        sannrenn(sannrennval)
        return;
    }
    $(".roll_button").on('click', function () {
        var count = $(".keiba_select").val();
        $('#tannpuku li').remove();
        $('#wide li').remove();
        $('#sannrenn li').remove();
        $('.roll_result').addClass("tousuu_"+ count);
        generate_randomx(count);
    });
});