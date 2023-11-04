const data = {
  categories: [
    {
      id: 1,
      name: "Ducati",
      path: "ducati",
      products: [
        {
          id: 1,
          name: "Ducati Panigale V4",
          price: 25000,
          imageUrl: "../public/images/dpv4.jpeg",
        },
        {
          id: 2,
          name: "Ducati Monster",
          price: 12000,
          imageUrl: "../public/images/monster.jpeg",
        },
      ],
    },
    {
      id: 2,
      name: "Honda",
      path: "honda",
      products: [
        {
          id: 3,
          name: "Honda CBR1000RR",
          price: 15000,
          imageUrl: "../public/images/cbr.png",
        },
        {
          id: 4,
          name: "Honda CRF450L",
          price: 10000,
          imageUrl: "../public/images/crf.jpeg",
        },
      ],
    },
  ],
};

export default data;
