module.exports = function(robot) {

  if (!robot.brain.data.contacts) {
    robot.brain.data.contacts = {};
  }

  return {
    set: function (id, info, value) {
      if (!robot.brain.data.contacts[id]) {
        robot.brain.data.contacts[id] = {};
      }
      robot.brain.data.contacts[id][info] = value;
      return true;
    },

    get: function (id, info) {
      if (!robot.brain.data.contacts || !robot.brain.data.contacts[id]) {
        return undefined;
      }
      if (!robot.brain.data.contacts[id][info]) {
        return undefined;
      }
      return robot.brain.data.contacts[id][info];
    },

    getAllInfo: function (id) {
      if (!robot.brain.data.contacts || !robot.brain.data.contacts[id]) {
        return undefined;
      }
      return robot.brain.data.contacts[id];
    },

    lookUpId: function (info, value) {
      for (var id in robot.brain.data.contacts) {
        if (robot.brain.data.contacts[id][info] === value) {
          return id;
        }
      }
      return undefined;
    },

    getAllContacts: function () {
      return robot.brain.data.contacts;
    }
  }
}
