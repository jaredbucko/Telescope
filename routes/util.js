// routes/util.js

module.exports = {
	/*
		Key must be unique.
		var arr = [	
			{age: 22, fruit: 'banana'}, 
			{age: 24, fruit: 'mango'}, 
			{age: 24, fruit: 'coconut'}
		];
		arrToMap(arr, 'fruit') returns
			{
				banana: {age: 22, fruit: 'banana'},
				mango: {age: 24, fruit: 'mango'}, 
				coconut: {age: 24, fruit: 'coconut'}
			}
	*/
	arrToMap: function(arr, key){
		var map = {};
		for(n in arr){
			map[arr[n][key]] = arr[n];
		}
		return map;
	},
	/*
		var arr = [	
			{age: 22, fruit: 'banana'}, 
			{age: 24, fruit: 'mango'}, 
			{age: 24, fruit: 'coconut'}
		];
		arrToArrMap(arr, 'age') returns
			{
				22: [{age: 22, fruit: 'banana'}],
				24: [{age: 24, fruit: 'mango'}, {age: 24, fruit: 'coconut'}]
			}
	*/
	arrToArrMap: function(arr, key){
		var map = {};
		for(n in arr){
			if(map[arr[n][key]]) map[arr[n][key]].push(arr[n]);
			else map[arr[n][key]] = [arr[n]];
		}
		return map;
	},
	/*
		Secondary key must be unique
		var arr = [	
			{age: 22, fruit: 'banana'}, 
			{age: 24, fruit: 'mango'}, 
			{age: 24, fruit: 'coconut'}
		];
		arrToMapMap(arr, 'age', 'fruit') returns
			{
				22: { 
					banana: {age: 22, fruit: 'banana'}
				},
				24: {
					mango: {age: 24, fruit: 'mango'},
					coconut: {age: 24, fruit: 'coconut'}
				}
			}
	*/
	arrToMapMap: function(arr, key, secondary_key){
		var map = {};
		for(n in arr){
			if(map[arr[n][key]]) map[arr[n][key]][secondary_key] = arr[n];
			else {
				var obj = {};
				obj[arr[n][secondary_key]] = arr[n];
				map[arr[n][key]] = obj;
			}
		}
		return map;
	}
}