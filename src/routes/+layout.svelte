<nav>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>

<main>
  <slot></slot>
</main>

<style>
 ul {
  list-style: none;
  padding:0;
  display:flex;
  gap:1rem;
 }

 a {
  border:1px solid var(--primary);
    padding:.25rem;
    border-radius:.25rem;
    cursor: pointer;
    transition:.25s;
    text-decoration: none;
 }
 a:hover {
    translate: -2px -2px;
    background-color: rebeccapurple;
    color:#fff;
  }
</style>