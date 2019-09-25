thisHead = document.getElementById("thisHead");
thisHead.addEventListener("mouseover",()=>{
    let rows = thisTable.getElementsByTagName("th") ;
    for (let i=0; i<rows.length; i++) {
        rows[i].style.backgroundColor = "red";
    }
    thisTable.style.borderColor = " red";
})
thisHead.addEventListener("mouseout",()=>{
    let rows = thisTable.getElementsByTagName("th") ;
    for (let i=0; i<rows.length; i++) {
        rows[i].style.backgroundColor = "silver";
    }
    
})