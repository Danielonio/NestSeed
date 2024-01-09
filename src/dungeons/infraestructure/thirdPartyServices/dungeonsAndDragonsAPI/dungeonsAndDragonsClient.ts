import Axios from 'axios';

export class DungeonsAndDragonsHttpClient {
  baseEndpoint: string;

  constructor() {
    this.baseEndpoint = 'https://www.dnd5eapi.co/api/';
  }
  public async get(url: string, params?: object) {
    const request = async () =>
      Axios.get(this.baseEndpoint + url, {
        params,
      });

    return this.handleResponse(request);
  }
  async handleResponse(request) {
    const response = await request();
    return response.data;
  }
}
