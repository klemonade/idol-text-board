<script lang="ts">
	import { onMount } from 'svelte';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	export let name;
  let textWrapper

  const animate = () => {
    anime.timeline({loop: true})
  .add({
    targets: '.ml7 .letter',
    translateY: ["1.1em", 0],
    translateX: ["0.55em", 0],
    translateZ: 0,
    rotateZ: [180, 0],
    duration: 750,
    easing: "easeOutExpo",
    delay: (el, i) => 50 * i
  }).add({
    targets: '.ml7',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
  }
	onMount(() => {
    anime.timeline({loop: true})
  .add({
    targets: '.ml7 .letter',
    translateY: ["1.1em", 0],
    translateX: ["0.55em", 0],
    translateZ: 0,
    rotateZ: [180, 0],
    duration: 750,
    easing: "easeOutExpo",
    delay: (el, i) => 50 * i
  }).add({
    targets: '.ml7',
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
<h1 class="ml7">
  <span class="text-wrapper">
    {#each name.split('') as letter}
      <span class='letter'>{letter}</span>
    {/each}
  </span>
</h1>
</div>

<style>
.ml7 {
  position: relative;
  font-weight: 900;
  font-size: 1.9em;
}
.ml7 .text-wrapper {
  position: relative;
  display: inline-block;
  padding-top: 0.1.9em;
  padding-right: 0.05em;
  padding-bottom: 0.1em;
  overflow: hidden;
}
.ml7 .letter {
  transform-origin: 0 100%;
  display: inline-block;
  line-height: 1em;
}
</style>