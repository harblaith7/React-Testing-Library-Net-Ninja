const mockResponse = {
  data: {
    results: [
      {
        name: {
          first: "Manny",
          last: "Colon"
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/39.jpg"
        },
        login: {
          username: "colonmanny"
        }
      },
      {
        name: {
          first: "Danny",
          last: "Thompson"
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/39.jpg"
        },
        login: {
          username: "Thompson"
        }
      },
      {
        name: {
          first: "Stephen",
          last: "Curry"
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/39.jpg"
        },
        login: {
          username: "Curry"
        }
      },
      {
        name: {
          first: "Lebron",
          last: "James"
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/39.jpg"
        },
        login: {
          username: "James23"
        }
      },
      {
        name: {
          first: "Klay",
          last: "Matthews"
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/39.jpg"
        },
        login: {
          username: "Matthews"
        }
      },
    ]
  }
}


/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  get: jest.fn().mockResolvedValue(mockResponse)
}