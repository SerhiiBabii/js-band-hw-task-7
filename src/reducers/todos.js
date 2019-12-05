import {
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
  TOGGLE_STATUS_TODO_ITEM,
  SHOW_FILTERED_TODO_ITEMS,
  SHOW_MODAL_AREA,
  HIDE_MODAL_AREA,
  SAVE_EDITED_TODO_ITEM,
  EDIT_TODO_ITEM,
  CHANGE_MODAL_FIELD,
} from '../actions/actionsTypes';
import saveEditTodoItem from '../additionalFunctions/saveEditTodoItem';

const initialState = {
  todos: [
    {
      id: 1,
      title: '123',
      description: 'klsjfd sldk fjsadlf!',
      priority: 'high',
      status: true,
    },
    {
      id: 2,
      title: 'kjsdf123',
      description: '90-=klsjfd sldk fjsadlf!',
      priority: 'low',
      status: true,
    },
    {
      id: 3,
      title: 'l;kfdh123',
      description: '12313klsjfd sldk fjsadlf!',
      priority: 'normal',
      status: false,
    },
  ],
  filters: {
    search1: '',
    status1: 'all',
    priority1: 'all',
  },
  modalFields: {
    modalTitle: '',
    modalDescription: '',
    modalPriority: 'high',
  },
  currentId: '',
  modalShow: false,
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO_ITEM:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: action.id,
            title: action.title,
            description: action.description,
            priority: action.priority,
            status: false,
          },
        ],
        currentId: '',
        modalShow: false,
        modalFields: {
          modalTitle: '',
          modalDescription: '',
          modalPriority: 'high',
        },
      };
    case DELETE_TODO_ITEM:
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.id),
      };
    case TOGGLE_STATUS_TODO_ITEM:
      return {
        ...state,
        todos: state.todos.map((todoItem) =>
          todoItem.id === action.id ? { ...todoItem, status: !todoItem.status } : todoItem,
        ),
      };
    case SHOW_FILTERED_TODO_ITEMS:
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.name]: action.value,
        },
      };
    case SHOW_MODAL_AREA:
      return {
        ...state,
        modalShow: true,
      };
    case HIDE_MODAL_AREA:
      return {
        ...state,
        modalShow: false,
        modalFields: {
          modalTitle: '',
          modalDescription: '',
          modalPriority: 'high',
        },
        currentId: '',
      };
    case EDIT_TODO_ITEM:
      return {
        ...state,
        currentId: action.id,
        modalShow: true,
        modalFields: {
          modalTitle: action.title,
          modalDescription: action.description,
          modalPriority: action.priority,
        },
      };
    case SAVE_EDITED_TODO_ITEM:
      return {
        ...state,
        todos: saveEditTodoItem(action.title, action.description, action.priority, action.id, state.todos),
        modalShow: false,
        modalFields: {
          modalTitle: '',
          modalDescription: '',
          modalPriority: 'high',
        },
        currentId: '',
      };
    case CHANGE_MODAL_FIELD:
      return {
        ...state,
        modalFields: {
          ...state.modalFields,
          [action.name]: action.value,
        },
      };
    default:
      return state;
  }
};

export default todos;
