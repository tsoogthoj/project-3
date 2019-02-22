import axios from "axios";

export default {
  // Gets Users
  getUsers: function(q) {
    return axios.get("/api/users");
  },

  // Deletes the saved Users with the given id
  deleteUsers: function(id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves an Users to the database
  saveUsers: function(UsersData) {
    return axios.post("/api/users", UsersData);
  }
};