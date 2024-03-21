export function tablazatbaHelyezes(LISTA) {
    let txt = "<table class='sakktabla'>";
    for (let i = 0; i < 8; i++) {
        txt += "<tr>";
        for (let j = 0; j < 8; j++) {
            // Meghatározzuk a cella színét (fekete vagy fehér)
            let cellaSzine = (i + j) % 2 === 0 ? "feher" : "fekete";
            // Ha a sakkfigura megfelelő pozícióban van, megjelenítjük
            let figura = "";
            if (i === 0 || i === 1 || i === 6 || i === 7) {
                let figuraindex;
                if (i === 0 || i === 0) {
                    figuraindex = [5, 1, 4, 3, 2, 4, 1, 5][j]; 

                }else if (i === 1 || i === 1) {
                    figuraindex = [0, 0, 0, 0, 0, 0, 0, 0][j]; 

                }else if (i === 6 || i === 6) {
                    figuraindex = [6, 6, 6, 6, 6, 6, 6, 6][j]; 

                } else if (i === 7 || i === 7) {
                    figuraindex = [11, 7, 10, 9, 8, 10, 7, 11][j]; 

                } else {
                    figuraindex = j; // fekete és fehér gyalog
                }
                figura = LISTA[figuraindex].figura;
            }
            txt += `<td class='${cellaSzine}'>${figura}</td>`;
        }
        txt += "</tr>";
    }
    txt += "</table>";
    return txt;
}
