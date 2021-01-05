//triggered when user clicks on add button. Text gets added to do list.
document.getElementById('addTask').addEventListener('click',function (ev) {
    var li = document.createElement("li");
    var invalue = document.getElementById('task').value;
    var t = document.createTextNode(invalue);
    if(invalue){
        document.getElementById("mylist").appendChild(li);
    }
});
