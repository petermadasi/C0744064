var bird = {
    genus: "corvus",
    species: "carvox",
    commonName: "raven",
    callType: "squawky",
    quote: "Nevermore";
    maxOffspring: 5,
    noisy: true,
    deadly: false,

};
var bear = {
    genus: "ursus",
    species: "arctos",
    commonName: "brown bear",
    callType: "roar",
    quote: "",
    maxOffspring: 3,
    noisy: true,
    deadly: true,

};

bird.color="black"
// practice
//bird
//Object { genus: "corvus", species: "carvox", commonName: "raven", callType: "squawky", quote: "Nevermore", maxOffspring: 5, noisy: true, deadly: false, color: "black" }
//bird["Where it lives"] = "in a tree";
//"in a tree"
//bird
//Object { genus: "corvus", species: "carvox", commonName: "raven", callType: "squawky", quote: "Nevermore", maxOffspring: 5, noisy: true, deadly: false, color: "black", "Where it lives": "in a tree" }
//bird.whereItLives = "in trees";
//"in trees"
//delete bird.Where it lives
//SyntaxError: unexpected token: identifier[Learn More]debugger eval code: 1: 18
//delete bird.Where it lives;
//SyntaxError: unexpected token: identifier[Learn More]debugger eval code: 1: 18
//delete bird.whereItLives;
//true
//bird2 = bird
//Object { genus: "corvus", species: "carvox", commonName: "raven", callType: "squawky", quote: "Nevermore", maxOffspring: 5, noisy: true, deadly: false, color: "black", "Where it lives": "in a tree" }
//bird2
//Object { genus: "corvus", species: "carvox", commonName: "raven", callType: "squawky", quote: "Nevermore", maxOffspring: 5, noisy: true, deadly: false, color: "black", "Where it lives": "in a tree" }
//var india = ['hyd', 'mumbai', 'delhi', 'warangal'];
//undefined
//india
//Array(4)["hyd", "mumbai", "delhi", "warangal"]
//india.length
//4
//india[2]
//"delhi"
//india[6] = "hanamkonda";
//"hanamkonda"
//india[india.lenght] = "kzp"
//"kzp"
//india
//Array(7)["hyd", "mumbai", "delhi", "warangal", < 2 empty slots >, "hanamkonda" ]
//india[india.length] = "kzp"
//"kzp"
//india
//Array(8)["hyd", "mumbai", "delhi", "warangal", < 2 empty slots >, "hanamkonda", "kzp" ]
//india[4]
//undefined
//delete india[1]
//true
//india[4]
//undefined
//india
//Array(8)["hyd", < 1 empty slot >, "delhi", "warangal", < 2 empty slots >, "hanamkonda", "kzp" ]
//india splice(2, 1)
//SyntaxError: unexpected token: identifier[Learn More]debugger eval code: 1: 6
//indiasplice(2, 1)
//ReferenceError: indiasplice is not defined[Learn More]debugger eval code: 1: 1
//india.splice(2, 1)
//Array["delhi"]
