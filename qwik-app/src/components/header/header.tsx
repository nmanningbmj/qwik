import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import Topics from '~/data/Topic';

console.log(Topics)

import styles from './header.css';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header>
      <div class="logo">
        <a href="" target="_blank" title="qwik">
        </a>
      </div>
      <ul>
        <li>
          <Link href="/" className="header__link">
          Home
          </Link>
        </li>
        <li>
          <Link href="/treatment-algorithm/" className="header__link">
          Treatment Algorithm
          </Link>
        </li>

        <li>
          <Link href="/topic-list/" className="header__link"> 
          Topics
          </Link>
        </li>
      </ul>
    </header>
  );
});
