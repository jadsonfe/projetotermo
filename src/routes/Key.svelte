<script>
// @ts-nocheck

    export let char;
    export let KeyPress;

</script>

<div class="Key" on:click={()=> KeyPress(char.toUpperCase())}>
    {char.toUpperCase()}
</div>

<style>
    .Key{
        background-color: var(--bg);
        color: white;
        padding: 20px 18px;
        margin: 4px 3px;
        cursor: pointer;
        border-radius: 3px;
        transition: background-color .3s;
    }
    .Key:hover {
        background-color: rgb(7, 231, 183);
    }
</style>