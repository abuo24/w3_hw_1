function separator(str,sep) {
    var output = '';
    var len=str.length+1;
    for (var i=len;i > 0; i-=3) {
        var ii = i-1;
        if(output) {
            output = str.charAt(ii-1)+str.charAt(ii)+sep+output;
        } else {
            output = str.charAt(ii-1)+str.charAt(ii);
        }            
    }
    return output;
}
console.log(separator('1232',' ')); //Will return 12:34:56