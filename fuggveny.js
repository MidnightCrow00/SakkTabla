export function tablaAlapHelyzet(LISTA) {
    let txt = "<table class='sakktabla'>";
  
    txt += "<tr><th></th>";
    for (let betu = 0; betu < 8; betu++) {
        txt += `<th>${String.fromCharCode(65 + betu)}</th>`; 
    }
    txt += "</tr>";


    for (let i = 0; i < 8; i++) {
        txt += "<tr>";
  
        txt += `<th>${8 - i}</th>`;
        for (let j = 0; j < 8; j++) {
            let cellaSzine = (i + j) % 2 === 0 ? "feher" : "fekete";
            let figurahelyzet = "";



            if (i === 0 || i === 1 || i === 6 || i === 7) {
                let figuraindex;
                if (i === 0) {
                    figuraindex = [11, 7, 10, 9, 8, 10, 7, 11][j];
                } else if (i === 1) {
                    figuraindex = [6, 6, 6, 6, 6, 6, 6, 6][j];
                } else if (i === 6) {
                    figuraindex = [0, 0, 0, 0, 0, 0, 0, 0][j]; 
                } else if (i === 7) {
                    figuraindex = [5, 1, 4, 3, 2, 4, 1, 5][j];
                } else {
                    figuraindex = j; 
                }
                figurahelyzet = LISTA[figuraindex].figura;
            }


            txt += `<td class='${cellaSzine}'">${figurahelyzet}</td>`;
        }

    
        for (let szam = 0; szam < 1; szam++) {
            txt += `<th>${i+1}</th>`;
        
        }txt += "</tr>";
    }
    
    txt += "<tr><th></th>";
    for (let betu = 7; betu >= 0; betu--) {
        txt += `<th>${String.fromCharCode(65 + betu)}</th>`; 
    }
    txt += "</tr>";
    
    txt += "</table>";
    return txt;
}

