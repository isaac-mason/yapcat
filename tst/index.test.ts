import { expect, test, vi } from 'vitest';
import { topic } from '../dist';

test('topic', () => {
    const exampleTopic = topic<[number, string]>();

    const fn1 = vi.fn();
    const fn2 = vi.fn();

    exampleTopic.add(fn1);
    exampleTopic.add(fn2);

    exampleTopic.emit(1, 'hello 1');

    expect(fn1).toHaveBeenCalledWith(1, 'hello 1');
    expect(fn2).toHaveBeenCalledWith(1, 'hello 1');

    exampleTopic.remove(fn2);

    exampleTopic.emit(2, 'hello 2');

    expect(fn1).toHaveBeenCalledWith(2, 'hello 2');
    expect(fn2).not.toHaveBeenCalledWith(2, 'hello 2');

    exampleTopic.clear();

    exampleTopic.emit(3, 'hello 3');

    expect(fn1).not.toHaveBeenCalledWith(3, 'hello 3');
    expect(fn2).not.toHaveBeenCalledWith(3, 'hello 3');
});
