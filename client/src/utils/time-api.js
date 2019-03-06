import axios from "axios";

export default {
  // Gets time
  getTime: function () {
    return axios.get("/api/time/");
  },

  // get the saved time by pin
  getTimePin: function (pin) {
    return axios.get("/api/time/" + pin);
  },
  // Deletes the saved time with the given id
  deleteTime: function (id) {
    return axios.delete("/api/time/" + id);
  },
  // Saves an time to the database
  saveTime: function (data) {
    return axios.post("/api/time", data);
  }
};