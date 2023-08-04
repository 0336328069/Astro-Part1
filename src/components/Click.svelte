<script lang=ts>
  import { onMount } from "svelte";

    type Card = {
      id: number | string;
      title: string;
      author: string;
      content: string;
    };
    export let listCard: Card[];
    export let typeClient: string;
    const handleClick = (item: Card) => {
        console.log(item);
    };
	
	console.log(typeClient);
</script>
<div class="grid grid-cols-3 gap-2 mx-2 text-white">
    {listCard} {typeClient}
</div>