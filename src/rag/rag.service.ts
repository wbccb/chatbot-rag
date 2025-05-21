import { Injectable } from "@nestjs/common";

@Injectable()
export class RagService {
  async recursiveRetrieval(text: string) {
    console.log("触发混合检索:", text);

    // TODO 使用ragflow部署的接口进行访问，就跟ragflow.git的web文件夹中的请求路径一样
    return "这是混合检索的产物";
  }
}
