(function (global) {
	if (!global.UAM) {
		global.UAM = {};
	}

	function addManyValues (...args) {
        let sum = 0;

        // !!! add all arguments to sum
        
        //for (let i = 0; i < arguments.length; i++) {
	    //sum += arguments[i];
        //}
        
        args.forEach(item => sum += item);
    
        
        // !!! return function for use sum value as a base for next arythmetic operation but without change value of sum variable
        return (...param) => { 
            let sum2 = sum;
            //for (let i = 0; i < param.length; i++) {
            //    sum2 += param[i];
            //}
            param.forEach(item => sum2 += item);
            
            return sum2;
        };
	};

	global.UAM.addManyValues = addManyValues;

}(window));

/*

Przykład użycia:

var addRest = UAM.addManyValues(2, 3);

addRest(1, 1, 3); // 10
addRest(3, 3); // 11
addRest(1, 1, 1, 1, 1); //10

var addOther = UAM.addManyValues(0, 10, 10);
addOther(10); // 30

*/
