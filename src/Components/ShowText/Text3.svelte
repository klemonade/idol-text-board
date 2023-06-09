<script lang="ts">
	import { onMount } from 'svelte';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	export let name;
	onMount(() => {
		let ml4 = {};
		ml4.opacityIn = [0, 1];
		ml4.scaleIn = [0.2, 1];
		ml4.scaleOut = 2;
		ml4.durationIn = 800;
		ml4.durationOut = 600;
		ml4.delay = 500;

		anime
			.timeline({ loop: true })
			.add({
				targets: '.ml4 .letters-1',
				opacity: ml4.opacityIn,
				scale: ml4.scaleIn,
				duration: ml4.durationIn
			})
			.add({
				targets: '.ml4 .letters-1',
				opacity: 0,
				scale: ml4.scaleOut,
				duration: ml4.durationOut,
				easing: 'easeInExpo',
				delay: ml4.delay
			})
			.add({
				targets: '.ml4 .letters-2',
				opacity: ml4.opacityIn,
				scale: ml4.scaleIn,
				duration: ml4.durationIn
			})
			.add({
				targets: '.ml4 .letters-2',
				opacity: 0,
				scale: ml4.scaleOut,
				duration: ml4.durationOut,
				easing: 'easeInExpo',
				delay: ml4.delay
			})
			.add({
				targets: '.ml4 .letters-3',
				opacity: ml4.opacityIn,
				scale: ml4.scaleIn,
				duration: ml4.durationIn
			})
			.add({
				targets: '.ml4 .letters-3',
				opacity: 0,
				scale: ml4.scaleOut,
				duration: ml4.durationOut,
				easing: 'easeInExpo',
				delay: ml4.delay
			})
			.add({
				targets: '.ml4',
				opacity: 0,
				duration: 500,
				delay: 500
			});
		// setTimeout(() => {
		// 	dispatch('next')
		// }, 6000);
	});
</script>

<div class="w-[100%] h-[100%] flex flex-col justify-center items-center left-[-47%] top-[-25%] absolute">
	<h1 class="ml4">
	  <span class="letters letters-1">{name}</span>
	  <span class="letters letters-2">{name}</span>
	  <span class="letters letters-3">{name}</span>
	</h1>
</div>

<style>
.ml4 {
  position: relative;
  font-weight: 900;
  font-size: 1.9em;
}
.ml4 .letters {
  position: absolute;
  margin: auto;
  left: 0;
  /* top: 0.3em; */
  right: 0;
  opacity: 0; 
}
</style>