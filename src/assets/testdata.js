const testData = {
  books: {
    1: {
      id: 1,
      title: "The Vegetarian",
      image: "http://www.metaphysicalcircus.com/wp-content/uploads/VEGETARIAN_COVER-670x1024.jpg",
      stars: 3
    },
    2: {
      id: 2,
      title: "The Lord of the Rings",
      image: "https://bookzone.boyslife.org/files/2011/03/lordrings.gif",
      stars: 4
    },
    3: {
      id: 3,
      title: "The Hobbit",
      image: "https://cdn.pastemagazine.com/www/system/images/photo_albums/hobbit-book-covers/large/photo_5653_0-6.jpg?1384968217",
      stars: 3
    },
    4: {
      id: 4,
      title: "The Catcher in the Rye",
      image: "http://blog.americanwritersmuseum.org/wp-content/uploads/2016/01/Catcher-in-the-Rye.jpg",
      stars: 4
    },
    5: {
      id: 5,
      title: "1984",
      image: "http://booksat.scarlettrugers.com/bookcoverdesign/wp-content/uploads/2013/10/georgeorwellxobeygiantprintset-1984coverbyshepardfairey.jpeg",
      stars: 5
    },
    6: {
      id: 6,
      title: "Lonely Planet's Best in Travel 2018",
      image: "https://images-na.ssl-images-amazon.com/images/I/61pYScIxrYL._SX258_BO1,204,203,200_.jpg",
      stars: 3
    },
    7: {
      id: 7,
      title: "Descent into Chaos",
      image: "https://images-na.ssl-images-amazon.com/images/I/51qDc35APoL._SX324_BO1,204,203,200_.jpg",
      stars: 3
    },
    8: {
      id: 8,
      title: "The Wealth of Nations",
      image: "https://images-na.ssl-images-amazon.com/images/I/71dsU1pQbiL.jpg",
      stars: 4
    },
    9: {
      id: 9,
      title: "Freedom",
      image: "http://i.telegraph.co.uk/multimedia/archive/01723/freedomstory_1723443f.jpg",
      stars: 2
    },
    10: {
      id: 10,
      title: "Eye of the World",
      image: "https://upload.wikimedia.org/wikipedia/en/0/00/WoT01_TheEyeOfTheWorld.jpg",
      stars: 3
    },
    11: {
      id: 11,
      title: "Dominion",
      image: "https://images-na.ssl-images-amazon.com/images/I/91MSRJXpP8L.jpg",
      stars: 2
    },
    12: {
      id: 12,
      title: "Life of Pi",
      image: "https://upload.wikimedia.org/wikipedia/en/4/45/Life_of_Pi_cover.png",
      stars: 4
    }
  },
  movies: {
    1: {
      id: 1,
      title: "Moonlight",
      image: "https://images-na.ssl-images-amazon.com/images/I/51RJnNQjQ8L._SY445_.jpg",
      stars: 5
    },
    2: {
      id: 2,
      title: "Blade Runner",
      image: "http://cdn2.thr.com/sites/default/files/2017/05/blade_runner_xlg-embed.jpg",
      stars: 4
    },
    3: {
      id: 3,
      title: "Speed",
      image: "https://upload.wikimedia.org/wikipedia/en/4/45/Speed_movie_poster.jpg",
      stars: 3
    },
    4: {
      id: 4,
      title: "Con Air",
      image: "https://images-na.ssl-images-amazon.com/images/I/41ESJiS7UEL._SY300_.jpg",
      stars: 2
    },
    5: {
      id: 5,
      title: "Oceans Eleven",
      image: "https://www.movieposter.com/posters/archive/main/186/MPW-93256",
      stars: 2
    },
    6: {
      id: 6,
      title: "Apocalypse Now",
      image: "http://www.movieposter.com/posters/archive/main/152/MPW-76124",
      stars: 5
    },
    7: {
      id: 7,
      title: "Star Wars",
      image: "http://a.dilcdn.com/bl/wp-content/uploads/sites/6/2017/05/1-star-wars-poster.jpg",
      stars: 5
    },
    8: {
      id: 8,
      title: "Requium for a Dream",
      image: "https://images-na.ssl-images-amazon.com/images/I/517v8xMsqoL._SY450_.jpg",
      stars: 4
    },
    9: {
      id: 9,
      title: "The Green Mile",
      image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_.jpg",
      stars: 3
    },
    10: {
      id: 10,
      title: "The Shawshank Redemption",
      image: "https://images-na.ssl-images-amazon.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_UY1200_CR88,0,630,1200_AL_.jpg",
      stars: 5
    },
    11: {
      id: 11,
      title: "Castaway",
      image: "https://static.rogerebert.com/uploads/movie/movie_poster/cast-away-2000/large_w515BrZvczKIxbHurG6HIiYYrba.jpg",
      stars: 4
    },
    12: {
      id: 12,
      title: "Citizen Kane",
      image: "http://img.moviepostershop.com/citizen-kane-movie-poster-1941-1010415868.jpg",
      stars: 5
    },
  },
  tv: {
    1: {
      id: 1,
      title: "The Sopranos",
      image: "https://fanart.tv/fanart/tv/75299/tvposter/the-sopranos-523679859129a.jpg",
      stars: 5
    },
    2: {
      id: 2,
      title: "The Wire",
      image: "https://dvdbash.files.wordpress.com/2013/06/poster-the-wire-tv-series-s3-2-dvdbash-wordpress.jpg",
      stars: 5
    },
    3: {
      id: 3,
      title: "Breaking Bad",
      image: "https://i.pinimg.com/736x/a4/b9/de/a4b9de044d3967643e70a87827523ef2--breaking-bad-poster-jesse-pinkman.jpg",
      stars: 5
    },
    4: {
      id: 4,
      title: "Planet Earth",
      image: "https://i.pinimg.com/736x/1d/72/4a/1d724a908f95bebcef406725f9ef988f--planet-earth-documentary-planet-earth-series.jpg",
      stars: 5
    },
    5: {
      id: 5,
      title: "Parks and Recreation",
      image: "https://i.pinimg.com/originals/0d/76/f3/0d76f346a185be462921d47ba0f9847b.jpg",
      stars: 4
    },
    6: {
      id: 6,
      title: "Arrested Development",
      image: "http://images.fanpop.com/images/image_uploads/Arrested-Development-Poster-arrested-development-671766_375_500.jpg",
      stars: 4
    },
    7: {
      id: 7,
      title: "Heroes",
      image: "https://c1.staticflickr.com/3/2502/3947667081_fd7ddb14d3.jpg",
      stars: 2
    },
    8: {
      id: 8,
      title: "Prison Break",
      image: "https://i.pinimg.com/originals/68/7d/9d/687d9d9ec66f298664f05eb2d58968d2.jpg",
      stars: 2
    },
    9: {
      id: 9,
      title: "The Walking Dead",
      image: "http://cdn.collider.com/wp-content/uploads/walking_dead_one_sheet_poster.jpg",
      stars: 4
    },
    10: {
      id: 10,
      title: "It's Always Sunny in Philadelphia",
      image: "https://images-na.ssl-images-amazon.com/images/I/81xDjL79THL._SY550_.jpg",
      stars: 4
    },
    11: {
      id: 11,
      title: "The Simpsons",
      image: "https://i.pinimg.com/originals/b3/27/90/b3279044de8af7a87f35f8e112b84bf6.jpg",
      stars: 4
    },
    12: {
      id: 12,
      title: "Deadwood",
      image: "http://img.moviepostershop.com/deadwood-tv-movie-poster-2004-1010268210.jpg",
      stars: 5
    },
  },
};

export default testData;