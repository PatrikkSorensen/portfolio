const courses = [
	{
		id : 0, 
		name : 'IT-University of Copenhagen', 
		type: 'Master degree',
		link: 'https://www.itu.dk/', 
		year: "2014-2016",
		duration: '3 Years',
		courses : [
			{ 
				name: 'Game Development',
				year: '2016', 
				season: 'spring',  
				ects : 15
			}, 
			{
				name: 'Modern AI for Games',
				year: '2015', 
				season: 'autumn',  
				ects : 15
			},
			{
				name: 'Thesis Preperation',
				year: '2016', 
				season: 'autumn',  
				ects : 7.5
			}, 
			{
				name: 'Artificial Life & Evolutionary Robotics: Theory, Methods and Art',
				year: '2015', 
				season: 'spring',  
				ects : 7.5
			}, 
			{
				name: 'Modern AI for Games',
				year: '2015', 
				season: 'autumn',  
				ects : 15
			},  
			{
				name: 'Game Design',
				year: '2014', 
				season: 'autumn',  
				ects : 15
			},  
			{
				name: 'Game Engines',
				year: '2014', 
				season: 'autumn',  
				ects : 15
			},  
			{
				name: 'Graphics Programming',
				year: '2015', 
				season: 'spring',  
				ects : 15
			},  
			{
				name: 'Thesis: Interactive Braid Evolution',
				year: '2016', 
				season: 'autumn',  
				ects : 30
			},  
		]
	}, 
	{
		id : 1, 
		name : 'Southern University of Denmark', 
		link : "http://www.sdu.dk/uddannelse/bachelor/informationsvidenskab",
		type: 'Bachelor',
		year: "2011-2014",
		duration: '3 Years',
		courses : [
			// 1st halvår 
			{ 
				name: 'Ethics and Technology' , 
				ects : 5.0,
				year: '2011',
				season: 'autumn',
			}, 
			{ 
				name: 'Information Study Method I: Exploratory Design', 
				ects : 5.0,
				year: '2011',
				season: 'autumn',
			}, 
			{ 
				name: 'Internet and Hyper Media: I: Web Technology' , 
				ects : 10.0,
				year: '2011',
				season: 'autumn',
			}, 
			{ 
				name: 'Language and Social Interaction' , 
				ects : 10.0,
				year: '2011 / 2012',
				season: 'autumn / spring',
			}, 
			{ 
				name: 'Technology and Communication' , 
				ects : 10.0,
				year: '2011 / 2012',
				season: 'autumn / spring',
			}, 
			{ 
				// 2nd halvår 
				name: 'Philosophy of Science I: The humanities' , 
				ects : 5.0,
				year: '2012',
				season: 'spring',
			}, 
			{ 
				name: 'Logic, Knowledge Representation and Ontologies' , 
				ects : 10.0,
				year: '2012',
				season: 'spring',
			}, 
			{ 
				name: 'Internet and Hyper Media II: Media Programming', 
				ects : 5.0,
				year: '2012',
				season: 'spring',
			}, 
			{ 
				name: 'Philosophy of Science II: Information and Communication Studies, Philisophy of Science' , 
				ects : 5.0,
				year: '2012',
				season: 'spring',
			}, 
				//3rd halvår : 60 ECTS 
			{ 
				name: 'Programming I', 
				ects : 10.0,
				year: '2012',
				season: 'autumn',
			}, 
			{ 
				name: 'Interaction Design', 
				ects : 10.0,
				year: '2012',
				season: 'autumn',
			}, 
			{ 
				name: 'Information Study Method II: Information Analysis and Formalization', 
				ects : 10.0,
				year: '2012',
				season: 'autumn',
			}, 
			//4th halvår 90 : ECTS
			{ 
				name: 'Programming II', 
				ects : 10.0,
				year: '2013',
				season: 'spring',
			}, 
			{ 
				name: 'Learning, Epistemology and ICT', 
				ects : 5.0,
				year: '2013',
				season: 'autumn',
			}, 
			{ 
				name: 'Rhetorics and Pragmatics', 
				ects : 5.0,
				year: '2013',
				season: 'spring',
			}, 
			{ 
				name: 'Information Study Method III: Modelling', 
				ects : 5.0,
				year: '2012',
				season: 'spring',
			}, 
			{ 
				name: 'Information and Communication Technology in Organizations', 
				ects : 10.0,
				year: '2013',
				season: 'spring',
			}, 
			// 5th halvår 120 ECTS
			{ 
				name: 'Learning and Knowledge management', 
				ects : 10.0,
				year: '2013',
				season: 'autumn',
			}, 	
			{ 
				name: 'Aesthetics and Visual Communication', 
				ects : 5.0,
				year: '2013',
				season: 'autumn',
			}, 
			{ 
				name: 'System Development', 
				ects : 10.0,
				year: '2013',
				season: 'autumn',
			}, 
			{ 
				name: 'Interactive Media', 
				ects : 10.0,
				year: '2013',
				season: 'autumn',
			}, 
			// 6th halvår
			{ 
				name: 'Bachelor Project', 
				ects : 30.0,
				year: '2014',
				season: 'autumn',
			}, 
		]
	}, 
]

export default courses; 