/* eslint-disable @typescript-eslint/no-explicit-any */
class ApiService {
  private baseUrl: string;

  constructor() {
    this.baseUrl = "https://sisback5.azurewebsites.net";
  }

  private getToken() {
    return sessionStorage.getItem("token");
  }

  private async request(endpoint: string, method: string = "GET", body?: any) {
    const headers: HeadersInit = {
      "Content-Type": "application/json",
    };

    const token = this.getToken();
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

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
    return this.request(endpoint, "PATCH", data);
  }

  public delete(endpoint: string, data: any) {
    return this.request(endpoint, "DELETE", data);
  }
}

export default new ApiService();
