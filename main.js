var foo = true;

main(foo);

function main(foo){
	if (foo){
		console.log('Alright');
	}else{
		console.log('Something went wrong.');
	}
	secondary(foo);
}

function secondary(foo){
	var obj={
		name:'test'
	}
	obj.name = 'testFix';
}

function exit(){
	close();
	temp();
}
