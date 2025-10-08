![cover](./docs/cover.png)

```sh
> npm install yapcat
```

# yapcat

yapcat is a small event emitting library

## Usage

```ts
import { topic } from 'yapcat';

// create a new topic
const onExample = topic<[number, string]>();

// add a listener to the topic
const unsubscribe = onExample.add((num, str) => {
    console.log('Example event received:', num, str);
});

// emit an event
onExample.emit(1, 'hello');

// Console: Example event received: 1 'hello'

// stop listening to the event
unsubscribe();

// clear all listeners
onExample.clear();
```

## API Documentation

### topic

#### `Listener`

```ts
export type Listener<T extends unknown[]> = (...data: T) => void;
```

#### `Unsubscribe`

```ts
export type Unsubscribe = () => void;
```

#### `Topic`

```ts
export type Topic<T extends unknown[]> = {
    listeners: Set<Listener<T>>;
    add(handler: Listener<T>): Unsubscribe;
    remove(handler: Listener<T>): void;
    emit(...data: T): void;
    clear(): void;
};
```

#### `topic`

```ts
export function topic<T extends unknown[]>(): Topic<T>;
```


