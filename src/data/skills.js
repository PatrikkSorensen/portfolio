import Projects from './projects'; 

let skills = 
[
	{
		name: 'c#', 
		level: 'comfortable'
	}, 
	{
		name: 'python', 
		level: 'experienced'
	},
	{
		name: 'php',
		level: 'experienced'
	},
	{
		name: 'javascript', 
		level: 'experienced'
	}, 
	{
		name: 'java', 
		level: 'comfortable'
	}, 
	{
		name: 'c', 
		level: 'well familiar'
	}, 
	{
		name: 'c++', 
		level: 'begginner'
	}
]

function assignSkills(skills, projects) {
	for(let i = 0; i < skills.length; i++){
		let temp = []; 
		let skill = skills[i].name; 
		for(let j = 0; j < projects.length; j++) {
			let arr = projects[j].created_with.map(value => {
				return value.toLowerCase();
			}); 

			if(arr.includes(skill)) {
				temp.push({id: projects[j].id, name: projects[j].name}); 
			} 

		}
		skills[i].projects = temp; 
	}

	return skills; 
}

let projectSkills = assignSkills(skills, Projects); 


export default projectSkills 