import * as actions from '../actions/package-collection';
import * as models from '../models';

export interface State {
  isLoaded: boolean;
  isLoading: boolean;
  items: Array<models.Package>;
}

const initialState: State = {
  isLoaded: true,
  isLoading: false,
  items: _getPackages()
};

export function reducer(state = initialState, action: actions.Actions): State {
  switch (action.type) {
    case actions.LOAD: {
      return Object.assign({}, state, {
        isLoading: true
      });
    }

    case actions.LOAD_SUCCESS: {
      const payload: actions.LoadSuccessPayload = action.payload;

      return {
        isLoaded: true,
        isLoading: false,
        items: payload.data
      };
    }

    default: {
      return state;
    }
  }
}

export const getIsLoaded = (state: State) => state.isLoaded;
export const getIsLoading = (state: State) => state.isLoading;
export const getItems = (state: State) => state.items;

function _getPackages(): Array<models.Package> {
  const arr: Array<models.Package> = [];

  const p1 = new models.Package();
  p1.id = 1;
  p1.name = 'Bronze';
  arr.push(p1);

  const p2 = new models.Package();
  p2.id = 2;
  p2.name = 'Silver';
  arr.push(p2);

  const p3 = new models.Package();
  p3.id = 3;
  p3.name = 'Gold';
  arr.push(p3);

  const p4 = new models.Package();
  p4.id = 4;
  p4.name = 'Platinum';
  arr.push(p4);

  return arr;
};
