var i=0,j=0;
function set(op) {

    document.getElementById("display1").value += op;

}

function setOp() {
    alert("gf");
    //document.getElementById("display").value += op;
}


function answer() {
    
    var Exp = document.getElementById("display1").value;
    //var Exp1 = Exp.value;
    var result = eval(Exp);
    //alert(result);
   // Exp.value = result;
   document.getElementById("display").value=Exp;
    localStorage.setItem("Operation"+i, Exp);
    var x= localStorage.getItem("Operation" + i);
    document.getElementById("display4").innerHTML=x;
    //alert(document.getElementById("display4").innerHTML);
    i++;
    

     document.getElementById("display1").value=result;
    localStorage.setItem("Result"+j,result);
    var y= localStorage.getItem("Result"+j);
    document.getElementById("display5").innerHTML=y;
    j++;


   
   
}

function ce() {

    var elem = document.getElementById("display").value;
        var elem = document.getElementById("display1").value;

    var length = elem.length;
    length--;
    var a = elem.substr(0, length);

    // document.getElementById("display").value="";
    //for(var i=0;i<length-1;i++)
    //{
    document.getElementById("display").value = a;
        document.getElementById("display1").value = a;

    // }
    //alert(length);
}


function down(){
    document.getElementById("display4").value=localStorage.getItem("Operation"+i);
    i++;
}

function up(){
    document.getElementById("display4").value=localStorage.getItem("Operation"+i);
    i++;
}

function edit(y){
    var col=document.getElementById("display4");
    col.style.background="green";
}