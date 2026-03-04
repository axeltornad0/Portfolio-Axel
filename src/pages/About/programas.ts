export interface Programa {
    logo: string;
    nombre: string;
    lenguaje?: string;
}

export const programas: Programa[] = [
    {
        logo: "Photoshop-logo",
        nombre: "Adobe Photoshop",
    },
    {
        logo: "Illustrator-logo",
        nombre: "Adobe Illustrator",
    },
    {
        logo: "Indesign-logo",
        nombre: "Adobe Indesign",
    },
    {
        logo: "Blender-logo",
        nombre: "Blender",
    },
    {
        logo: "processing-logo",
        nombre: "Processing",
        lenguaje: "Java"
    },
    {
        logo: "vscode-logo",
        nombre: "Visual Studio Code",
        lenguaje: "Typescript, HTML y CSS"
    },
]