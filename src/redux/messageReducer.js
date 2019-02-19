const ADD_MESSAGE = 'NETWORK/CONTENT_WALL/ADD_MESSAGE'
let initialState = {
    messages: [
        {
            id: 1,
            avatar: '',
            author: '',
            message: 'Привет!!!!!!!!!! ЧЁ КАК'
        },
        {
            id: 2,
            avatar: '',
            author: '',
            message: 'вдародыпрыпырпплр аы радырарпы трыоры оыорыопы тпытыа ааааааааааааааааааааааааааааааааааааа ааааааааааааааааааааааааааааа ghghgh hjujukuku jukikikikililililil gfrfdcdc '
        },
        {
            id: 3,
            avatar: '',
            author: '',
            message: 'utiorutiutoir'
        }
    ],
    newMessage: {
        id: 4,
        avatar: '',
        author: '',
        message: ''
    },
    users: [
        {
            id: 1,
            photo: 'https://pp.userapi.com/c622524/v622524100/442d7/4QBfB16tHrA.jpg?ava=1',
            name: 'Димыч'
        },
          {
            id: 2,
            photo: 'https://pp.userapi.com/c851032/v851032973/1356e/IovoXth5qjc.jpg',
            name: 'Андрей'
        },
        {
            id: 3,
            photo: 'https://pp.userapi.com/c851032/v851032973/1356e/IovoXth5qjc.jpg',
            name: 'Vasja'
        },
        {
            id: 4,
            photo: 'https://pp.userapi.com/c851032/v851032973/1356e/IovoXth5qjc.jpg',
            name: 'Valera'
        }
    ]
}
const addMessageReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case ADD_MESSAGE:
            {
                let newMessage = {
                    id: 4,
                    avatar: '',
                    author: '',
                    message: action.message
                }
                state.messages.push(newMessage);
                // state.dialogsPage.messages = [...state.dialogsPage.messages, newMessage]
                return state;
            }
        default:
            return state;
    }
};

export const addMessageActionCreator = (message) => {
    return {
        type: ADD_MESSAGE,
        message: message
    }
}

export default addMessageReducer;