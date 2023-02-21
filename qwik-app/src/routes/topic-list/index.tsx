import { component$ } from '@builder.io/qwik';
import { DocumentHead, Link } from '@builder.io/qwik-city';
import Topics from '~/data/Topic';

export default component$(() => {
  return (
    <>
      <h1>List of topics</h1>
      {Topics.map((item) => (
        <Link href={item.id} className="header__link">
          <li>{item.topic}</li>
          </Link>
        ))}
    </>
  );
});

export const head: DocumentHead = {
  title: 'List of topics',
};
