import users from "../users";

export function username(id) {
    return users.find(user => user.id === id).name;
}
