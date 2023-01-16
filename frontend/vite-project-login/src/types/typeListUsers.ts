export type UserProps = {
    id: {
        value: string
    },
    title: string,
    picture: {
        large: string,
        medium: string
    }
    name: {
        first: string,
        last: string, 
        title: string
    }
    email: string,
    login: {
        username: string
    },
    dob: {
        age: string
    }
}