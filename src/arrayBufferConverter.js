export default class ArrayBufferConverter {
  load(data) {
    this.buffer = new ArrayBuffer(data.length * 2);
    this.bufferView = new Uint16Array(this.buffer);
    for (let i = 0; i < data.length; i += 1) {
      this.bufferView[i] = data.charCodeAt(i);
    }
  }

  toString() {
    const result = [];
    for (let i = 0; i < this.bufferView.length; i += 1) {
      result.push(String.fromCharCode(this.bufferView[i]));
    }
    return result.join('');
  }
}
