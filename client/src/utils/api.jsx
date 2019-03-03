import axios from "axios";

export default {
  // Gets Users
  getUsers: function() {
    return axios.get("/api/staff");
  },

  // Deletes the saved Users with the given id
  deleteUsers: function(id) {
    return axios.delete("/api/staff/" + id);
  },
  // Saves an Users to the database
  saveUsers: function(UsersData) {
    return axios.post("/api/staff", UsersData);
  }
};