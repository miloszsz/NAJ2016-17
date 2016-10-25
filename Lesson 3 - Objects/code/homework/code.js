(function (global) {
	var mapArray;

	if (!global.UAM) {
		global.UAM = {};
	}
    
    global.UAM.library = []; 

    // BELOW SAMPLES SHOW STRUCTURE OF CATEGORY OBJECT AND STUCTURE OF BOOKS OBJECT INSIDE CATEGORY 
    //   
    // global.UAM.library.push({
    //     categoryName: 'Kryminał',
    //     books: []
    // });
    
    // global.UAM.library[0].books.push({
    //     title: 'Pan Tadeusz',
    //     count: 3
    // });
    
    //////////////////////////////////////////////////////////////////////////////////////

    // newCategoryName: String
    global.UAM.addCategory = function (newCategoryName) {
        // function should return new category object
        global.UAM.library.push({
        	categoryName: newCategoryName,
        	books: []
        });

        global.UAM.library.forEach(category => {
        	if (category.categoryName == newCategoryName) {
        		return category;
        	}
        });
    };

    // categoryObject: Object
    global.UAM.removeCategory = function (categoryObject) {
        // !!!
        global.UAM.library.forEach((category, i) => {
        	if (category.categoryName == categoryObject.categoryName) {
        		global.UAM.library.splice(i, 1);
        	}
        });
    };

    // categoryObject: Object
    // title: String
    // count: Number 
    global.UAM.addBookToCategory = function(categoryObject, title, count) {
        // !!!
        // function should return new book object
        global.UAM.library.forEach(category => {
        	if (category.categoryName == categoryObject.categoryName) {
        		category.books.push({
        			title: title,
        			count: count
        		});
        	}
        });
        
    };

    // categoryObject: Object
    // bookObject: Object
    global.UAM.removeBookFromCategory = function(categoryObject, bookObject) {
        // !!!
        global.UAM.library.forEach(category => {
        	if (category.categoryName == categoryObject.categoryName) {
        	category.books.forEach((book, i) => {
        		if (book.title == bookObject.title) books.splice(i, 1);
        		});
        	}
        });

    };

    // categoryName: String
    global.UAM.getCategoryByName = function(categoryName) {
        // !!!
        // function should return category object
        global.UAM.library.forEach(category => {
        	if (category.categoryName == categoryName) {
        		return category;
        	}

        });
    };

    // title: String
    global.UAM.getBookByTitle = function(title) {
        // !!!
        // function should return book object
        global.UAM.library.forEach(category => {
        	category.books.forEach(book => {
        		if (book.title == title) return book;
        	});

        });
    };

    // bookObject: Object
    global.UAM.returnBook = function(bookObject) {
        // !!!
        global.UAM.library.forEach(category => {
        	category.books.forEach(book => {
        		if (book.title == bookObject.title) {book.count++;}
        	});
        });
    };
    
    global.UAM.getBorrowedBooks = function() {
        // !!!
        // return array of book objects
        var array;
        global.UAM.library.forEach(category => {
        	category.books.forEach(book => {
        		if (book.count == 0) {array.push(book);}
        	});
        });
        
        return array;
    };

}(window));

/*

Przykład użycia:

var newAircraft1 = addAircraft('SP-XY1');
var newAircraft2 = addAircraft('SP-XY2');

addWorkToAircraft(newAircraft1, 'serviceXY1a', 110);
addWorkToAircraft(newAircraft1, 'serviceXY1b', 130);
reduceTimeToExecute(newAircraft1, 20);

var sxy2a = addWorkToAircraft(newAircraft2, 'serviceXY2a', 130);
var sxy2b = addWorkToAircraft(newAircraft2, 'serviceXY2b', 160);
reduceTimeToExecute(newAircraft2, 20);

getAircraftsForRepairs(100); // [ newAircraft1 ]

removeAircraft(newAircraft1);

getAircraftsForRepairs(100); // []

reduceTimeToExecute(newAircraft2, 20);

getAircraftsForRepairs(100); // [ newAircraft2 ]

*/
