import { Controller, UseInterceptors, Res } from "@nestjs/common";
import { StreamInterceptor } from "./stream.interceptor";
import { StreamService } from "./stream.service";
import { Response } from "express";

@Controller("stream")
@UseInterceptors(StreamInterceptor)
export class StreamController {
  constructor(private readonly streamService: StreamService) {}

  streamData(@Res() res: Response, text: string) {
    res.header("Content-Type", "text/event-stream");
    res.header("Cache-Control", "no-cache");

    const stream = this.streamService.fromString(text);

    stream.on("data", (chunk) => {
      res.write(`data: ${chunk.toString()}\n\n`);
    });

    stream.on("end", () => {
      res.end();
    });

    stream.on("error", (err) => {
      res.write(`event: error\ndata: ${err.message}\n\n`);
      res.end();
    });
  }
}
