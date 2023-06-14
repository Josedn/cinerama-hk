import { SwarmStats } from "./cineStreamTypes";
import ConfigManager from "../../utils/ConfigManager";
import { ConfigKeys } from "../../utils/ConfigKeys";

const STREAM_ENDPOINT = "/stream/";
const API_URL = ConfigManager.getString(ConfigKeys.REACT_APP_CINE_STREAM_API_URL);

const headers = (() => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  return headers;
})();

const prepareGet = <T>(endpoint: string): Promise<T> => {
  return new Promise((resolve, reject) => {
    const options: RequestInit = {
      method: "GET",
      mode: "cors",
      headers,
    };

    fetch(API_URL + endpoint, options)
      .then(response => response.json())
      .then(data => {
        resolve(data as T);
      })
      .catch(err => {
        reject(err);
      });
  });
};

const preparePost = <T>(rawBody: any, endpoint: string): Promise<T> => {
  return new Promise((resolve, reject) => {
    var body = JSON.stringify(rawBody);

    const options: RequestInit = {
      method: "POST",
      mode: "cors",
      headers,
      body,
    };

    fetch(API_URL + endpoint, options)
      .then(response => response.json())
      .then(data => {
        resolve(data as T);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const startNewStream = (magnetUrl: string): Promise<SwarmStats> => {
  return preparePost({ magnetUrl }, STREAM_ENDPOINT);
};

export const getStream = (infohash: string): Promise<SwarmStats> => {
  return prepareGet(STREAM_ENDPOINT + infohash);
};

export const getOpenSubtitlesHashForStream = (infohash: string): Promise<SwarmStats> => {
  return prepareGet(STREAM_ENDPOINT + infohash + "/hash");
};

export const getAllStreams = (): Promise<SwarmStats[]> => {
  return prepareGet(STREAM_ENDPOINT);
};

export const generateDownloadUrlForStream = (infohash: string): string => {
  return API_URL + STREAM_ENDPOINT + infohash + "/download/0";
};
