export function tablaLetrehoz(lista) {
  let txt = "<div class='sakktabla'><table>";
  txt += "<tbody>";

  for (let i = 1; i <= 3; i++) {
    txt += "<tr>";
    for (let j = 1; j <= 3; j++) {
      const gyalog = lista.find((babu) => babu.sor === i && babu.oszlop === j);
      if (gyalog) {
        txt += `<td>${gyalog.babu}</td>`;
      } else {
        txt += "<td> </td>";
      }
    }
    txt += "</tr>";
  }

  txt += "</tbody></table></div>";

  return txt;
}

export function megjelenit(txt) {
  const ELEM = $(".tabla");
  ELEM.html(txt);[[[[]]]]
}
