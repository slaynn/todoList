// const state = {
//     todolists: []
// }

export default function() {
  return {
    todoLists: [
      {
        id: 1,
        name: "liste 1",
        todos: [
          {
            id: 1,
            name: "tache 1",
            completed: false,
          },
          {
            id: 2,
            name: "tache 2",
            completed: false,
          },
        ],
      },
      {
        id: 2,
        name: "liste 2",
        todos: [
          {
            id: 3,
            name: "tache 3",
            completed: false,
          },
          {
            id: 4,
            name: "tache 4",
            completed: true,
          },
        ],
      },
    ],
  };
}
