/*
7)
Функция принимает массив meetups,
    и возвращает суммарное количество человек, находящихся на активных митапах

membersOnActiveMeetups(meetups); // 1500

Пример:
    const meetups = [
        { name: 'JavaScript', isActive: true, members: 100 },
        { name: 'Angular', isActive: true, members: 900 },
        { name: 'Node', isActive: false, members: 600 },
        { name: 'React', isActive: true, members: 500 },
    ];
membersOnActiveMeetups(meetups); // 1500
 */

import {isNumber} from "util";

interface Meetup {
    name: string,
    isActive: boolean,
    members: number
}

const meetups = [
    {name: 'JavaScript', isActive: true, members: 100},
    {name: 'Angular', isActive: true, members: 900},
    {name: 'Node', isActive: false, members: 600},
    {name: 'React', isActive: true, members: 500},
];

function membersOnActiveMeetups(arr: Array<Meetup>): number {
    return arr.reduce((acc: number, meetup: Meetup) => {
        return meetup.isActive ? acc + meetup.members : acc;
    }, 0)
}

console.log(membersOnActiveMeetups(meetups)); // 1500