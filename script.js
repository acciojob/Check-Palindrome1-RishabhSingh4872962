// complete the given function

function palindrome(str){
	
str=str.split(" ").filter((s)=>{
	return !(s==" " || s=="");
}).join("").toLowerCase();
	if (str.length==1) {
		return true;
	}
	let i=0;
	let j=str.length-1;
	while (i<j) {
		if (str.charAt(i) != str.charAt(j)) {
			
			return false;
		}
		i++;
		j--;
	}
	return true
}
module.exports = palindrome
