<script>
    // @ts-ignore
    export let x;
    // @ts-ignore
    export let y;
    import { board, colors , gameOver} from './Estado.js'
    
   // @ts-ignore
     $: letter = $board[y][x];
   // @ts-ignore
     $: color = $colors[y][x];

   
</script>

<div class={`cell ${color}`}>
    {#if !$gameOver}
    {letter}     
    {/if}
    
</div>

<style>

* {
	margin: 0;
	padding: 0;
}
:root {
	--orange: #f73c00;
	--bg: #22292f;
	--green: #00f780;
	--dark: #4f4f4f;
}




.cell {
    width: 70px; height: 70px;
    color: rgb(241, 234, 234);
    background-color: var(--bg);
    margin: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 55px;
    border-radius: 5px;
    transition: background-color .7s;
}
.correct {
    background-color: var(--green);
}

.close {
    background-color: var(--orange);
}

.incorrect {
    background-color: var(--dark);
}

</style>