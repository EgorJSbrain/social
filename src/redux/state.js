
import {rerenderEntireTree} from '../render';

const state = {
    profilePage: {
        
        data: {
        
            familyStatus: 'Single',
            photo: 'https://pp.userapi.com/c633923/v633923155/3d6f4/PDATC-krPis.jpg',
            city: 'Minsk',
            birthday: '02.02.1990'
        
    },

    posts: [
        {
            id: 1,
            text: 'Hello!',
            photo: 'https://pp.userapi.com/c633923/v633923155/3d6f4/PDATC-krPis.jpg',
            likes: '',
            dislikes: ''
        },  
        {
            id: 2,
            text: 'Hello! How are you?',
            photo: 'https://pp.userapi.com/c633923/v633923155/3d6f4/PDATC-krPis.jpg',
            likes: '',
            dislikes: ''
        },   
        {
            id: 3,
            text: 'Hello!',
            photo: 'https://pp.userapi.com/c633923/v633923155/3d6f4/PDATC-krPis.jpg',
            likes: '',
            dislikes: ''
        }   
    ],
    newPosts: {
        id: 4,
        text: '',
        photo: 'https://pp.userapi.com/c633923/v633923155/3d6f4/PDATC-krPis.jpg',
        likes: '',
        dislikes: ''
    }


},
    dialogsPage: {
        
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
        }
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

export const addMessage = (message) => {
    let newMessage = {
        id: 4,
        avatar: '',
        author: '',
        message: message
    }
    state.dialogsPage.messages.push(newMessage);
    rerenderEntireTree(state);
}

export const addPost = (postMesage) => {
    let newPost = {
        id: 5,
        photo: 'https://pp.userapi.com/c633923/v633923155/3d6f4/PDATC-krPis.jpg',
        text: postMesage,
        likeCount: 0
    }
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
   
}
// debugger
export default state;