$(document).ready(function(){
    $("#search").click(function(){
    
        var words= $("#text1").val();
        var inp= words.split(",");
        var ans=""
        var passage= $("#text2").val();
        var text2= passage.split(/\n/);
       
       
        for(var i=0;i<text2.length;i++){
            for(var j=0;j<inp.length;j++){
                if(text2[i].includes(inp[j])){
                    var first=""
                    var second=""
                    var sp=text2[i].split(inp[j])
                    first=sp[0]
                    second=sp[1]
                    ans+=first+"<b>"+inp[j]+"</b>"+second+", "

                }

            }
        }
        $("#text3").val(ans)
    })
    
});