/* tslint:disable */
/* eslint-disable */
/**
 * TodoApp
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface PostTodoItemRequest
 */
export interface PostTodoItemRequest {
    /**
     * 
     * @type {string}
     * @memberof PostTodoItemRequest
     */
    'label'?: string | null;
}
/**
 * 
 * @export
 * @interface PutTodoItemRequest
 */
export interface PutTodoItemRequest {
    /**
     * 
     * @type {number}
     * @memberof PutTodoItemRequest
     */
    'id'?: number;
    /**
     * 
     * @type {string}
     * @memberof PutTodoItemRequest
     */
    'label'?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof PutTodoItemRequest
     */
    'isDone'?: boolean;
}
/**
 * 
 * @export
 * @interface TodoItem
 */
export interface TodoItem {
    /**
     * 
     * @type {number}
     * @memberof TodoItem
     */
    'id'?: number;
    /**
     * 
     * @type {string}
     * @memberof TodoItem
     */
    'itemLabel'?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof TodoItem
     */
    'isDelete'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TodoItem
     */
    'isDone'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof TodoItem
     */
    'createdAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof TodoItem
     */
    'modifiedAt'?: string;
}

/**
 * TodoApi - axios parameter creator
 * @export
 */
export const TodoApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiTodoGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/todo`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {PostTodoItemRequest} [postTodoItemRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiTodoPost: async (postTodoItemRequest?: PostTodoItemRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/todo`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(postTodoItemRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {PutTodoItemRequest} [putTodoItemRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiTodoPut: async (putTodoItemRequest?: PutTodoItemRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/todo`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(putTodoItemRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiTodoTemplateGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/todo/template`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} todoId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiTodoTodoIdDelete: async (todoId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'todoId' is not null or undefined
            assertParamExists('apiTodoTodoIdDelete', 'todoId', todoId)
            const localVarPath = `/api/todo/{todoId}`
                .replace(`{${"todoId"}}`, encodeURIComponent(String(todoId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} todoId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiTodoTodoIdGet: async (todoId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'todoId' is not null or undefined
            assertParamExists('apiTodoTodoIdGet', 'todoId', todoId)
            const localVarPath = `/api/todo/{todoId}`
                .replace(`{${"todoId"}}`, encodeURIComponent(String(todoId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TodoApi - functional programming interface
 * @export
 */
export const TodoApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TodoApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiTodoGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<TodoItem>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiTodoGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {PostTodoItemRequest} [postTodoItemRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiTodoPost(postTodoItemRequest?: PostTodoItemRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TodoItem>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiTodoPost(postTodoItemRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {PutTodoItemRequest} [putTodoItemRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiTodoPut(putTodoItemRequest?: PutTodoItemRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TodoItem>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiTodoPut(putTodoItemRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiTodoTemplateGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<TodoItem>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiTodoTemplateGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} todoId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiTodoTodoIdDelete(todoId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<number>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiTodoTodoIdDelete(todoId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} todoId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiTodoTodoIdGet(todoId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TodoItem>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiTodoTodoIdGet(todoId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TodoApi - factory interface
 * @export
 */
export const TodoApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TodoApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiTodoGet(options?: any): AxiosPromise<Array<TodoItem>> {
            return localVarFp.apiTodoGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {PostTodoItemRequest} [postTodoItemRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiTodoPost(postTodoItemRequest?: PostTodoItemRequest, options?: any): AxiosPromise<TodoItem> {
            return localVarFp.apiTodoPost(postTodoItemRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {PutTodoItemRequest} [putTodoItemRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiTodoPut(putTodoItemRequest?: PutTodoItemRequest, options?: any): AxiosPromise<TodoItem> {
            return localVarFp.apiTodoPut(putTodoItemRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiTodoTemplateGet(options?: any): AxiosPromise<Array<TodoItem>> {
            return localVarFp.apiTodoTemplateGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} todoId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiTodoTodoIdDelete(todoId: number, options?: any): AxiosPromise<number> {
            return localVarFp.apiTodoTodoIdDelete(todoId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} todoId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiTodoTodoIdGet(todoId: number, options?: any): AxiosPromise<TodoItem> {
            return localVarFp.apiTodoTodoIdGet(todoId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TodoApi - object-oriented interface
 * @export
 * @class TodoApi
 * @extends {BaseAPI}
 */
export class TodoApi extends BaseAPI {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TodoApi
     */
    public apiTodoGet(options?: AxiosRequestConfig) {
        return TodoApiFp(this.configuration).apiTodoGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {PostTodoItemRequest} [postTodoItemRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TodoApi
     */
    public apiTodoPost(postTodoItemRequest?: PostTodoItemRequest, options?: AxiosRequestConfig) {
        return TodoApiFp(this.configuration).apiTodoPost(postTodoItemRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {PutTodoItemRequest} [putTodoItemRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TodoApi
     */
    public apiTodoPut(putTodoItemRequest?: PutTodoItemRequest, options?: AxiosRequestConfig) {
        return TodoApiFp(this.configuration).apiTodoPut(putTodoItemRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TodoApi
     */
    public apiTodoTemplateGet(options?: AxiosRequestConfig) {
        return TodoApiFp(this.configuration).apiTodoTemplateGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} todoId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TodoApi
     */
    public apiTodoTodoIdDelete(todoId: number, options?: AxiosRequestConfig) {
        return TodoApiFp(this.configuration).apiTodoTodoIdDelete(todoId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} todoId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TodoApi
     */
    public apiTodoTodoIdGet(todoId: number, options?: AxiosRequestConfig) {
        return TodoApiFp(this.configuration).apiTodoTodoIdGet(todoId, options).then((request) => request(this.axios, this.basePath));
    }
}


