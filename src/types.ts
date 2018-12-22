import { ThunkAction } from 'redux-thunk'
import { FSA } from 'flux-standard-action'
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
  readonly posts : PostObject[],
  readonly postCount : number,
  readonly op : PostObject
}

export interface ErrorResponse {
  readonly error : true
  readonly reason : string
}

export interface ThreadsResponse {
  readonly data : ThreadObject[],
  readonly error : false
}

export interface ThreadResponse {
  readonly data : ThreadObject,
  readonly error : false
}
