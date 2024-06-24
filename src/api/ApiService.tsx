/* eslint-disable @typescript-eslint/no-explicit-any */
class ApiService {
  private baseUrl: string;

  constructor() {
    this.baseUrl = "http://localhost:8080";
  }

  private async request(endpoint: string, method: string = "GET", body?: any) {
    const headers = {
      "Content-Type": "application/json",
    };

    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  }

  public get(endpoint: string) {
    return this.request(endpoint, "GET");
  }

  public post(endpoint: string, data: any) {
    return this.request(endpoint, "POST", data);
  }

  public put(endpoint: string, data: any) {
    return this.request(endpoint, "PUT", data);
  }

  public delete(endpoint: string) {
    return this.request(endpoint, "DELETE");
  }
}

export default new ApiService();
