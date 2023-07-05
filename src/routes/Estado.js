// @ts-nocheck
import { writable } from "svelte/store";

export let estado = writable('menu');



export function trocarEstadoDoJogo(novoEstado) {
    estado.set(novoEstado)
}


export function creatGrid (){
    const grid = [];

    for (let i = 0; i<6; i++){
        grid.push([]);
        // @ts-ignore
        for(let x = 0; x < 5; x++) grid[i][x] = "";

    }
    return grid;
}

export const board = writable(creatGrid())
export const gameInfo = writable({
    char: 0,
    attempt: 0,
});

export const gameOver = writable(false);
export const GAME_WORD = writable("TERMO");
export const guess = writable("");
export const colors = writable(creatGrid());
