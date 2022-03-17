const games = [
    { "name": "221B Baker Street", "category": "co-op" },
    { "name": "Arkham Horror", "category": "co-op" },
    { "name": "Arkham Horror The Card Game", "category": "co-op" },
    { "name": "Battlestar Galactica", "category": "co-op" },
    { "name": "Beasts of Balance", "category": "co-op" },
    { "name": "Betrayal at Baldur's Gate", "category": "co-op" },
    { "name": "Betrayal at House on the Hill", "category": "co-op" },
    { "name": "Betrayal at House on the Hill: Widow's Walk", "category": "co-op" },
    { "name": "Burgle Bros", "category": "co-op" },
    { "name": "Captain Sonar", "category": "co-op" },
    { "name": "Castle Panic", "category": "co-op" },
    { "name": "Codenames Duet", "category": "co-op" },
    { "name": "Dead Men Tell No Tales", "category": "co-op" },
    { "name": "Dead of Winter", "category": "co-op" },
    { "name": "Dead of Winter: The Long Night", "category": "co-op" },
    { "name": "Elder Sign", "category": "co-op" },
    { "name": "Eldritch Horror", "category": "co-op" },
    { "name": "Escape From The Aliens In Outer Space", "category": "co-op" },
    { "name": "Escape The Dark Castle", "category": "co-op" },
    { "name": "Flash Point: Fire Rescue 2nd Edition", "category": "co-op" },
    { "name": "Forbidden Desert", "category": "co-op" },
    { "name": "Forbidden Island", "category": "co-op" },
    { "name": "Forbidden Sky", "category": "co-op" },
    { "name": "Fuse", "category": "co-op" },
    { "name": "Hanabi", "category": "co-op" },
    { "name": "Hanabi Deluxe", "category": "co-op" },
    { "name": "Harry Potter: Hogwarts Battle", "category": "co-op" },
    { "name": "Judge Dredd: Helter Skelter", "category": "co-op" },
    { "name": "Last Friday", "category": "co-op" },
    { "name": "Letters from Whitechapel", "category": "co-op" },
    { "name": "Lord of the Rings", "category": "co-op" },
    { "name": "Magic Maze", "category": "co-op" },
    { "name": "Mansion of Madness: Second Edition", "category": "co-op" },
    { "name": "Master Word", "category": "co-op" },
  
    { "name": "Mysterium", "category": "co-op" },
  
    { "name": "Pandemic", "category": "co-op" },
  
    { "name": "Pandemic: Fall of Rome", "category": "co-op" },
  
    { "name": "Robin Hood and the Merry Men", "category": "co-op" },
  
    {
      "name": "Robinson Crusoe: Adventure On The Cursed Island",
      "category": "co-op",
    },
  
    { "name": "Samurai Spirit", "category": "co-op" },
  
    { "name": "Sherlock Holmes Consulting Detective", "category": "co-op" },
  
    { "name": "Spirit Island", "category": "co-op" },
  
    { "name": "T.I.M.E Stories", "category": "co-op" },
  
    { "name": "T.I.M.E Stories: A Prophecy of Dragons", "category": "co-op" },
    { "name": "T.I.M.E Stories: The Marcy Case", "category": "co-op" },
  
    { "name": "T.I.M.E Stories: Under The Mask", "category": "co-op" },
    { "name": "TEAM3 GREEN", "category": "co-op" },
  
    { "name": "The Big Book Of Madness", "category": "co-op" },
  
    { "name": "The Captain is Dead", "category": "co-op" },
  
    { "name": "The Crew: The Quest for Planet Nine", "category": "co-op" },
  
    { "name": "The Lost Expedition", "category": "co-op" },
  
    { "name": "The Mind", "category": "co-op" },
  
    { "name": "Unlock! Escape Adventures", "category": "co-op" },
  
    { "name": "Unlock! Exotic Adventures", "category": "co-op" },
    { "name": "XCOM The Board Game", "category": "co-op" },
    { "name": " Zombicide", "category": "co-op" },
    { "name": "1066: Tears to Many Mothers", "category": "heavy strategy" },
    { "name": "878 Vikings", "category": "heavy strategy" },
    { "name": "A Feast For Odin", "category": "heavy strategy" },
    { "name": "A Game of Thrones: The Board Game", "category": "heavy strategy" },
    { "name": "A Game of Thrones: The Card Game", "category": "heavy strategy" },
    { "name": "A War of Whispers", "category": "heavy strategy" },
    { "name": "Adrenaline", "category": "heavy strategy" },
    { "name": "Agricola", "category": "heavy strategy" },
    { "name": "Architects of the West Kingdom", "category": "heavy strategy" },
    { "name": "Arctic Scavengers", "category": "heavy strategy" },
    { "name": "Auztralia", "category": "heavy strategy" },
    { "name": "Battle for Rokugan", "category": "heavy strategy" },
    { "name": "Blood Rage", "category": "heavy strategy" },
    { "name": "Brass", "category": "heavy strategy" },
    { "name": "Brew Crafters", "category": "heavy strategy" },
    { "name": "Caverna: The Cave Farmers", "category": "heavy strategy" },
    { "name": "Champions of Midgard", "category": "heavy strategy" },
    { "name": "Cosmic Encounter", "category": "heavy strategy" },
    { "name": "Cosmic Encounters: Cosmic Incursion", "category": "heavy strategy" },
    { "name": "Cottage Garden", "category": "heavy strategy" },
    { "name": "Cyclades", "category": "heavy strategy" },
    { "name": "Dark Souls: The Board Game", "category": "heavy strategy" },
    { "name": "Deus", "category": "heavy strategy" },
    { "name": "Dinosaur Island", "category": "heavy strategy" },
    { "name": "Dune", "category": "heavy strategy" },
    { "name": "Eclipse", "category": "heavy strategy" },
    { "name": "Endeavor: Age of Sail", "category": "heavy strategy" },
    { "name": "Escape From Colditz", "category": "heavy strategy" },
    { "name": "Francis Drake", "category": "heavy strategy" },
    { "name": "Great Western Trail", "category": "heavy strategy" },
    { "name": "Hammer of the Scots", "category": "heavy strategy" },
    { "name": "Heroes of Normandie", "category": "heavy strategy" },
    { "name": "Imperial Settlers", "category": "heavy strategy" },
    { "name": "Inis", "category": "heavy strategy" },
    { "name": "Isle of Skye: From Chieftain to King", "category": "heavy strategy" },
    {
      "name": "Jonathan Strange & Mr Norrell: A Board Game of English Magic",
      "category": "heavy strategy",
    },
    { "name": "Judge Dredd: Helter Skelter", "category": "heavy strategy" },
    { "name": "Kemet", "category": "heavy strategy" },
    { "name": "Kumo Hogosha", "category": "heavy strategy" },
    { "name": "Lander", "category": "heavy strategy" },
    { "name": "Last Will", "category": "heavy strategy" },
    { "name": "Lewis & Clark", "category": "heavy strategy" },
    { "name": "London", "category": "heavy strategy" },
    { "name": "Lords of Waterdeep", "category": "heavy strategy" },
    { "name": "Lost Ruins Of Arnak", "category": "heavy strategy" },
    { "name": "Mage Knight", "category": "heavy strategy" },
    { "name": "New Angeles", "category": "heavy strategy" },
    { "name": "Orleans", "category": "heavy strategy" },
    { "name": "Photosynthesis", "category": "heavy strategy" },
    { "name": "Posthuman", "category": "heavy strategy" },
    { "name": "Ra", "category": "heavy strategy" },
    { "name": "Raiders of the North Sea", "category": "heavy strategy" },
    { "name": "Rising Sun", "category": "heavy strategy" },
    { "name": "Rising Sun: Daimyo Box", "category": "heavy strategy" },
    { "name": "Rising Sun: Kami Unbound", "category": "heavy strategy" },
    { "name": "Rising Sun: Monster Pack", "category": "heavy strategy" },
    { "name": "Robin Hood and the Merry Men", "category": "heavy strategy" },
    {
      "name": "Robinson Crusoe: Adventure On The Cursed Island",
      "category": "heavy strategy",
    },
    { "name": "Roll For The Galaxy", "category": "heavy strategy" },
    { "name": "Root", "category": "heavy strategy" },
    { "name": "Royal Palace", "category": "heavy strategy" },
    { "name": "Sabotage", "category": "heavy strategy" },
    { "name": "Scoville", "category": "heavy strategy" },
    { "name": "Scythe", "category": "heavy strategy" },
    { "name": "Shadow Hunters", "category": "heavy strategy" },
    { "name": "Sierra West", "category": "heavy strategy" },
    { "name": "Snowdonia", "category": "heavy strategy" },
    { "name": "Spring Meadow", "category": "heavy strategy" },
    { "name": "Star Wars: Imperial Assault", "category": "heavy strategy" },
    { "name": "Star Wars: Rebellion", "category": "heavy strategy" },
    { "name": "Steampunk Rally", "category": "heavy strategy" },
    { "name": "Tales of the Arabian Nights", "category": "heavy strategy" },
    { "name": "Terra Mystica", "category": "heavy strategy" },
    { "name": "Terraforming Mars", "category": "heavy strategy" },
    { "name": "The City of Kings", "category": "heavy strategy" },
    { "name": "The Estates", "category": "heavy strategy" },
    { "name": "Through the Ages", "category": "heavy strategy" },
    { "name": "Tigris & Euphrates", "category": "heavy strategy" },
    { "name": "Trickerion", "category": "heavy strategy" },
    { "name": "Twilight Imperium", "category": "heavy strategy" },
    { "name": "Twilight Struggle", "category": "heavy strategy" },
    { "name": "Tzolk'in", "category": "heavy strategy" },
    { "name": "Undaunted: North Africa", "category": "heavy strategy" },
    { "name": "Vast", "category": "heavy strategy" },
    { "name": "Village", "category": "heavy strategy" },
    { "name": "Viticulture", "category": "heavy strategy" },
    { "name": "Watson & Holmes", "category": "heavy strategy" },
    { "name": "Welcome to Dino World", "category": "heavy strategy" },
    { "name": "XCOM The Board Game", "category": "heavy strategy" },
    { "name": "Xia: Legends of a Drift System", "category": "heavy strategy" },
    { "name": "Zimby Mojo", "category": "heavy strategy" },
  
    { "name": "A Game of Cat & Mouth", "category": "quick" },
    { "name": "Abandon All Artichokes", "category": "quick" },
    { "name": "Action Cats", "category": "quick" },
    { "name": "Belle of the Ball", "category": "quick" },
    { "name": "Billionaire Banshee", "category": "quick" },
    { "name": "Blueprints", "category": "quick" },
    { "name": "Bohnanza", "category": "quick" },
    { "name": "Brave Rats", "category": "quick" },
    { "name": "Buckaroo", "category": "quick" },
    { "name": "Bump This", "category": "quick" },
    { "name": "Cabaret", "category": "quick" },
    { "name": "Canine Chaos", "category": "quick" },
    { "name": "Canine Kleptomaniacs", "category": "quick" },
    { "name": "Cat Chaos", "category": "quick" },
    { "name": "Catch the Moon", "category": "quick" },
    { "name": "Celestia", "category": "quick" },
    { "name": "Citadels", "category": "quick" },
    { "name": "Cobra Paw", "category": "quick" },
    { "name": "Cold War", "category": "quick" },
    { "name": "Contrast", "category": "quick" },
    { "name": "Cortex Challenge", "category": "quick" },
    { "name": "Deck of Cards", "category": "quick" },
    { "name": "Deep Sea Adventure", "category": "quick" },
    { "name": "Dino Dump", "category": "quick" },
    { "name": "Dominoes", "category": "quick" },
    { "name": "Doodle Rush", "category": "quick" },
    { "name": "Doomsday Bots", "category": "quick" },
    { "name": "Draughts", "category": "quick" },
    {
      "name": "Elections of US America Election: The Card Game",
      "category": "quick",
    },
    {
      "name": "Epic Spell Wars of the Battle Wizards: Duel at Mt. Skullzfyre",
      "category": "quick",
    },
    {
      "name": "Epic Spell Wars of the Battle Wizards: Rumble at Castle Tentakill",
      "category": "quick",
    },
    { "name": "Fever Pitch", "category": "quick" },
    { "name": "Fluxx", "category": "quick" },
    { "name": "For Sale", "category": "quick" },
    { "name": "Frenetic", "category": "quick" },
    { "name": "Geistes Blitz", "category": "quick" },
    { "name": "Get Bit", "category": "quick" },
    { "name": "Grabolo", "category": "quick" },
    { "name": "Greedy Greedy Goblins", "category": "quick" },
    { "name": "Hardback", "category": "quick" },
    { "name": "Hero Realms", "category": "quick" },
    { "name": "Hive", "category": "quick" },
    { "name": "Hive Pocket", "category": "quick" },
    { "name": "Jetpack Joyride", "category": "quick" },
    { "name": "Jump Drive", "category": "quick" },
    { "name": "Jungle Speed Safari", "category": "quick" },
    { "name": "Katamino", "category": "quick" },
    { "name": "Klask", "category": "quick" },
    { "name": "Klask 4 Player", "category": "quick" },
    { "name": "Linkee", "category": "quick" },
    { "name": "Loot", "category": "quick" },
    { "name": "Lost Cities", "category": "quick" },
    { "name": "Love Letter", "category": "quick" },
    { "name": "Love Letter Premium Edition", "category": "quick" },
    { "name": "Love Letter: Adventure Time", "category": "quick" },
    { "name": "Mapominoes", "category": "quick" },
    { "name": "Men At Work", "category": "quick" },
    { "name": "Monopoly Deal", "category": "quick" },
    { "name": "Mousetrap", "category": "quick" },
    { "name": "Nimble", "category": "quick" },
    { "name": "Ninja Camp", "category": "quick" },
    { "name": "NMBR9", "category": "quick" },
    { "name": "No Thanks", "category": "quick" },
    { "name": "OK Play", "category": "quick" },
    { "name": "P for Pizza", "category": "quick" },
    { "name": "Paperback", "category": "quick" },
    { "name": "Pass the Pigs", "category": "quick" },
    { "name": "Pocket Madness", "category": "quick" },
    { "name": "Pocket Mars", "category": "quick" },
    { "name": "Qwinto", "category": "quick" },
    { "name": "Qwordie", "category": "quick" },
    { "name": "Red 7", "category": "quick" },
    { "name": "Rock, Paper, Wizard", "category": "quick" },
    { "name": "Rocket Race", "category": "quick" },
    { "name": "Roll For It", "category": "quick" },
    { "name": "Rory's Story Cubes", "category": "quick" },
    { "name": "Rox", "category": "quick" },
    { "name": "Rummikub", "category": "quick" },
    { "name": "Rummikub Word", "category": "quick" },
    { "name": "Saboteur", "category": "quick" },
    { "name": "Saboteur 2", "category": "quick" },
    { "name": "Shape Shift", "category": "quick" },
    { "name": "Shut the Box", "category": "quick" },
    { "name": "Silver Amulet", "category": "quick" },
    { "name": "Six Second Scribbles", "category": "quick" },
    { "name": "Skull", "category": "quick" },
    { "name": "Space Dash", "category": "quick" },
    { "name": "Star Realms", "category": "quick" },
    { "name": "Sushi Go", "category": "quick" },
    { "name": "That's Pretty Clever", "category": "quick" },
    { "name": "The Princess And The Goblin", "category": "quick" },
    { "name": "Tides of Time", "category": "quick" },
    { "name": "Timeline Challenge", "category": "quick" },
    { "name": "Timeline: British History", "category": "quick" },
    { "name": "Timeline: General Interest", "category": "quick" },
    { "name": "Timeline: Historical Events", "category": "quick" },
    { "name": "Timeline: Inventions", "category": "quick" },
    { "name": "Timeline: Science & Discoveries", "category": "quick" },
    { "name": "Tiny Epic Defenders", "category": "quick" },
    { "name": "Tiny Epic Galaxies", "category": "quick" },
    { "name": "Tiny Epic Kingdoms", "category": "quick" },
    { "name": "Tiny Epic Western", "category": "quick" },
    { "name": "Tokyo Highway", "category": "quick" },
    { "name": "Trivial Pursuit Harry Potter", "category": "quick" },
    { "name": "Tsuro", "category": "quick" },
    { "name": "Twin It!", "category": "quick" },
    { "name": "Tyle", "category": "quick" },
    { "name": "Uproar!", "category": "quick" },
    { "name": "Virus: The Card Game", "category": "quick" },
    { "name": "Walk the Plank", "category": "quick" },
    { "name": "Welcome to the Dungeon", "category": "quick" },
    { "name": "Word Slam", "category": "quick" },
  ];
  
  export default games;