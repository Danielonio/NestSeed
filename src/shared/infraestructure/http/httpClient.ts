import Axios from 'axios';
import { CustomLogger } from '../logging/custom.logger';

export class HttpClient {
  private logger = new CustomLogger(HttpClient.name);

  constructor(private readonly serviceName: string) {}

  public async get(url: string, params?: object) {
    const request = async () =>
      Axios.get(url, {
        params,
      });

    const logRequestData = {
      url,
      method: 'GET',
      params,
    };

    return this.sendRequest(request, logRequestData);
  }

  async sendRequest(request, logRequestData) {
    const startTime = new Date();
    let data;
    let status;
    let gotError = false;

    try {
      const response = await request();
      status = response.status;
      data = response.data;
    } catch (error) {
      if (error.response) {
        // Request made but the server responded with an error
        data = error.response.data;
        status = error.response.status;
        gotError = true;
      } else if (error.request) {
        // Request made but no response is received from the server.
        gotError = true;
      } else {
        throw new error('Error occured while setting up the request');
      }
    }

    const requestTime = new Date().getTime() - startTime.getTime();
    const logData = {
      serviceName: this.serviceName,
      ...logRequestData,
      status,
      requestTime,
      data,
    };
    if (gotError) {
      this.logger.warn(JSON.stringify(logData));
    } else {
      this.logger.debug(JSON.stringify(logData));
    }
    return { status, data };
  }
}
