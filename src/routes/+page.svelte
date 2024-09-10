<script>
  import { onMount } from 'svelte'
  //console.log(document) // document is not defined, because component isn't mounted (rendered in the DOM) yet

  onMount(() => {
    console.log(document)
  })

  export let data

  function checkAvatarUrl (url) {
    return url.startsWith('https://') 
  }

  function followPointer(event){
    const cards = document.querySelectorAll('ul li')
    const width = window.innerWidth
    const height = window.innerHeight

    let cx = Math.ceil(width / 1.8)
    let cy = Math.ceil(height / 1.8)
    let dx = event.pageX - cx
    let dy = event.pageY - cy

    cards.forEach(card => {
      card.style.setProperty('--mouse-x', `${dx}px`)
      card.style.setProperty('--mouse-y', `${dy}px`)
    })
  }
</script>

<svelte:window on:mousemove={followPointer} />

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
    padding:5em 0;
    display:flex;
    gap:1rem;
    align-items:start;
    min-width:100%;
    overflow-x:auto;
    scroll-snap-type: x mandatory;
  }
  
  ul li {
    --mouse-x:0;
    --mouse-y:0;

    transform: translate3d(calc(var(--mouse-x) / 10), calc(var(--mouse-y) / 10), 0);  
    scroll-snap-align: center;
  }


  @supports (animation-timeline: scroll()) {
    ul li {
        view-timeline-name: --happy-scroller;
        view-timeline-axis: inline;
        view-timeline-inset: -10% -10%;
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
            scale:.5;
        }
        50% {
            opacity:1;
            scale:1;
            rotate:0;
        }
        100% {
            opacity: .1;
            scale:.5;
            rotate: 10deg;
        }
    }
  }

  ul::-webkit-scrollbar {
    display: none;
  }

  ul li a {
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
    background-color: hsl(145, 98%, 22%);
    color:hsl(68, 100%, 68%);
    transition:.25s
  }
  ul li a:hover {
    background-color: hsl(145, 87%, 15%);  
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
    object-fit: cover;
  }
</style>
