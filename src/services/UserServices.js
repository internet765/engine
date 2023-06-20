import api from "../http";

export default class UserServices {
  static fetchUsers() {
    return api.get("/users");
  }
  static fetchUser(id) {
    return api.get(`/users/${id}`);
  }
  static deleteUser(id) {
    return api.delete(`/users/${id}`);
  }
  static updateUser(id, user) {
    return api.put(`/users/${id}`, user);
  }
  static createUser(user) {
    return api.post("/users", user);
  }
}