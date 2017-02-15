const projects = [
	{
		id: 0, 
		source: "https://github.com/PatrikkSorensen/interactive-braid-evolution",
		cover : 'iec-braids/comparison-small.png',
		name: 'Interactive Braid evolution' ,
		tags: ['Interactive evolution', 'Architecture', 'Augmented Reality', 'Machine Learning', 'Evolutionary algorithms', 'Interaction design', 'Flora Robotica', 'Compositional Pattern Producing Networks', 'NeuroEvolution'],
		created_with: ['C#', 'Python', 'Grasshopper', 'Rhinoceros3d', 'UDP', 'NEAT', '.NET', 'File I/O'], 
		role: ['Programmer', 'Designer'], 
		collaborators: ['CITA Studio', 'Phil Ayres', 'Sebastian Risi'],
		date: 2016, 
		content:  [
			{
				italicText: [
					{
						text: 'The project was done as my master thesis and can be downloaded  '
					}, 
					{	
						link: {
							target: "../images/iec-mario/mario_ai_cig2016.pdf",
							label: "here.",
						}
					},   

				],
			},
			{
				paragraph: [
					{
						text: 'Interactive Braid Evolution is a collaboration between the '
					},
					{
						link: {
							target: "https://kadk.dk/en/CITA", 
							label: 'Centre for Information Technology and Architecture' 
						}
					}, 
					{
						text: ", the "
					}, 
					{
						link: {
							target: "https://www.itu.dk/",
							label: "IT-University of Copenhagen" 
						}
					}, 
					{
						text: " and the ressearch project "
					},
					{
						link: {
							target: "http://www.florarobotica.eu/", 
							label: 'Flora Robotica' 
						}
					}, 
					{
						text: " exploring the possiblities of using interactive evolution for creating structures ready for fabrication. These structures serve as a container for bio-hybrid systems, meaning that nature, robotic elements, and artificial intelligence can live side by side and contemplate each other through these user-evolved structures."
					
					}
				],
			}, 
			{
				video: "https://www.youtube.com/embed/txp8WJTmRFI?ecver=1"
			}, 
			{
				img: {
					src: '/iec-braids/social-garden.jpg',
					text: 'figure 1: concept art of the \'social garden\' presented in the ressearch project Flora Robotica.'
				}
			}, 
			{
				subtitle: 'How it works: '
			},
			{
				paragraph: [
					{ 
						text: 'Users select structures they find interesting by flying around in a simulation and clicking on the structures they find interesting. These structures are used as a reference point for the algorithm to create new structures that resembles the user selection in the next generation. The user can then select new candidates in the next generation, and the process is repeated until the right structure has been evolved. This technique lets user effectively explore the domain space and structural possibilities of creating these braided structures.' 
					}
				]
			}, 
			{
				paragraph: [
					{ 
						text: 'The application uses three processes, one for simulation, one for applying the algorithms, and the last one for modelling structures. These structures can then communicate through a local UDP connection in order to share and send data with each other.'
					}
				]
			}, 
			{
				img: {
					src: '/iec-braids/app-overview.png',
					text: 'figure 2: overview of the application setup and the processes.'
				}
			}, 
			{
				paragraph: [
					{
						text : 'The project integrates Augment Reaility thorugh the '
					}, 
					{	
						link: {
							target: "https://www.leapmotion.com/",
							label: "LEAP Motion controller",
						}
					},   
					{
						text: " that is able to scan your hands through two IR cameras and three infared LEDs. These hands are then translated to the simulation and offers new ways of interacting with the application, and explores new ways of interacting with the algorithm to produce novel structures."
				
					}
						
				]
			}, 
			{
				img: {
					src: '/iec-braids/lea-interface.png',
					text: 'figure 3: The applications LEAP interface where all interaction is done by moving your hands instead of using the keyboard and mouse .'
				}
			}, 
			{
				subtitle: 'Some of the results: '
			},
			{
				paragraph: [
					{
						text: 'Several experiments was conducted during the project, and a total of around 300 braided structures was created at the CITA studio. For some of the results, including a comparison of the most complex fabricated prototype, see the pictures below.'
					}
				]
			},
			{
				img: {
					src: '/iec-braids/comparison.png',
					text: 'figure 4: Comparison between braids created with interactive braid evolution and from the CITA studio.'
				}
			}, 			
			{
				img: {
					src: '/iec-braids/braid-comparison.png',
					text: 'figure 5: Example on different modeling layers that can be applied to further represent braided structures.'
				}
			},
			{
				video: "https://www.youtube.com/embed/GUpy6vYiXxg?ecver=1"
			}, 
		]
	},
	{
		id: 1, 
		source: "https://github.com/PatrikkSorensen/interactive-mario-evolution",
		cover : 'iec-mario/mario-small.png',
		name: 'Evolving Mario controllers' ,
		tags: ['Machine learning', 'Interactive Evolution', 'Super Mario', 'Game AI', 'User-evolved behaviours', 'NeuroEvolution', 'Artificial Neural Networks'],
		created_with: ['Java', 'File I/O', 'Java swing', 'ANJI', 'JGAP'], 
		role: ['Programmer', 'Designer'], 
		collaborators: ['Jeppeh Olsen', 'Sebastian Risi'],
		date: 2015, 
		content:  [
			{
				italicText: [
					{
						text: 'This project was released as a '
					}, 
					{
						link: 
						{
							target: "../images/iec-mario/mario_ai_gecco2016.pdf",
							label: "poster paper"
						}
					}, 
					{
						text: " for GECCO 2016 and as "
					}, 
					{
						link: 
						{
							target: "../images/iec-mario/mario_ai_cig2016.pdf", 
							label: "full paper"
						}, 
					}, 
					{
						text: " for CIG 2016."
					}
				]
			},
			{
				paragraph: [
					{
						text: "In this project, users is able to evolve various Mario controllers by simple looking at a selection of GIF files, and click on the behaviour they like most (see video below). This is then repeated until the controller has been evolved enough to overcome the various enemies and level terrain that exists in the legendary Mario world."  
					}
				],
			},
			{
				video: "https://www.youtube.com/embed/1rabANglJ14?ecver=1"
			}, 
			{
				subtitle: "More work: "
			},
			{
				paragraph: [
					{ 
						text: "The project was also used in a "
					}, 
					{
						link: 
						{
							target: "https://github.com/sirhcnb/MarioCollaborative", 
							label: "bachelor project"
						}, 
					}, 
					{
						text: " that explored how users could collabarate and work together, building on top of previously evolved Mario controllers instead of starting from scratch each time.",
					}
				]
			}
		]
	},
	{
		id: 2, 
		cover : 'curcuit/curcuit-small.png',
		name: 'Curcuit',
		source: "https://github.com/PatrikkSorensen/GAMEDEV2016", 
		tags: ['Game Development', 'Innovative Controls', '3d adventure', 'Alone together', 'Motherboard prophecy', 'Algorithmic thinking'],
		created_with: ['Unity', 'C#'], 
		role: ['Lead Programmer', 'VFX artist', 'Story Narrator', 'Animator', 'Gameplay Programmer'], 
		collaborators: ['Anastasios Tsiokidis', 'Anton Forchhammer', 'Jesper Bendtsen', 'Jonas Jeppesen'],
		date: 2016, 
		content:  [
			{
				paragraph: [
					{
						text: "Curcuit is a third-person game where the two robots B4 and MiMi must work together in order to fulfill the motherboard prophecy in order to restore balance to the curcuit world that has been infected by their their sibling virus."
					}, 
					{
						text: "The game was developed from three constrains: love, sadness and environmental storytelling. To achieve this, two characters in a lonely world created the foundation in terms of the gameplay, level design, and environment."
					}
				],
			}, 
			{
				paragraph: [
					{
						text: "The game is based on the buitiful and critical acclaimed video game "
					}, 
					{
						link: {
							target:  "http://thatgamecompany.com/games/journey/",
							label: "Journey"
						}, 
					}, 
					{
						text: " and the innovative gameplay mechanics from "
					}, 
					{
						link: {
							target: "http://www.brothersthegame.com/", 
							label: "Brothers" 
						}, 
					}, 
					{
						text: " and was top graded at the final exam."
					}
				],
			},
			{
				video: "https://www.youtube.com/embed/cLmdqN15-rk?ecver=1"
			}, 
			{
				subtitle: "Gameplay: "
			}, 
			{
				paragraph: [
					{
						text: "The player controls two characters, one with the left joypad, and the other with the right joypad. The characters is connected through a magical and enhanced bond, that restricts the distance of the two robots. L1/L2 or R1/R1 creates special movement for the respective character, and they each have special abilities to power up the environment. The puzzles and challenges is likewise designed in a way, where two characters has to work together, in order to advance through the level."
					}
				],
			}, 
			{
				gallery: [
					'../images/curcuit/1.png', '../images/curcuit/2.png', '../images/curcuit/3.png']
			}, 
			{
				paragraph: [
					{
						text: "Even though my title was lead or main programmer, the roles and assignment we take on the team can vary throughout the development process. Of the main things i was working on, was gameplaying programming, event systems, camera programming, animation control, AI pathfinding, and visual effects programming. While each of these areas was certainly most interesting, the line renderer assignment was a fair challenge in terms of the algorithm and programming techniques that had to be applied."
					}, 
				],
			}, 
			{
				subtitle: "The line-renderer algorithm"
			},
			{
				paragraph: [
					{
						text: "The line-renderer algorithm is all about keeping track of the state of each node, and create a decision on how that particular node should behave, e.g. should it chanel power further down the pipeline. Some nodes requires multiple power sources, other nodes changes the target for a power source, and finally some nodes can be activated by activating a lightstation by the player. To do this, each character stands on a seperate field and presses the 'x' button for more than 1 second."
					}
				],
			}, 
			{
				paragraph: [
					{
						text: "While the overall objective is to keep track of an overall state that describes all nodes of a specific line-renderer puzzle, there can exist multiple chanelling flows between the nodes that can be interupted, broken, and needs to be error-prune to the user - meaning that they should be able to chanel twice, or hack the specific node. Likewise the line-renderer algorithm was created as a system that the teams designer could utilize and easily integrate visuals, speed, and other attributes that controlled each node."}
				],
			}, 
			{
				img: {
					src: "/curcuit/line-2.png", 
					text: 'Figure 4: Example of a puzzle in Curcuit made with the line renderer algorithm. Here, different nodes can be activated in different ways on how the player directs the power flow.'
				}
			}, 
			{
				videoGallery: ["https://www.youtube.com/embed/0SmZFX7SnBs?ecver=1", "https://www.youtube.com/embed/HjJT8oIAULo?ecver=1", "https://www.youtube.com/embed/YrI_Hq4JSdU?ecver=1"]
			}

		]
	},
	{
		id: 3, 
		cover : 'map-generator/map-small.png',
		name: 'Classifying NASA maps to create other maps' ,
		source: "https://github.com/PolygeneLubricants/GAER-F2015",
		tags: ['Machine Learning', 'Support Vector Machine', ' Diamond-square algorithm', 'Map generation', 'Procedural content', 'Supervised Learning'],
		created_with: ['Java', 'Image parsing'], 
		role: ['Programmer'], 
		collaborators: ['Jeppeh Olsen', 'Andreas Christiansen'],
		date: 2015, 
		content:  [
			{
				paragraph: [
					{
						text: 'This project focuses on generating maps, by classifying '
					},
					{
						link: {
							target: "http://www2.jpl.nasa.gov/srtm/", 
							label: "NASA maps"
						}
					}, 
					{
						text: ' through the supervised learning algorithm '
					}, 
					{
						link: {
							target: "https://en.wikipedia.org/wiki/Support_vector_machine",
							label: "Support Vector Machine"
						}
					}, 
					{
						text: '. By training a SVM with the NASA maps, it is possible to capture patterns in the various NASA maps, and use them to create varied and generative maps. The algorithm also uses the ' 
					}, 
					{
						link: {
							target: "https://en.wikipedia.org/wiki/Diamond-square_algorithm", 
							label: "Diamond-aquare algorithm"
						}
					}, 
					{
						text: " to better integrate partial sections of the map."
					}
				], 
			}, 
			{
				img: {
					src: "/map-generator/svn-trainer.png", 
					text: "figure 1: different maps produced by the SVM based on the swiss alphes with the Diamond-square algorithm and blur being applied to the output maps."
				}
			}, 
			{
				img: {
					src: "/map-generator/map.png", 
					text: "figure 2: An example on how some of the maps can look like, once rendered in a game engine."
				}
			},  
			{
				subtitle: 'Results'
			}, 
			{
				paragraph: [
					{
						text: "The overall goal of the learning algorithm is to capture patterns, and be able to produce such patterns in a generic and flexible way in order to create new maps that can be used for a video game like "
					}, 
					{
						link: {
							target: "https://en.wikipedia.org/wiki/Civilization_(series)",
							label: "Civilization"
						}
					}, 
					{
						text: " which can increase the replayability and quality of the player experience. This can be alps, cities, hills, water, represented throughout the NASA maps that is used to train the SVM with, which can then be added and combined with the diamond square algorithm."
					}
				], 
			}, 
			{
				paragraph: [
					{
						text: 'The effectiveness for the SVM to produce maps with respect to the training data can be illustrated to some degree on the picture above (there is still a long way to go for caputuring the pattern that exists in something like the swiss alps). Also, the increasing blurring that takes place in the different pictures is because of the diamond square algorithm being applied. For this project, three different approaches for map generation with a SVM was tested, including using Blur, Diamond-square and a combination of both. Each approach increases the required processing power significantly."'
					}
				], 
			}, 
			{
				img : {
					src: '/map-generator/results.png',
					text: 'figure 3: The different approaches for training the SVN. '
				}
			}, 
			{
				paragraph: [
					{
						text: 'While the blur is able to predict values more quickly than the Diamond-Square and the combination both, the result quickly becomes uninteresting because the map is being flattening out. The diamond-square algorithm on the other side, takes a very large time to train the SVM to create predictions, hence the combination is seen as the best approach for this project. Since Diamond-Square is able to capture some patterns to some degree, and then integrate these partial maps into each other when producing new maps, the results become a bit more interesting and quicker to produce.'
					}
				], 
			}, 
		]
	},
	{
		id: 4, 
		cover : 'webgl/webgl-small.png',
		name: 'CoffeGraph : webGL meets coffescript' ,
		source: undefined,
		tags: ['WebGL', 'Graphics programming', 'Node graph architecture', 'Web Development'],
		role: ['Programmer'], 
		created_with: ['Javascript', 'CoffeeScript', 'requireJS'], 
		collaborators: ['Jeppeh Olsen', 'Malena Klaus'],
		date: 2015, 
		content:  [
			{
				paragraph: [
					{
						text: "This project explores how a traditional video game scene graph can be implemented in the graphics engine webGL. Here, coffescript and requireJS was used to create the setup for working together, and in different modules of the project to create better flexibility."	
					}, 
				]
			}, 
			{
				img: {src: '/webgl/screenshot.png', text: "figure 1: image of the application. On the top is the weblGL canvas, and on the bottom is different fields that is able to send DOM events to webGL."}
			},
			{
				subtitle: "How it works: "
			},
			{
				paragraph: [
					{
						text: "The projects scene graph is essentially a nodegraph, where we add transformation to each node on the graph with the child-parent relationships in mind. For instance, when a top-level node is rotated, scaled or translated, the children should recieve the same transformations. In this project, this is illustrated by the different rendered pyramids. Here, the center pyramid is the top root node, while having a smaller pyramid as a child, which also has a smaller pyramid as a child. Each pyramid is then applied with rotation and translating transformations which is progressed through the children of the node as well."
					}, 
				]
			}, 
			{
				paragraph: [
					{
						text: "The webGL canvas can also listen to events from the DOM (e.g. a textfield), and use these values in the shader, or by adding transformation to the elements."
					}, 
				]
			}, 
			{
				subtitle: "Listening to DOM events: "
			}, 
			{
				paragraph: [
					{
						text: "The project also explores how DOM events can be integrated into manipulating the webGL canvas. To explore this, a text-field is added serving as an editor for the fragment shader, while an HTML formular is added that sends tranformation events recived by the webGL program. The HTML fields then needs to referenced by webGL, and will then listen to the specified events during runtime. Additionally, this can easily be extended to mouse and keyboard events, and/or retrieved data from something else (e.g. time)"
					}, 
				]
			}, 
			{
				videoGallery: ["https://www.youtube.com/embed/VMxwQ-qJMmI?ecver=1", "https://www.youtube.com/embed/tJDhtkJnYng?ecver=1"]
			}
		]
	},
	{
		id: 5, 
		cover : 'digit-classifier/dataset-small.png',
		name: 'Digit classifier' ,
		tags: ['Classification', 'Data mining', 'MNIST dataset', 'Data analysis', 'Machine learning', 'Image recognition'],
		role: ['Programmer'], 
		created_with: ['MatLab', 'Image parsing'], 
		collaborators: ['Jeppeh Olsen', 'Mads Anthony'],
		date: 2015, 
		content:  [
			{
				paragraph: [
					{
						text: "Classification tasks can be incredible useful when trying to determine what label a new item should have. In this project we use the famous MNIST dataset of handwritten digit images, and cluster, classify and determine the validation of our results in a number of different ways."
					}, 
				]
			}, 
			{
				paragraph: [
					{
						text: "pre-processing of data is handled by Fourier Transformation, clustering is achieved through Principal Component Analysis to reduce the amount of dimensions, K-nearest neighbour and Artificial Neural Networks are used as classification algorithms, and k-fold cross-validation is used to validate our results. In the end, we get an accuracy of 94% with K-nearest neightbour and 96% with artificial neural networks. For a list of the current state of the art of recognizing new handwritten digits by using the MNIST dataset, see "
					}, 
					{
						link: {
							target: "http://rodrigob.github.io/are_we_there_yet/build/classification_datasets_results.html", 
							label: "here."
						}
					},
				]
			}, 
			{
				img: {src: 'digit-classifier/fft.png', text: "figure 1: illustration on the effect of applying FFT to digits."}
			},
			{
				subtitle: "Results and reflections: "
			},
			{
				paragraph: [
					{
						text: "A picture of the clustering through the PCA can be seen below in which the amount of dimensions is reduced to 2 from 784 (here, each dimension is a pixel value) by using the PCA algorithm. Here, each color represents a digit, e.g. the color represents the digit '7'. This figure shows that while some digits can be very easy to cluster in same group (e.g. the value of '1'), a value like '6' or '4' can vary more in terms of their different pixels dimensions."
					}, 
				] 
			}, 
			{
				img: {src: "digit-classifier/pca-visual.png", text: "figure 2: illustration of clustering by looking at the two dimensions provided by the PCA. Each colour represents a digit."}
			},
			{
				paragraph: [
					{
						text: "During training we perform multiple experiments: with or without FFT preprocessing, and with the K-means and/or ANN classification, leading to four experiments in total. It is interesting that after we validate and test the classification algorothms, that the simplicity of kNN seems to perform better than Matlabs built-in ANN function, while also being influenced half as much by the FFT preprocessing." 
					}, 
				] 
			}, 
			{
				paragraph: [
					{
						text: "The next point raises the question on how useful the FFT is for the MNIST dataset, which in this case has a negative impact on the precision on both approaches. This can illustrate first and foremost the 'pureness' of the MNIST dataset, and how the dataset itself can influence the prcesision. But this is something that can be hard to predict, and needs to be properly tested before discarding a specific preprocessing technique such as FFT."
					}, 
				] 
			}, 
			{
				img: {src: "digit-classifier/comparison-table.png", text: "figure 3: comparison on the results. Most notably, the FFT preprocessing has a negative effect, and our kNN achieves the highest accuracy"}
			}, 
			{
				img: {src: "digit-classifier/learning-curve.png", text: "figure 4: Illustration of Matlabs native ANN function and the learning curve."}
			}, 
		]
	},
	{
		id: 6, 
		cover : 'fidusia/fidusia-small.png',
		name: 'Social learning through communities of play' ,
		tags: ['Social learning', 'video games', 'multi-player vs single-player', 'child instituions'],
		role: ['Designer', 'Ressearcher'], 
		created_with: ['Ethnographic ressearch', 'Transcriptions', 'Observation', 'Group-interviews'], 
		collaborators: ['Anne Gerdes'],
		date: 2014, 
		content:  [
			{
				italicText: [
					{
						text: "The project was top graded, and can be downloaded "
					}, 
					{
						link: {
							target: "../images/fidusia/assignment.pdf",
							label: "here."
						}
					}, 
					{
						text: " (danish only)"
					}
				]
			},
			{
				paragraph: [
					{
						text: "During this project, Entienne Wenger and Celia Pearces notion on how communities of play can create contexts for learning is explored on the child institution Fidusia. The project connects the fields of ethnographic ressearch, game design and learning to highlight how child institutions can use communities of play more effectively in terms of selecting the offered video games, and how the communities can be maintained."
					}
				]
			}, 
			{
				paragraph: [
					{
						text: "Here, different video games and board games are offered to children, who can play together, observe other kids playing, or play with adults. The project then explores how learning can be facilitated by looking specifically at 1: the game itself, 2: how adults can enhance the community of play, and 3: how institutions can provide guidelines for ensuring a better context of informal learning."
					}
				]
			}, 
			{
				img: {src: "fidusia/book-cover.jpg", text: "Figure 1: Celia Pearces great book: 'Communities of Play'. A great book on how to create communities centered around playing, which was referenced several times in my Bachelor project." }
			}, 
		]
	},
	{
		id: 7, 
		cover : 'ne-woods/ne_woods-small2.png',
		name: 'Neverending woods' ,
		source: "https://neverendingwoods.itch.io/neverending",
		tags: ['Classification', 'Data mining', 'MNIST dataset', 'Data analysis', 'Machine learning'],
		role: ['Programmer', 'Project Manager'], 
		created_with: ['Unity', 'C#'], 
		collaborators: ['Nina Vinde Folkersen', 'Simon Stålhandske', 'Lise Ivanouw', 'Steffen Mortensen'],
		date: 2014, 
		content:  [
			{
				italicText: [
					{
						text: "The project was rated as one of the best free games of the week by "
					}, 
					{
						link: {
							target: "http://www.pcgamer.com/free-games-of-the-week/",
							label: "PC-Gamer "
						}
					}, 
					{
						text: " (unfortunately now archieved) and recieved top grade during the exam."
					}
				]
			},
			{
				paragraph: [
					{
						text: "Neverending woods is a 2d platformer game that focuses on the relationship between the player and her newly found friend Fella. Ruby has left her home and ventured into the mysterious forrest, where she and Fella must work and play together in order to overcome various challenges."
					}
				]
			},
			{
				subtitle: "Gameplay: "
			},  
			{
				paragraph: [
					{
						text: "The gameplay is centered around the gadget "
					},
					{
						link: {
							target: "https://en.wikipedia.org/wiki/Tamagotchi",
							label: "Tamagotchi"
						}
					}, 
					{
						text: " and the dark danish award-winning video game "
					}, 
					{
						link: {
							target: "http://www.playdead.com/games/limbo/",
							label: 'Limbo'
						}
					}, 
					{
						text: " where you have to move around like a traditional 2d platformer and pick up objects, in order to advance through the level. Likewise, the player needs to satisfy the little pet 'Fella', in order for it to willingly follow along and help Ruby with challenges that she is unable to complete on her own."
					},
				]
			},
			{
				img: {src: "../images/ne-woods/ruby-fella.jpg", text: "Figure 1: Ruby must carry lodges so that Fella can follow Ruby through the forrest."}
			}, 
			{
				img: {src: "../images/ne-woods/trapped-fella.png", text: "Figure 2: Ruby and Fellas first encounter. Fella is trapped, cold and hungry and needs a friend to help him out."}
			}, 
		]
	},

	{
		id: 8, 
		cover : 'spacebus/spacebus-small.png',
		name: 'The Wonky Spacebus' ,
		source: "https://neverendingwoods.itch.io/neverending",
		tags: ['Controller-twister', 'Game Development', 'Leaking', 'Local multi-player'],
		role: ['Programmer', 'Gameplay'], 
		created_with: ['MatLab'], 
		collaborators: ['Jonathan Jørgensen', 'Jeppeh Olsen', 'Maxime Moose', 'Jonas Jeppesen'],
		date: 2016, 
		content:  [
			{
				italicText: [
					{
						text: "Sorry for the music autoplay! But please listen to this wonderful composed music by Maxime that describes the mood of the game perfectly ."
					}, 
				]
			},
			{
				paragraph: [
					{
						text: "The Wonky Spacebus is 2-4 lovely pixelated people on their everyday trip into space in their favourite spacebus. Unfortunately the spacebus has begun leaking, and they have to repair it with whatever materials they can find. The game was created during the 2016 Nordic Game Jam conference in a couple of days, and was a hell of a lot great fun."
					}
				]
			}, 
			{
				subtitle: "How to play it: "
			},
			{
				paragraph: [
					{
						text: "The player must move the hands of their character with the analog stick in order to grab material that can fix the leaking holes. However, the player needs to hold the material in place by pressing the accompanied button, the arrow keys, 'x', 'square', 'circle' or 'triangle' button. If they let get go of that particular button, the hole is leaking once again. As an example, if there exist eight holes, the player needs to hold down all eight buttons down simentaniously."
					}
				]
			}, 
			{
				audio: "../images/spacebus/clip.mp3"
			}, 
			{
				video: "https://www.youtube.com/embed/_IIZyZDKXGs?ecver=1"
			},

		]
	},
	/*{
		id: 9, 
		cover : 'websites/website-small.png',
		name: 'Websites' ,
		tags: ['Web development'],
		role: ['Programmer'], 
		created_with: ['Bootstrap', 'PHP', 'CSS / LESS', 'Wordpress', 'Jquery', 'Javascript'], 
		date: 2014, 
		content:  
		[
			{
				paragraph: [
					{
						text: "During my studies on my Bachelor, i created two websites from scratch for two different companies. The websites was implemented with bootstrap, PHP, javascript and wordpress, and several artwork and visual components that had to be integrated to the websites. Creating and fitting images to the websites was likewise a part of the job."
					}
				]
			}, 
			{
				subtitle: "Italo Wines Only:"
			},
			{
				paragraph: [
					{
						text: "For the website of ItaloWinesOnly a plugin was also created for wordpress, where the users could add, remove, and edit existing wines and winehouses to the databases. This plugin featured live previewing, and several error handling and user friendly techniqes when a user had to create new entries on the website. This assignment was particular interesting because of the various techniques that could be implemented as a part of the CMS. Since Wordpress offered a good interface for a non-expert to create new content in, the plugin served as an familiar tool that italowinesonly could extend their wine catalogue from."
					}
				]
			}, 
			{
				gallery: [
					'websites/itwine-about.png', 'websites/itwine-front.png', 'websites/itwine-wines.png']
			}, 
			{
				subtitle: "Birks el-service Aps: "
			},
			{
				paragraph: [
					{
						text: "Birks el-service Aps on the other hand, was my first website in which i focused more on the visual assets that had to be produced, compared to the relatively simple code that has the mark up information in particular bootstrap and css classes classes. A renting feature was also implemented,  where customers could browse through different electrician parts that could be rented out, which was achieved largely by using jquery and other carousel / rotator plugins."
					}
				]
			}, 
			{
				img: {src: "../images/websites/birksel-front.png", text: undefined}
			}, 
		]
	}, 
	{
		id: 10, 
		cover : 'portfolio/portfolio-small.png',
		name: 'Creating a modern web portfolio with Spring and Redux' ,
		tags: ['Classification', 'Data mining', 'MNIST dataset', 'Data analysis', 'Machine learning'],
		role: ['Programmer'], 
		created_with: ['React', 'Bootstrap', 'Javascript', 'Node.js', 'Redux', 'Spring'], 
		date: 2017, 
		content:  [
			{
				paragraph: [
					{
						text: "I had always wanted to pick up the "
					},
					{
						link: {
							target: "https://github.com/e-conomic/client-side-application-course",
							label: "React course"
						}
					}, 
					{
						text: "offered by economic, and enhance my web development skills specficially for learning the react extension Redux. When MOOC offered their "
					}, 
					{
						link: {
							target: "http://mooc.fi/courses/2016/cybersecurity/",
							label: "Cyber Security Course"
						}
					}, 
					{
						text: " for free, i saw an opportunity to combine the two modern frameworks to create a interesting (and secure!) web application."
					}
				]
			}, 
		]
	}*/
]

export default projects; 