import axios from "axios";

export default {
  // Gets Userss from the Google API
  getUsers: function(q) {
    return axios.get("/api/users");
  },
  // Gets all saved Userss
  getSavedUsers: function() {
    return axios.get("/api/users");
  },
  // Deletes the saved Users with the given id
  deleteUsers: function(id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves an Users to the database
  saveUsers: function(UsersData) {
    return axios.post("/api/Userss", UsersData);
  }
};