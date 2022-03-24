import { createSignal, createEffect } from 'solid-js';

//const get = 0, put = 1
const count$ = createSignal(0);

export default function Counter() {
  function add() {
    count$[1](count$[0]() + 1);
  }

  function remove() {
    count$[1](count$[0]() - 1);
  }

  createEffect(() => {
    console.log(`hello ${count$[0]()}`);
  });

  return (
    <div>
      <button onClick={add}>Add</button>
      <button onClick={remove}>Remove</button>
      <p>Current count is {count$[0]()}</p>
    </div>
  );
}
