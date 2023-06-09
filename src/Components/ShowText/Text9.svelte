<script lang="ts">
	import { onMount } from 'svelte';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	export let name;

	onMount(() => {
anime.timeline({loop: true})
  .add({
    targets: '.ml10 .letter',
    rotateY: [-90, 0],
    duration: 1300,
    delay: (el, i) => 45 * i
  }).add({
    targets: '.ml10',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
		// setTimeout(() => {
		// 	dispatch('next')
		// }, 6000);
	});
</script>

<div class="w-[100%] h-[100%] flex flex-col justify-center items-center">
<h1 class="ml10">
  <span class="text-wrapper">
    {#each name.split('') as letter}
      <span class='letter'>{letter}</span>
    {/each}
  </span>
</h1>
</div>

<style>
.ml10 {
  position: relative;
  font-weight: 900;
  font-size: 1.9em;
}

.ml10 .text-wrapper {
  position: relative;
  display: inline-block;
  padding-top: 0.1.9em;
  padding-right: 0.05em;
  padding-bottom: 0.1em;
  overflow: hidden;
}

.ml10 .letter {
  display: inline-block;
  line-height: 1em;
  transform-origin: 0 0;
}
</style>