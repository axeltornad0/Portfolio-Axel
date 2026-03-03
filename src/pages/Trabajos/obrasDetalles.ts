export interface Obra {
  id: number;
  titulo: string;
  imagen: string[];
  textoDet?: string[];
  grid: string;
  fecha: string;
  descripcion?: string;
}

export const obras: Obra[] = [
    //ILUSTRACIÓN
    //0 al 10
    {
        id: 0,
        titulo: "Libro Ilustrado: La vuelta al mundo en 80 días",
        imagen: ["ILUST-Libro-p1","ILUST-Libro-p2","ILUST-Libro-p3","ILUST-Libro-p4",],
        grid: "GRID-ILUST-Libro",
        fecha: 'Diciembre, 2025',
        descripcion: 'HHH',
    },
    {
        id: 1,
        titulo: "The Third Children",
        imagen: ["ILUST-Rei",],
        grid: "GRID-ILUST-Rei",
        fecha: 'Septiembre, 2025',
        descripcion: 'Fanart de la serie "Evangelion"',
    },
    {
        id: 2,
        titulo: "Comisión para Metrecalia (Web Series)",
        imagen: ["ILUST-Comi","ILUST-Comi-p1","ILUST-Comi-p2","ILUST-Comi-p3","ILUST-Comi-p4",],
        grid: "GRID-ILUST-Comi",
        fecha: 'Septiembre, 2025',
        descripcion: 'HHH',
    },
    {
        id: 3,
        titulo: "A Warrior's Welcome",
        imagen: ["ILUST-Warrior", "ILUST-Warrior-p1","ILUST-Warrior-p2","ILUST-Warrior-p3","ILUST-Warrior-p4",],
        grid: "GRID-ILUST-Warrior",
        fecha: 'Junio, 2025',
        descripcion: 'HHH',
    },
    {
        id: 4,
        titulo: "Retrato de Grahim",
        imagen: ["ILUST-Grahim",],
        grid: "GRID-ILUST-Grahim",
        fecha: 'Junio, 2025',
        descripcion: 'Fanart de "The Legend of Zelda: Skywar Sword"',
    },
    {
        id: 5,
        titulo: "Estudio de una torre",
        imagen: ["ILUST-Torre","ILUST-Torre-p1","ILUST-Torre-p2","ILUST-Torre-p3","ILUST-Torre-p4",],
        grid: "GRID-ILUST-Torre",
        fecha: 'Junio, 2025',
        descripcion: 'HHH',
    },
    {
        id: 6,
        titulo: "¡Paella!",
        imagen: ["ILUST-DM","ILUST-DM-p1","ILUST-DM-p2","ILUST-DM-p3","ILUST-DM-p4","ILUST-DM-p5",],
        grid: "GRID-ILUST-DM",
        fecha: 'Abril, 2025',
        descripcion: 'Fanart de la serie "Dungeon Meshi".',
    },
    {
        id: 7,
        titulo: "Hora de la siesta",
        imagen: ["ILUST-Sonic","ILUST-Sonic-p1","ILUST-Sonic-p2","ILUST-Sonic-p3",],
        grid: "GRID-ILUST-Sonic",
        fecha: 'Marzo, 2025',
        descripcion: 'Fanart de Sonic.',
    },
    {
        id: 8,
        titulo: "Las Colonias Independientes",
        imagen: ["ILUST-Photobashing","ILUST-Photobashing-p1","ILUST-Photobashing-p2","ILUST-Photobashing-p3",],
        grid: "GRID-ILUST-Photobashing",
        fecha: 'Diciembre, 2024',
        descripcion: 'HHH',
    },
    {
        id: 9,
        titulo: "Maaktare's Legacy",
        imagen: ["ILUST-MAAKTARE","ILUST-MAAKTARE-p1","ILUST-MAAKTARE-p2",],
        grid: "GRID-ILUST-MAAKTARE",
        fecha: 'Octubre, 2024',
        descripcion: 'HHH',
    },
    {
        id: 10,
        titulo: "??? EEEEEH",
        imagen: ["ILUST-Marcille","ILUST-Marcille-sangre","ILUST-Marcille-p1","ILUST-Marcille-p2",],
        grid: "GRID-ILUST-Marcille",
        fecha: 'Julio, 2024',
        descripcion: 'Fanart de la serie "Dungeon Meshi"',
    },

    //COMIC
    // 11 al 12
    {
        id: 11,
        titulo: "¡Tenma y los demás conocen a Haru!",
        imagen: ["COMIC-Haru-p1","COMIC-Haru-p2",],
        grid: "GRID-COMIC-Haru",
        fecha: 'Enero, 2026',
        descripcion: 'HHH',
    },
    {
        id: 12,
        titulo: "Salto de fé",
        imagen: ["COMIC-Salto-p1","COMIC-Salto-p2",],
        grid: "GRID-COMIC-Salto",
        fecha: 'Octubre, 2025',
        descripcion: 'HHH',
    },

    //DISEÑO PJS
    // 13 al 14
    {
        id: 13,
        titulo: "Dispatch x DnD",
        imagen: ["PJS-Dispatch","PJS-Dispatch-p1","PJS-Dispatch-p2","PJS-Dispatch-p3","PJS-Dispatch-p4","PJS-Dispatch-p5",],
        grid: "GRID-PJS-Dispatch",
        fecha: 'Enero, 2026',
        descripcion: 'HHH',
    },
    {
        id: 14,
        titulo: "Elian - Personaje de Dragones y Mazmorras",
        imagen: ["PJS-Elian-p1","PJS-Elian-p2",],
        grid: "GRID-PJS-Elian",
        fecha: 'Agosto, 2024',
        descripcion: 'HHH',
    },

    //DISEÑO GRAF
    //15 a 17
    {
        id: 15,
        titulo: "Cartel de Envidia",
        imagen: ["DIS-Envidia"],
        grid: "GRID-DIS-Envidia",
        fecha: 'Febrero, 2026',
        descripcion: 'Hecho con Laura Zaragoza',
    },
    {
        id: 16,
        titulo: "Cooestima - Juego de mesa",
        imagen: ["DIS-Cooestima-p1","DIS-Cooestima-p2","DIS-Cooestima-p3","DIS-Cooestima-p4","DIS-Cooestima-p5",],
        grid: "GRID-DIS-Cooestima",
        fecha: 'Mayo, 2025',
        descripcion: 'Hecho con Leire Benítez, Mónica Hernández y Laura Zaragoza',
    },
    {
        id: 17,
        titulo: "Kaoka - Packaging de chocolate",
        imagen: ["DIS-Kaoka-p1","DIS-Kaoka-p2","DIS-Kaoka-p3","DIS-Kaoka-p4",],
        grid: "GRID-DIS-Kaoka",
        fecha: 'Marzo, 2025',
        descripcion: 'Hecho con Mónica Hernández y Laura Zaragoza',
    },

    //OTROS
    //18
    {
        id: 18,
        titulo: "36 days of type",
        imagen: ["OTR-Bichos-p0","OTR-Bichos-p1","OTR-Bichos-p2","OTR-Bichos-p3",],
        grid: "GRID-OTR-Bichos",
        fecha: 'Octubre, 2025',
        descripcion: 'HHH',
    },
    
]
