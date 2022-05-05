function tri_Selection(tab){
    //tetezina lay tableau
    let temp=0;
    for (let i=0; i<tab.length-1; i++){
        for(let j=i+1; j<tab.length; j++){
            if(tab[i]>tab[j]){
                   //afamadikfqka ny position anle element
                   temp=tab[i];
                   tab[i]=tab[j];
                   tab[j]=temp;
            }
        }
    }
    return tab;
}
function tri_Abull(tab){
    let temp=0, t=0;
    while(t < tab.length){
        t++;
        for(let i=0; i<tab.length; i++){
            if(tab[i]>tab[i+1]){
                temp=tab[i];
                tab[i]=tab[i+1];
                tab[i+1]=temp;
            }
        }
}
   return tab;
}
function tri_Fusion(tab){
    let gauche=[], droite=[];
    for ( let i=0; i<(tab.length/2 ); i++){
        for( let j=i+(tab.length/2); j<tab.length; j++){
            gauche[i] = tab[i];
            droite[j] = tab[j];
        }
    }
    return gauche+"  "+droite;
}
let table=[312,4,55,65,7,9,2,12,3,4,4,55,6,7,86,545,33,545,234,1,23,4,8,9];
//console.log(tri_Fusion(table));
console.log(tri_Selection(table));

let tab=[1,2,3,33,4];

let produit= tab.reduce(function(somme, value){
    return somme*value;
},1);
//console.log(produit);