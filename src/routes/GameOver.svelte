
<script>
    
import {GAME_WORD, board, colors, creatGrid, gameInfo, gameOver, guess} from "./Estado"
    import Jogar from "./Jogar.svelte";
    
    const playAgain = () => {

            const wordsList = ['PRAIA','AMIGO','FALAR','CANTO',
            'MUITO','FELIZ','CHUVA','BANDA','ROSTO','COISA','OLHAR','PULAR',
        'AFETO']

        const word = wordsList[Math.floor(Math.random() * wordsList.length)];
        GAME_WORD.set(word);

        gameInfo.set({
            attempt: 0, char: 0
        });
        guess.set("");
        colors.set(creatGrid());
        board.set(creatGrid());
        gameOver.set(false)
    }
</script>

 

<div class="center">
    <h3>A palavra correta era: <strong>{$GAME_WORD}</strong></h3>
    <h3>Você disse: <strong>{$guess}</strong></h3>
</div>

<Jogar/>

<div class="center">
    <button on:click={playAgain}>Jogar novamente</button>
</div>

<style>
strong {
    font-weight: 900;
}
h3 {
    font-size: 2em;

}

button {
    background-color: var(--orange);
    color: white;
    margin-top: 20px;
    padding: 20px 50px;
    cursor: pointer;
    border: none;
}

.center {
    margin: 20px auto;
    width: fit-content;
    text-align: center;
}
</style>