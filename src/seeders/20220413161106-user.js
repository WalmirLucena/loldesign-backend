'use strict';

module.exports = {
  up: async (queryInterface) => {
  
     await queryInterface.bulkInsert('users', [{
      username: 'Admin',
      email: 'admin@admin.com',
      password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW', // secret_admin  isBetaMember: false
      }], {});
    
  },

  down: async (queryInterface) => {
    
      await queryInterface.bulkDelete('users', null, {});
    
  }
};
