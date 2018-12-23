import { ThunkAction } from 'redux-thunk'
import { ActionCreator, Action } from 'redux'

export type Thunk = ActionCreator<ThunkAction<Promise<Action>, ReduxState, void, Action>>

export interface ReduxState {
  readonly threads : {
    objects: { [id : string] : ThreadObject },
    ids: string[]
  }
  readonly posts : {
    objects: { [id : string] : PostObject },
    ids: string[]   
  }
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
  readonly op : PostObject
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
  readonly data : MockThreadObject[],
  readonly error : false
}

export interface ThreadResponse {
  readonly data : MockThreadObject,
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
