import { Action, State, StateContext, Selector } from '@ngxs/store';
import { {{pascalCase name}}Action } from './{{dashCase name}}.actions';

export interface {{pascalCase name}}StateModel {
  items: string[];
}

@State<{{pascalCase name}}StateModel>({
  name: '{{camelCase name}}',
  defaults: {
    items: []
  }
})
export class {{pascalCase name}}State {

  constructor() {}

  @Selector()
  static items(state: {{pascalCase name}}StateModel) {
    return state.items;
  }

  @Action({{pascalCase name}}Action)
  add({ getState, setState }: StateContext<{{pascalCase name}}StateModel>, { payload }: {{pascalCase name}}Action) {
    const state = getState();
    setState({ items: [ ...state.items, payload ] });
  }
}
