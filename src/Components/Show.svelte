<script lang="ts">
    import { onMount } from "svelte";
    import Text1 from "./ShowText/Text1.svelte";
	import Text2 from "./ShowText/Text2.svelte";
	import Text3 from "./ShowText/Text3.svelte";
	import Text4 from "./ShowText/Text4.svelte";
	import Text5 from "./ShowText/Text5.svelte";
	import Text6 from "./ShowText/Text6.svelte";
	import Text7 from "./ShowText/Text7.svelte";
	import Text8 from "./ShowText/Text8.svelte";
	import Text9 from "./ShowText/Text9.svelte";
	import Text10 from "./ShowText/Text10.svelte";
	import { Button } from "flowbite-svelte";
    export let name: string | null;
    export let cnt: number
    const handleNext = () => {
        cnt += 1
        cnt = cnt % 20
    }
</script>
<section class="text-[10vw] w-[100%] h-screen overflow-y-hidden">
<!-- <div class="translate-x-[-50%] left-[50%] translate-y-[-50%] top[50%] h-fit"> -->
    {#if cnt == 0}
    <Text1 {name} on:next={handleNext}/>
    {:else if cnt == 1}
    <Text2 {name} on:next={handleNext}/>
    {:else if cnt == 2}
    <Text3 {name} on:next={handleNext} />
    {:else if cnt == 3}
    <Text4 {name} on:next={handleNext}/>
    {:else if cnt == 4}
    <Text5 {name} on:next={handleNext}/>
    {:else if cnt == 5}
    <Text6 {name} on:next={handleNext}/>
    {:else if cnt == 6}
    <Text7 {name} on:next={handleNext}/>
    {:else if cnt == 7}
    <Text8 {name} on:next={handleNext}/>
    {:else if cnt == 8}
    <Text9 {name} on:next={handleNext}/>
    {:else if cnt == 9}
    <Text10 {name} on:next={handleNext}/>
    <!-- {:else if cnt == 1}
    <Text2 {name} on:next={handleNext}/>
    <p>3</p> -->
    {/if}
<!-- </div> -->
<div class="absolute bottom-0 w-screen justify-between flex flex-row p-8 text-base sm:text-xl">
    <Button color="alternative" on:click={() => {cnt = (cnt - 1) < 0 ? 9: cnt - 1}}>{"<"}</Button>
    <Button color="alternative" on:click={() => {cnt = (cnt + 1) > 9 ? 0: cnt + 1}}>{">"}</Button>
</div>
</section>

