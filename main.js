studentArray=[];
function submit(){
    var name1=document.getElementById("n1").value;
    var name2=document.getElementById("n2").value;
    var name3=document.getElementById("n3").value;
    var name4=document.getElementById("n4").value;
    studentArray.push(name1);
    studentArray.push(name2);
    studentArray.push(name3);
    studentArray.push(name4);
    document.getElementById("display-name").innerHTML=studentArray;
    document.getElementById("submitbutton").style.display="none";
    document.getElementById("sortbutton").style.display="inline-block";
}
function sorting(){
    studentArray.sort();
    document.getElementById("display-name").innerHTML=studentArray;
}



