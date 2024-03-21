export const BABUK = [

    //fehér
    {
        nev: "Fehér gyalog",
        figura: " &#9817;",
    },
    {
        nev: "Fehér huszár",
        figura: "&#9816;",
    },
    {
        nev: "Fehér király",
        figura: "&#9812;",
    },
    {
        nev: "Fehér királynő",
        figura: "&#9813;",
    },
    {
        nev: "Fehér futó",
        figura: "&#9815;",
    },
    {
        nev: "Fehér bástya",
        figura: " &#9814;",
    },

    //fekete
    {
        nev: "Fekete gyalog",
        figura: "&#9823;",
    },
    {
        nev: "Fekete huszár",
        figura: "&#9822;",
    },
    {
        nev: "Fekete király",
        figura: "&#9818;",
    },
    {
        nev: "Fekete királynő",
        figura: " &#9819;",
    },
    {
        nev: "Fekete futó",
        figura: "&#9821;",
    },
    {
        nev: "Fekete bástya",
        figura: "&#9820;",
    },
];
export const mozgasok = {
    gyalog: (keresztbenVanEloette) => {
        if (keresztbenVanEloette) {
            return [{ x: 1, y: 1 }, { x: -1, y: 1 }]; 
        } else {
            return [{ x: 0, y: 1 }]; 
        }
    },
    huszar: () => {
        return [{ x: 2, y: 1 }, { x: 1, y: 2 }, { x: -1, y: 2 }, { x: -2, y: 1 }, { x: -2, y: -1 }, { x: -1, y: -2 }, { x: 1, y: -2 }, { x: 2, y: -1 }]; 
    },
    kiraly: (keresztbenVanEloette) => {
        if (keresztbenVanEloette) {
            return [{ x: 1, y: 1 }, { x: -1, y: 1 }]; 
        } else {
            return [{ x: 0, y: 1 }]; 
        }
    },
    kiralyno: () => {
        return [{ x: 1, y: 1 }, { x: -1, y: 1 }, { x: 0, y: 1 }, { x: 1, y: -1 }, { x: -1, y: -1 }, { x: 0, y: -1 }, { x: 1, y: 0 }, { x: -1, y: 0 }]; 
    },
    futo: () => {
        return [{ x: 1, y: 1 }, { x: -1, y: 1 }, { x: 1, y: -1 }, { x: -1, y: -1 }]; 
    },
    bastya: () => {
        return [{ x: 0, y: 1 }, { x: 0, y: -1 }, { x: 1, y: 0 }, { x: -1, y: 0 }]; 
    },
};



