import { createSignal, createResource, For, Show, Suspense } from 'solid-js';

export default function Schedule() {
  const [slug, setSlug] = createSignal(false);

  const [schedule] = createResource(async () => {
    return fetch('https://www.learnwithjason.dev/api/schedule').then((res) =>
      res.json(),
    );
  });

  const [episode] = createResource(slug, async (slug) => {
    return fetch(`https://www.learnwithjason.dev/api/episode/${slug}`).then(
      (res) => res.json(),
    );
  });

  function handleSelect(event) {
    setSlug(event.target.value);
  }

  return (
    <>
      <select onInput={handleSelect}>
        <For each={schedule()}>
          {(item) => <option value={item.slug.current}>{item.title}</option>}
        </For>
      </select>
      <Suspense fallback={<p>loading...</p>}>
        <Show when={episode()}>
          <section>
            <h1>{episode().title}</h1>
          </section>
        </Show>
      </Suspense>
    </>
  );
}
