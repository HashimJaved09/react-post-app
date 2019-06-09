const initState = {
    posts: [
        { id:1, title: 'qui est esse', body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto' },
        { id:2, title: 'suscipit rec', body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto' },
        { id:3, title: 'expedita etc', body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto' },
    ]
};

const reducer = (state = initState, action) => {
    if (action.type === 'DELETE_POST') {
        let posts = state.posts.filter(post => {
            return action.id !== post.id
        });
        return {
            ...state,
            posts
        }
    }
    return state;
};

export default reducer;