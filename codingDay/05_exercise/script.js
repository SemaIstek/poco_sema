function getLastValue(){ 
    const groups=["Lausanne","Bern","Zurih","Basel"];
    const groupsort=[groups.sort()];
    const result=groupsort[groupsort.length-1];
    console.log("Last element= "+ result);
}

getLastValue();
