import { gql } from "@apollo/client";


//login authentication
export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) 
{
    login(email: $email, password: $password) 
    {
        token
        user {
            _id
            username
        }
    }
}
`;

//create user
export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) 
{
    addUser(username: $username, email: $email, password: $password) 
    {
        token
        user {
            _id
            username
            }
        }
    }
`;

//save book to favs
export const SAVE_BOOK = gql`
mutation saveBook($bookData: InputBook!) 
{
    saveBook(bookData: $bookData) 
    {
        _id
        username
        email
        savedBooks {
            bookId
            authors
            description
            title
            image
            link
        }
    }
}
`;


//remove book from favs
export const REMOVE_BOOK = gql`
mutation removeBook($bookId: ID) 
{
    removeBook(bookId: $bookId) 
    {
        _id
        username
        email
        savedBooks {
            bookId
            authors
            description
            title
            image
            link
        }
    }
}
`;