class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }

    get title() {
        return this._title;
    }

    get isCheckedOut() {
        return this._isCheckedOut;
    }

    get ratings() {
        return this._ratings;
    }

    set isCheckedOut(check) {
        this._isCheckedOut = check;
    }

    toggleCheckOutStatus(status) {
        this._isCheckedOut = !status;
    }

    getAverageRating() {
        const ratingSum = this.ratings.reduce((acc, rating) => {
            return acc + rating;
        })
        return ratingSum / this.ratings.length;
    }

    addRating(rating) {
        this.ratings.push(rating);
    }
};


class Book extends Media {
    constructor(title, author, pages){
        super(title);
        this._author = author;
        this._pages = pages;
    }

    get author() {
        return this._author;
    }

    get pages() {
        return this._pages;
    }
};

class Movie extends Media {
    constructor(title, director, runTime) {
        super(title);
        this._director = director;
        this._runTime = runTime;
    }

    get director() {
        return this._director;
    }

    get runTime() {
        return this._runTime;
    }
};

class CD extends Media {
    constructor(title, artist) {
        super(title);
        this._artist = artist;
        this._songs = [];
    }

    get artist() {
        return this._artist;
    }

    get songs() {
        return this._songs;
    }

    shuffle() {
        this._songs = ['Crawling', 'Instant Crush', 'Numb', 'BBNG', 'Space Song'];
        const randomSong = Math.floor(Math.random() * 4);
        return this.songs[randomSong];
    }
}


//Instance of Book
const historyOfEverything = new Book('Bill Bryson', 'A short hisotry of nearly Everuthing', 544);

historyOfEverything.toggleCheckOutStatus();

console.log(historyOfEverything.isCheckedOut);

historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);

console.log(historyOfEverything.getAverageRating())



//Instance of Movie
const speed = new Movie('Jan de Bont', 'Speed', 116);

speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);

console.log(speed.getAverageRating());



//Instance of CD
const tomorrowDust = new CD('Augmented', 'Tame Impala');

tomorrowDust.toggleCheckOutStatus();
console.log(tomorrowDust.isCheckedOut);

tomorrowDust.addRating(5);
tomorrowDust.addRating(5);
tomorrowDust.addRating(5);

console.log(tomorrowDust.getAverageRating());

console.log(tomorrowDust.shuffle());
