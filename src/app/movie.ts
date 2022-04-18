export interface Movie{
    id? : number;
    title: string;
    movieDesc?: string;
    releaseYear?: number;
    duration?: string;
    rating?: number;
    reviews?: string[];
    actors?: string[];
}


export const movies = [

    {
        id: 1,
        title: "Batman:Dark Knight",
        movieDesc: "Dark Thriller",
        releaseYear: 2008,
        duration: "75 minutes",
        rating: 5,
        reviews: ["Good", "Bad"],
        actors : ["Hugh", "David"]


    },

    {
        id: 2,
        title: "Avengers",
        movieDesc: "Action",
        releaseYear: 2012,
        duration: "90 minutes",
        rating: 3,
        reviews: ["Good", "Bad"],
        actors : ["Hugh", "David"]


    },

    {
        id: 3,
        title: "Mr Bean",
        movieDesc: "Comedy",
        releaseYear: 2015,
        duration: "120 minutes",
        rating: 4,
        reviews: ["Good", "Good"],
        actors : ["Clara", "David"]


    },
    {
        id: 4,
        title: "Despicable Me",
        movieDesc: "Comedy",
        releaseYear: 2017,
        duration: "75 minutes",
        rating: 3,
        reviews: ["Good", "Average"],
        actors : ["Jones", "CLint"]


    },
    {
        id: 5,
        title: "Superman",
        movieDesc: "Action",
        releaseYear: 2020,
        duration: "80 minutes",
        rating: 5,
        reviews: ["Average", "Average"],
        actors : ["Kenzo", "Goliath"]


    }



]