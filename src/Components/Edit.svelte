<script lang="ts">
	import { goto } from '$app/navigation';
	import { Button } from 'flowbite-svelte';
	import { onMount } from 'svelte';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	export let name: string | '';
	export let cnt: number;
	const display = () => {
		// localStorage.setItem('name', name)
		// goto('/show')
		dispatch('next', { name: name.toUpperCase(), cnt });
	};

	const choices = [
		{ id: 0, name: 'Static' },
		{ id: 1, name: 'Thursday' },
		{ id: 2, name: 'Sunday Morning' },
		{ id: 3, name: 'Ready Set Go!' },
		{ id: 4, name: `Signal & Noise` },
		{ id: 5, name: 'Beautiful Question' },
		{ id: 6, name: 'Reality is broken' },
		{ id: 7, name: 'Hi!' },
		{ id: 8, name: 'Coffee mornings' },
		{ id: 9, name: 'Domino Dreams' },
		{ id: 10, name: 'Hello Goodbye' }
	];
</script>

<div class="flex flex-col justify-center items-center h-[100vh] gap-4">
	<h1>ชื่อเมมเบอร์</h1>
	<input bind:value={name} class="text-gray-800 rounded p-4" />
	<h1>Style</h1>
	<!-- {cnt} -->
	<select bind:value={cnt} class="text-black">
		{#each choices as choice}
			<option value={choice.id}>{choice.name}</option>
		{/each}
	</select>
	<div />
	<Button size="md" on:click={() => display()}>Done</Button>
</div>
