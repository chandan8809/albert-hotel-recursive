export const commentData = {
    text: "Fake article title.",
    author: "grzm",
    comments: [
      {
        id: 1,
        text: "Example comment here.",
        author: "user2",
        comments: [
          {
            id: 2,
            text: "Another example comment text.",
            author: "user3",
            comments: [
              {
                id: 3,
                text: "Another example comment text.",
                author: "user4",
                comments: []
              }
            ]
          }
        ]
      },
      {
        id: 4,
        text: "Example comment here 2.",
        author: "user5",
        comments: []
      }
    ]
  }