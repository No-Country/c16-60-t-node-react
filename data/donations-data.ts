import { DonationsData } from "../interfaces/donations";

export const donations: DonationsData[] = [
    {
        id: 1,
        title: "Antonio Pizurno",
        description: "Apoyo 100% la causa de los niños!",
        createdAt: new Date(),
        causesId: 3,
    },
    {
        id: 2,
        title: "Jhon Doe",
        description:
            "No quiero que la gente siga viviendo en guerra, es por eso que realizo el donativo para los menos afortunados",
        createdAt: new Date(),
        causesId: 2,
    },
    {
        id: 3,
        title: "Janhe Foster",
        description: "Siento que es mi deber Cristiano donar a esta causa",
        createdAt: new Date(),
        causesId: 2,
    },
    {
        id: 4,
        title: "Alex umbago",
        description: "Es mi deber realizar la ayuda a los mas necesitados",
        createdAt: new Date(),
        causesId: 6,
    },
    {
        id: 5,
        title: "Tiranosaurio Rex",
        description: "Siempre es Necesario realizar estas donaciones",
        createdAt: new Date(),
        causesId: 3,
    },
];
