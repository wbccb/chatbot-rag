import { Readable } from "stream";

export class StreamService {
  // 从字符串 => stream
  fromString(content: string): Readable {
    const stream = new Readable();
    stream.push(content);
    stream.push(null);
    return stream;
  }

  // 从Buffer => stream
  fromBuffer(buffer: Buffer): Readable {
    const stream = new Readable();
    stream.push(buffer);
    stream.push(null);
    return stream;
  }

  // 从异步数据源生成流
  async fromAsyncGenerator<T>(generator: AsyncGenerator<T>): Promise<Readable> {
    const stream = new Readable({
      read() {},
    });
    await (async () => {
      for await (const chunk of generator) {
        console.log("chunk", chunk);
        stream.push(JSON.stringify({ content: chunk, is_end: false }) + "\n\n");
      }
      stream.push(JSON.stringify({ content: "", is_end: true }) + "\n\n");
      stream.push(null);
    })();
    return stream;
  }
}
