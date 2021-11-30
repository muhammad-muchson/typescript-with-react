let nameAgeMapping = new Map();
 
//Set entries
nameAgeMapping.set("Lokesh", 37);
nameAgeMapping.set("Raj", 35);
nameAgeMapping.set("John", 40);
 
//Get entries
nameAgeMapping.get("John"); 	//40
console.log(nameAgeMapping);
//Check entry is present or not
nameAgeMapping.has("Lokesh");   	//true
nameAgeMapping.has("Brian");    	//false

//Size of Map with
nameAgeMapping.size;            	//3
console.log(nameAgeMapping.size); 
//Delete an entry
nameAgeMapping.delete("Lokesh");	// true
 
//Clear whole Map
nameAgeMapping.clear();         	//Clear all entries
console.log(nameAgeMapping);
