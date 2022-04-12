import React from 'react';
const AuthContext=React.createContext({
    points:0,
    playerList:[
        {
            id:1,
          name: "John",
          stat: "22",
          country: "USA",
          position: "Striker",
        },
        {
          id:2,
            name: "Bob",
          stat: "24",
          country: "Brazil",
          position: "CDM",
        },
      ]

});

export default AuthContext;