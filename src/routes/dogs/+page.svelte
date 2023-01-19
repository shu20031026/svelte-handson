<script>
  export let data;

  let { dogs } = data;

  const fetchDogs = async () => {
    const res = await fetch(
      "https://api.thecatapi.com/v1/images/search?limit=10"
    );
    dogs = [...(await res.json())];
  };

  const onClickRefreshDogs = () => {
    fetchDogs();
  };
</script>

<h1>Random dogs</h1>
<button on:click={onClickRefreshDogs}> Refresh dogs </button>
<div class="dogs-container">
  {#each dogs as dog (dog.id)}
    <img
      src={dog.url}
      alt="Cat image of {dog.id}"
      width="300"
      height="300"
      class="dog-image"
    />
  {/each}
</div>

<style>
  .dogs-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0.2rem;
    max-width: calc(900px + 0.4rem);
  }

  .dog-image {
    object-fit: cover;
  }
</style>
