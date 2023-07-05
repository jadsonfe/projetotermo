<script>
    import Jogar from './Jogar.svelte'
    import {fade} from "svelte/transition"

    import { gameOver } from './Estado.js'
    import Keyboard from './Keyboard.svelte';
    import GameOver from './GameOver.svelte';

</script>

    {#if $gameOver}
    <div in:fade={{duration: 1000}}>
        <GameOver />
    </div>
        
    {:else}
        <div in:fade={{duration: 800}}>
            <Jogar/>
            <Keyboard/>
        </div>
    {/if}



    

  