<script lang="ts">
	import { goto } from "$app/navigation";
	import { onMount } from "svelte";
	import Edit from "../Components/Edit.svelte";
	import Show from "../Components/Show.svelte";
	let page = 0
	let name: string | null
	let cnt: number

	const handleNext = (e) => {
		name = e.detail.name
		cnt = e.detail.cnt
		page = 1
	}
</script>
<head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>
</head>

{#if page == 0}
	<Edit {name} {cnt} on:next={(e) => handleNext(e)}/>
{:else}
	<Show {name} {cnt} />
{/if}