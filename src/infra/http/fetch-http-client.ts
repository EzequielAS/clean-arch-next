import { HttpRequest, HttpResponse } from "@/data/protocols/http";

export class FetchHttpClient {
  async request (data: HttpRequest): Promise<HttpResponse> {
    let response

    try {
      const fetchResult = await fetch(data.url, {
        ...data,
        method: data.method,
        body: data.body,
        headers: data.headers
      })

      const resultData = await fetchResult.json()

      response = {
        status: fetchResult.status,
        body: resultData
      }
    } catch (error: any) {
      response = error.response
    }

    return {
      statusCode: response.status,
      body: response.body
    }
  }
}
