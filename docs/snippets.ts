/* SNIPPET_START: example */
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
/* SNIPPET_END: example */
