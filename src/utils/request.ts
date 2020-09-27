import qs from 'qs';
import { RouteURL } from './resources';

enum Method { Get = 'GET', Post = 'POST', Delete = 'DELETE' }

const request = async <T>(
  method: Method, url: string, params: Record<string, unknown> = {},
): Promise<T> => {
  const fetchConfig: RequestInit = {
    method,
    credentials: 'same-origin',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  let targetUrl = url;

  switch (method) {
    case Method.Get:
    case Method.Delete:
      targetUrl += qs.stringify(params, { addQueryPrefix: true, arrayFormat: 'comma' });
      break;
    case Method.Post:
      fetchConfig.body = JSON.stringify(params);
      break;
    default:
  }

  const resp = await fetch(targetUrl, fetchConfig);
  const respJson = await resp.json() as T;
  if (resp.status >= 200 && resp.status < 300) {
    return respJson;
  }
  if (resp.status === 401) {
    globalThis.history.replaceState(undefined, '', RouteURL.adminLogin);
  }
  const newError = new Error('Request failed');
  Object.assign(newError, { json: respJson });
  throw newError;
};

type Request = <T>(url: string, params?: Record<string, unknown>) => Promise<T>;
const methodGet: Request = (url, params) => request(Method.Get, url, params);
const methodPost: Request = (url, params) => request(Method.Post, url, params);
const methodDelete: Request = (url, params) => request(Method.Delete, url, params);

export default { get: methodGet, post: methodPost, delete: methodDelete };
