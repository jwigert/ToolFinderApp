import { SortPipe } from './sort.pipe';
import { Operation } from './operation';

describe('SortPipe', () => {
  let pipe: SortPipe;

  beforeEach(() => {
    pipe = new SortPipe();
  });

  it('should create an instance successfully', () => {
    const pipe = new SortPipe();
    expect(pipe).toBeTruthy();
  });

  it('should sort the array in ascending order according to name', () => {
    const operations: Operation[] = [
      { id: '2', name: 'B' },
      { id: '1', name: 'A' },
      { id: '3', name: 'C' }
    ];

    const sortedOperations = pipe.transform(operations);

    expect(sortedOperations[0].name).toBe('A');
    expect(sortedOperations[1].name).toBe('B');
    expect(sortedOperations[2].name).toBe('C');
  });

  it('should return an empty array when the input is an empty array', () => {
    const sortedOperations = pipe.transform([]);

    expect(sortedOperations.length).toBe(0);
  });
});
