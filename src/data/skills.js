import Projects from './projects'; 

let skills = 
[
	{
		name: 'c#', 
		level: 'experienced'
	}, 
	{
		name: 'python', 
		level: 'comfortable'
	},
	{
		name: 'php',
		level: 'comfortable'
	},
	{
		name: 'javascript', 
		level: 'well familiar'
	}, 
	{
		name: 'java', 
		level: 'well familiar'
	}, 
	{
		name: 'c', 
		level: 'comfortable'
	}, 
	{
		name: 'c++', 
		level: 'beginner'
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