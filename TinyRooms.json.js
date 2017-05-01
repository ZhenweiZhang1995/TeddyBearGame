[
   {
      "id": "1",
      "name": "Bed",
      "description": "Moonlight plays through the window, softly illuminating the bedroom, full of comfortable memories. To the he west is the cupboard where you usually live, and the doorway to the northwest leads to the rest of the house. David, your owner, lies next to you on the bed, in a deep sleep.",
      "motions": [
         {"dir": "WEST", "dest": "2"},
         {"dir": "GET", "dest": "2"}
      ],
      "info": "bed"
   },

   {
      "id": "2",
      "name": "Bedroom",
      "description": "Moonlight plays through the window, softly illuminating the bedroom, full of comfortable memories. To the west is the cupboard where you usually live, and the doorway to the northwest leads to the rest of the house. A big bed fills up most of the room.",
      "motions": [
         {"dir": "WEST", "dest": "3"},
         {"dir": "Cupboard", "dest": "3"},
         {"dir": "NORTHWEST",  "dest": "4"},
         {"dir": "Doorway", "dest": "4"}
      ],
      "info": "in the bedroom"
   },
   {
      "id": "3",
      "name": "cupboard",
      "description": "When you aren't lying on the bed, you usually stay in here, snug and safe with your friends atop the warm pile of clothes. The cupboard opens eastward to the bedroom. On the pile of clothes you can see your good friends Matt and Terry Moose.",
      "motions": [
         {"dir": "EAST", "dest": "2"},
         {"dir": "Bedroom", "dest": "2"}
      ],
      "info": "on the cupboard"
   },
   {
      "id": "4",
      "name": "On the side of the Thames River",
      "description": "It is 1806, and you are beside the Thames River, where a small band is playing. You can walk up the river to the north. Or to the east there is a path.",
      "motions": [
         {"dir": "WEST", "dest": "3"},
         {"dir": "NORTH", "dest": "5"},
         {"dir": "EAST", "dest": "14"}
      ],
      "info": "mill"
   },
   {
      "id": "5",
      "name": "The steps of the Supreme Court",
      "description": "You are on the steps of the Supreme Court. You can walk up the steps.",
      "motions": [
         {"dir": "UP", "dest": "6"},
         {"dir": "SOUTH", "dest": "4"}
      ],
      "info": "supreme-court"
   },
   {
      "id": "6",
      "name": "In the New York Times editorial office",
      "description": "You are standing next to the editor-in-chief of the New York Times as he paces back and forth deciding if he should publish the Pentagon Papers. You can enter the blog room to the west or the news desk to the east.",
      "motions": [
         {"dir": "EAST", "dest": "7"},
         {"dir": "DOWN", "dest": "5"},
         {"dir": "WEST", "dest": "10", "keyStr": "LAPTOP"}
      ],
      "info": "pentagon-papers"
   },
   {
      "id": "7",
      "name": "The WikiLeaks headquarters in Stockholm, Sweden",
      "description": "You are at the WikiLeaks headquarters in Stockholm, Sweden. You are 100 feet below ground in a room with green plants, solar lighting, and a buzzing humidifier. This room only has one entrance. Leave to the south. Or exit west.",
      "motions": [
         {"dir": "SOUTH", "dest": "8"},
         {"dir": "WEST", "dest": "6"}
      ],
      "info": "wikileaks"
   },
   {
       "id": "8",
       "name": "Bar in Redwood City",
       "description": "You are inside a bar in Redwood City. You can leave the bar to the west.",
       "motions": [
         {"dir": "WEST", "dest": "9"},
         {"dir": "NORTH", "dest": "7"}        
       ],
       "info": "gizmodo-iphone"
   },
   {
      "id": "9",
      "name": "At the Apple Headquarters",
      "description": "You are at the Apple Headquarters. You walk by a clean desk, and on it are the slides of a presentation labeled classified. You can go home to the south.",
      "motions": [
         {"dir": "EAST", "dest": "8"},
         {"dir": "SOUTH", "dest": "13"}
      ],
      "info": "apple-headquarters"
   },
   {
      "id": "10",
      "name": "CS105 Lecture",
      "description": "You are in the top row of Hewlett 200 for CS105, as the lecturer explains simple HTML and CSS. You supposedly needs these tools to make your first simple website. You are on your way to becoming a blogger. You can leave class to the west.",
      "motions": [
         {"dir": "WEST", "dest": "11"},
         {"dir": "EAST", "dest": "6"}
      ],
      "info": "blog-what"
   },
   {
      "id": "11",
      "name": "The LAIR",
      "description": "The LAIR doesn't help you if you are in CS105, but you go there anyway. You see dozens of students with their heads tucked down staring at their computers. You see a stray printout in the corner which contains the solutions to the Breakout assignment. You aren't in CS106A, but you might be in the future. Leave to the east, or continue north.",
      "motions": [
         {"dir": "EAST", "dest": "10"},
         {"dir": "NORTH", "dest": "12"}
      ],
      "info": "blog-issues"
   },
   {
      "id": "12",
      "name": "CS181 Section",
      "description": "You sit around a table for CS181 section and realize the positive implications of blogging. Now that the barrier to entry in publication has been lowered, the internet has become a tool for the spread of knowledge across the world. More references to the north.",
      "motions": [
         {"dir": "SOUTH", "dest": "11"},
         {"dir": "NORTH", "dest": "13"}
      ],
      "info": "blog-issues-2"
   },
   {
      "id": "13",
      "name": "References",
      "description": "You are wondering where we got all of this information from. You can restart in the west.",
      "motions": [
         {"dir": "WEST", "dest": "1"}
       ],
      "info": "references"
   },
   {
      "id": "14",
      "name": "Yellow Wood",
      "description": "You are in a yellow wood. There are two paths that diverge. The path to the north looks quite popular, but the path to the east has not had nearly as many people walk it. You came from the west.",
      "motions": [
         {"dir": "WEST", "dest": "4"},
         {"dir": "NORTH", "dest": "5"},
         {"dir": "EAST", "dest": "15"}
       ],
      "info": ""
   },
   {
      "id": "15",
      "name": "Dark Alley",
      "description": "You are in a narrow and dark alley. There is no way out but the way you came.",
      "motions": [
         {"dir": "WEST", "dest": "14"}
       ],
      "info": "paine"
   }
]