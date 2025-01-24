import {NameSpace} from '../../const';
import {RequestStatus, State} from '../../types/state';
import {AuthorizationStatus} from '../../const';

export const getAuthorizationStatus = (state: State): AuthorizationStatus =>
  state[NameSpace.User].authorizationStatus;

export const getAuthCheckedStatus = (state: State): boolean =>
  state[NameSpace.User].authorizationStatus !== AuthorizationStatus.Unknown;

export const getLoginRequestLoading = (state: State): boolean =>
  state[NameSpace.User].loginStatus === RequestStatus.Loading;

