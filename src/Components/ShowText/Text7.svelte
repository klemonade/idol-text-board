<script lang="ts">
	import { onMount } from 'svelte';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	export let name;

	onMount(() => {
		anime
			.timeline({ loop: true })
			.add({
				targets: '.ml8 .circle-white',
				scale: [0, 3],
				opacity: [1, 0],
				easing: 'easeInOutExpo',
				rotateZ: 360,
				duration: 1100
			})
			.add({
				targets: '.ml8 .circle-container',
				scale: [0, 1],
				duration: 1100,
				easing: 'easeInOutExpo',
				offset: '-=1000'
			})
			.add({
				targets: '.ml8 .circle-dark',
				scale: [0, 1],
				duration: 1100,
				easing: 'easeOutExpo',
				offset: '-=600'
			})
			.add({
				targets: '.ml8 .letters-left',
				scale: [0, 1],
				duration: 1200,
				offset: '-=550'
			})
			.add({
				targets: '.ml8 .bang',
				scale: [0, 1],
				rotateZ: [45, 15],
				duration: 1200,
				offset: '-=1000'
			})
			.add({
				targets: '.ml8',
				opacity: 0,
				duration: 1000,
				easing: 'easeOutExpo',
				delay: 1400
			});

		anime({
			targets: '.ml8 .circle-dark-dashed',
			rotateZ: 360,
			duration: 8000,
			easing: 'linear',
			loop: true
		});
		// setTimeout(() => {
		// 	dispatch('next')
		// }, 6000);
	});
</script>

<div class="w-[100%] h-[100%] flex flex-col justify-center items-center overflow-hidden">
	<h1 class="ml8 overflow-hidden">
		<span class="letters-container overflow-hidden">
			<span class="letters letters-left text-[1em] w-full text-center">{name}</span>
			<!-- <span class="letters bang">!</span> -->
		</span>
		<span class="circle circle-white" />
		<span class="circle circle-dark" />
		<span class="circle circle-container"><span class="circle circle-dark-dashed" /></span>
	</h1>
</div>

<style>
	h1.ml8 {
		font-weight: 900;
		font-size: 1em;
		color: #fff;
		width: 1.5em;
		height: 1.5em;
	}

	.ml8 .letters-container {
		position: absolute;
		left: 0;
		right: 0;
		margin: auto;
		top: 0;
		bottom: 0;
		height: 1em;
	}

	.ml8 .letters {
		position: relative;
		z-index: 2;
		display: inline-block;
		line-height: 0.7em;
		right: -0.12em;
		top: -0.2em;
	}

	.ml8 .bang {
		font-size: 1.4em;
		top: auto;
		left: -0.06em;
	}

	.ml8 .circle {
		position: absolute;
		left: 0;
		right: 0;
		margin: auto;
		top: 0;
		bottom: 0;
	}

	.ml8 .circle-white {
		width: 6em;
		height: 6em;
		border: 6px dashed white;
		border-radius: 6em;
	}

	.ml8 .circle-dark {
		width: 5.5em;
		height: 5.5em;
		background-color: #4f7b86;
		border-radius: 3em;
		z-index: 1;
	}

	.ml8 .circle-dark-dashed {
		border-radius: 6em;
		background-color: transparent;
		border: 6px dashed #4f7b86;
		width: 6em;
		height: 6em;
	}
</style>
