//your JS code here. If required.
const vName=document.getElementById('name');
const vAge=document.getElementById('age');
const buttonId= document.getElementById('btn');

buttonId.addEventListener('click', async()=>{

const tAge= parseInt(vAge.value);
const tName= vName.value.trim();

const promise1= new Promise((resolve, reject)=>{
	setTimeout(()=>{
		if(tAge>= 18) resolve(alert(`Welcome,  ${tName}. You can vote.`));
    else reject(alert(`Oh sorry ${tName}. You aren't old enough.`));
	}, 4000);
}
);
	try {
		const data= await promise1;
		alert(data)
	} catch (error) {
		alert(error);
	}
});