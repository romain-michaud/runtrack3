$(document).ready(function(){
    $("#button").click(function(){
        shuffle();
        $("img").click(function() {
            $(this).appendTo("#rangees");
  });
    })
})


function shuffle()
{
    $("img").remove();
    var max = 6;
        var current = 0;
        var t1 = ["0","1","2","3","4","5"];
        var t2 = [];
        var image = ["arc1.png", "arc2.png", "arc3.png", "arc4.png" ,"arc5.png" ,"arc6.png"];
        for(i=0; i < image.length ; i++)
        {
            var x = Math.floor(Math.random() * max);
            t2[current] = t1[x];
            current++;
            max = max - 1;
            t1[x] = t1[max];
            $("#melangees").append('<img src="'+ image[t2[i]] +'">');
        }
}