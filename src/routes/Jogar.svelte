<script>
    import { estado } from './Estado.js'
    import { board } from "./Estado.js"
    import Cell from './Cell.svelte';

</script>



<style>
.game-board {
margin: 50px auto;
width: fit-content;
}

.row {
display: flex;
}

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


body {
	font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif ;
	background-color: rgb(78, 71, 71);

}

</style>
<body>
    


<div class="game-board">
    {#each $board as column, y}
         <div class="row" >
            {#each column as row, x}
                 <Cell {y} {x} />
            {/each}

         </div>
    {/each}

</div>

</body>