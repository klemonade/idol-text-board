<script lang="ts">
	import { goto } from "$app/navigation";
	import { Button } from "flowbite-svelte";
	import { onMount } from "svelte";
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher()
    export let name: string | ""
    export let cnt: number
    const display = () => {
        // localStorage.setItem('name', name)
        // goto('/show')
        dispatch('next', {name: name.toUpperCase(), cnt})
    }
</script>

<div class="flex flex-col justify-center items-center h-[100vh] gap-4">
	<h1>ชื่อเมมเบอร์</h1>
	<input bind:value={name} class="text-gray-800 rounded p-4" />
    <h1>Style</h1>
    <!-- {cnt} -->
    <select bind:value={cnt} class="text-black"> 
        {#each [0,1,2,3,4,5,6,7,8,9] as i}
            <option value={i}>{i}</option>
        {/each}
    </select>
    <div />
	<Button size="md" on:click={() => display()}>Done</Button>
</div>