import { Book } from "../../src/entities/Book";

test('it should be test', () => {
  const book = new Book("Design Patterns", "Erich Gamma", 300);
  expect(book.author).toBeDefined();
})