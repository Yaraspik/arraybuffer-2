import ArrayBufferConverter from '../arrayBufferConverter';

test('load buffer', () => {
  const arrayBufferConverter = new ArrayBufferConverter();
  arrayBufferConverter.load('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
  expect(Object.prototype.hasOwnProperty.call(arrayBufferConverter, 'bufferView')).toBe(true);
});

test('buffer to string', () => {
  const arrayBufferConverter = new ArrayBufferConverter();
  arrayBufferConverter.load('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
  expect(arrayBufferConverter.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
