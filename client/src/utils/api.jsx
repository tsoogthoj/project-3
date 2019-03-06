import axios from "axios";

export default {
  // Gets staff
  getStaff: function() {
    return axios.get("/api/staff");
  },

  // Deletes the saved staff with the given id
  deleteStaff: function(id) {
    return axios.delete("/api/staff/" + id);
  },
  // Saves an staff to the database
  saveStaff: function(data) {
    return axios.post("/api/staff", data);
  }
};