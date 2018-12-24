import { ThunkAction } from 'redux-thunk'
import { ActionCreator, Action } from 'redux'

export type AsyncThunk = ActionCreator<ThunkAction<any, ReduxState, void, Action>>
export type Thunk = ActionCreator<ThunkAction<any, ReduxState, void, Action>>

export type Operation = (...args: any[]) => void

export interface ReduxState {
  readonly threads : {
    objects: { [id : string] : ThreadObject },
    ids: string[]
  }
  readonly posts : {
    objects: { [id : string] : PostObject },
    ids: string[]   
  }
  isLoading : boolean
}

export interface PostObject {
  readonly id : string,
  readonly readableId : string,
  readonly createdAt : string,
  readonly text : string
}

export interface ThreadObject {
  readonly id : string,
  readonly posts : string[],
  readonly postCount : number,
  readonly op : string
}

export type MockPostObject = PostObject

export interface MockThreadObject {
  readonly id : string,
  readonly posts : MockPostObject[],
  readonly postCount : number,
  readonly op : MockPostObject
}

export interface ErrorResponse {
  readonly error : true
  readonly reason : string
}

export interface ThreadsResponse {
  readonly threads : MockThreadObject[],
  readonly error : false
}

export interface ThreadResponse {
  readonly thread : MockThreadObject,
  readonly error : false
}

export interface RandomTextMeResponse {
  readonly type : string,
  readonly amount : number,
  readonly number : string,
  readonly number_max : string,
  readonly format : string,
  readonly time : string,
  readonly text_out : string
}
