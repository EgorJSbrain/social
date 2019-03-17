const ADD_USER = 'NETWORK/ADD_USER'
let initialState = {
    users: [
        {
            id: 1,
            name: '',
            surename: '',
            familyStatus: 'Single',
            photo: 'https://pp.userapi.com/c633923/v633923155/3d6f4/PDATC-krPis.jpg',
            city: 'Minsk',
            birthday: '02.02.1990'    
        },
        {
            id: 2,
            name: '',
            surename: '',
            familyStatus: '',
            photo: '',
            city: '',
            birthday: ''
        },
          {
            id: 3,
            name: '',
            surename: '',
            familyStatus: '',
            photo: '',
            city: '',
            birthday: ''
        },
        {
            id: 4,
            name: '',
            surename: '',
            familyStatus: '',
            photo: '',
            city: '',
            birthday: ''
        },
        {
            id: 5,
            name: '',
            surename: '',
            familyStatus: '',
            photo: '',
            city: '',
            birthday: ''
        }
    ],

    newUser: {
        id: 6,
            name: '',
            surename: '',
            familyStatus: '',
            photo: '',
            city: '',
            birthday: ''
    }
}

const addUser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER: 
        {
           let newUser = {
                id: 6,
                    name: '',
                    surename: '',
                    familyStatus: '',
                    photo: '',
                    city: '',
                    birthday: ''
            }
        return {...state, users: [...state.users, newUser]};
        }

        default:
            return state;
    }
}

export default addUser;