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
}
