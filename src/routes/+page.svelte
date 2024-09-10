<script>
  export let data

  function checkAvatarUrl (url) {
    return url.startsWith('https://') 
  }
</script>


<h1>Squad 1D</h1>

<ul>
  {#each data.persons as person}
    <li>
      <a href="/{person.id}">
        <span class="avatar">
          {#if person.avatar && checkAvatarUrl(person.avatar)}
            <img src="{person.avatar}" alt="Avatar van {person.name}">
          {:else if person.avatar}
            {person.avatar}
          {:else}
            <img src="https://robohash.org/mail@ashallendesign.co.uk" alt="Avatar van {person.name}">
          {/if}
        </span>

        {person.name}
      </a>
    </li>
  {/each}
</ul>

<style>
  ul {
    list-style: none;
    padding:0;
    display:flex;
    gap:1rem;
    align-items:start;
    min-width:100%;
    overflow-x:auto;
    scroll-snap-type: x mandatory;
  }
  
  ul li {
    scroll-snap-align: center;
  }

  /* @supports (animation-timeline: scroll()) { */
    ul li {
        view-timeline-name: --happy-scroller;
        view-timeline-axis: inline;
        view-timeline-inset: 0% 0%;
        animation-range: 25% 25%;

        animation: linear appear both;
        animation-timeline: --happy-scroller;
    }

    ul li a {
        animation: linear appear both;
        animation-timeline: --happy-scroller;
    }

    @keyframes appear {
        0% {
            rotate:-10deg;
            opacity:.1;
            scale:.9;
        }
        50% {
            opacity:1;
            scale:1;
            rotate:0;
        }
        100% {
            opacity: .1;
            scale:.9;
            rotate: 10deg;
        }
    }
  /* } */

  ul::-webkit-scrollbar {
    display: none;
  }

  a {
    display:flex;
    flex-direction: column;
    align-items: center;
    gap:1rem;
    margin-bottom: 1rem;
    border-radius: .25rem;
    border:1px solid var(--primary);
    overflow:hidden;
    padding:0 0 .25rem;
    text-decoration:none;
  }
  a:hover {
    background-color: rgb(233, 255, 90);  
  }
  span {
    display:flex;
    justify-content:center;
    align-items:center;
    width:10rem;
    aspect-ratio: 1 / 1;
    font-size: 3rem;
  }
  img {
    max-width:100%;
    aspect-ratio: 1/1;
    object-fit: contain;
  }

</style>
