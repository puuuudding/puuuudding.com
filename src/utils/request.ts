import qs from 'qs';
import { RouteURL } from './resources';

enum METHOD { GET = 'GET', POST = 'POST', DELETE = 'DELETE' }

const request = async (method: METHOD, url: string, params: any = {}): Promise<any> => {
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
    case METHOD.GET:
    case METHOD.DELETE:
      targetUrl += qs.stringify(params, { addQueryPrefix: true, arrayFormat: 'comma' });
      break;
    case METHOD.POST:
      fetchConfig.body = JSON.stringify(params);
      break;
    default:
  }

  const resp = await fetch(targetUrl, fetchConfig);
  const respJson = await resp.json();
  if (resp.status >= 200 && resp.status < 300) {
    return respJson;
  }
  if (resp.status === 401) {
    globalThis.history.replaceState(undefined, '', RouteURL.adminLogin);
  }
  const newError: any = new Error('Request failed');
  Object.assign(newError, { json: respJson });
  throw newError;
};

const methodGet = (url: string, params?: any) => request(METHOD.GET, url, params);
const methodPost = (url: string, params?: any) => request(METHOD.POST, url, params);
const methodDelete = (url: string, params?: any) => request(METHOD.DELETE, url, params);

export default { get: methodGet, post: methodPost, delete: methodDelete };
