<script lang="ts">
	import { Button } from 'flowbite-svelte';
	import { onMount } from 'svelte';
	const nameList = [
		'@twskr41',
		'@MqyJa',
		'@pmnyns_1137',
		'@bethebluemoon',
		'@klangbadaipa',
		'@tmxmps_',
		'@honeybee49',
		'@pagshebiloey',
		'@RPanampai',
		'@oranjiicat',
		'@bormor_wq',
		'@Hikari010651',
		'@coccinella725',
		'@Bbig512',
		'@canusmilex',
		'@ppxncxs',
		'@Perthcgmsupport',
		'@BSanrise',
		'@duexsong',
		'@favbluearely',
		'@nijuninew_',
		'@themeowwars',
		'@gutnovert',
		'@5ravyjwi',
		'@makpenmaesitagu',
		'@KJP_LookKaew',
		'@stmpfg',
		'@pphiiku',
		'@nmwnwy',
		'@mypakamn',
		'@deepbluebreeze_',
		'@myxstnn',
		'@ASDW724102',
		'@tangngie',
		'@rbmx_13',
		'@evesamx',
		'@KN_DoubleT',
		'@nongdumbostore'
	];
	let participantText = '';
	$: participantText;
	let participantList: string[] = [];
	$: participantList = participantText.split('\n') || ['Error'];
	let winnerCount = 1;
	$: winnerCount = winnerCount < 1 ? 1 : winnerCount;
	let winners: number[] = [];
	let currents: number[] = [];
	let cooldown = 100;
	let intervalPass = 0;
	let showRealWinner = false;
	let clearing = false;

	const clearWinner = () => {
		clearing = true;
		winners = [];
		currents = [];
		cooldown = 100;
		intervalPass = 0;
		showRealWinner = false;
	};

	const getWinner = () => {
		clearing = false;
		if (!participantList) {
			currents;
		}
		for (let i = 0; i < winnerCount; i++) {
			winners.push(Math.floor(Math.random() * 100) % participantList.length);
			currents.push(Math.floor(Math.random() * 100) % participantList.length);
		}
		const intervalId = setInterval(() => {
			if (clearing) {
				clearInterval(intervalId);
				return;
			}
			if (cooldown > 2000) {
				clearInterval(intervalId);
				showRealWinner = true;
			} else {
				setTimeout(() => {
					for (let i = 0; i < winnerCount; i++) {
						currents[i] = Math.floor(Math.random() * 100) % participantList.length;
					}
					cooldown += 1 * 1 ** intervalPass;
					intervalPass += 0.1;
					console.log(currents);
				}, cooldown);
			}
		}, cooldown);
		console.log(currents);
	};
</script>

<section class="flex flex-col items-center justify-center pt-16 gap-4">
	<p>Participant</p>
	<textarea name="" id="" cols="30" rows="10" class="text-black" bind:value={participantText} />
	<label for="winnerCount">Winner Count</label>
	<input type="number" name="winnerCount" id="" bind:value={winnerCount} class="text-black" />
	<p>Winner list</p>
	<div class="grid grid-cols-2 gap-4">
		<Button size="lg" on:click={() => getWinner()}>Show Winner</Button>
		<Button size="lg" color="red" on:click={() => clearWinner()}>Reset</Button>
	</div>
	<div class="w-[50%]">
		{#if showRealWinner}
			{#each winners as winner, i}
				<table
					class="w-full text-sm text-left text-gray-500 dark:text-gray-400 border-2 border-r-2 rounded border-gray-500"
				>
					<tbody class="rounded">
						{#if i % 2 == 0}
							<tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700 rounded">
								<th
									scope="row"
									class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white rounded-t"
								>
									{participantList[winner]}
								</th>
							</tr>
						{:else}
							<tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
								<th
									scope="row"
									class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
								>
									{participantList[winner]}
								</th>
							</tr>
						{/if}
					</tbody>
				</table>
			{/each}
		{:else}
			{#each currents as current, i}
				<table
					class="w-full text-sm text-left text-gray-500 dark:text-gray-400 border-2 border-r-2 rounded border-gray-500"
				>
					<tbody class="rounded">
						{#if i % 2 == 0}
							<tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700 rounded">
								<th
									scope="row"
									class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white rounded-t"
								>
									{participantList[current]}
								</th>
							</tr>
						{:else}
							<tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
								<th
									scope="row"
									class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
								>
									{participantList[current]}
								</th>
							</tr>
						{/if}
					</tbody>
				</table>
			{/each}
		{/if}
	</div>
</section>
