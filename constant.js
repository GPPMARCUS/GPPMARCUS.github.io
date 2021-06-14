var all_locs = ['Car', 'Terrace', 'Cocktailbar', 'Party', 'Parkinglot', 'Tunnel', 'Appartmentcomplex', 'Hallway', 'Highway',
'Square', 'Balcony', 'Car showroom', 'Abandoned city','Front door','City','Swimming pool','Bedroom','Bathroom','Picknick bench','Truckstop',
'Holiday home','Kitchen','Empty warehouse','Lake','Forest','Sand quarry','Industrial area','Hotelroom','Club','Restaurant','Alley',
'Beach','Dunes','Window','Bar','Aquarium','Tower','Stairs','Callcentre','Boat','Pooltables','Shopping mall','Jeweller','Clothing store',
'Fire escape','Gaspump','Parking garage','Market','Morgue','Bus','Bench','Campfire','Ice hockey field','Cowshed','Shack','Garden',
'Meadow','Jetty','Music studio','Film studio','Road','Camping','Construction site','Concert hall','Poker table','Basketball court','Office','Roof terrace',
'Street','Photo studio','Interrogation room','Theatre','Dressing room','Gymnastics track','Playground','Skate park','Boxing school','Dump',
'Car dealer','Restaurant kitchen','Doctors office','Hospital','Garage','Bank','Park','Boxing ring','Pier','Liquor store','Silent Disco',
'Airport','Airplane','Walk in closet','Barbershop','Bridge','Villa','Courtyard','Factory building','Laundromat','Metro station',
'Hill','Castle','Beach tent','Gym','Church','Prison cell','Court','Cemetery','Shop window','Billboard','Home studio',
'Train tracks','Train platform','Fastfood restaurant','Server case','Golf course','Football field','Uniformly colored studio','Greenscreen','Plastic canvas','Bicycle',
'Thrift store','Farm','Tent','Stadium','Electronics shop','Night shop','Grass','Sand','Water','Library','Mirrors','Greenhouse',
'White','Black','Under bridge','Flower field','Fly over'];

var all_acts = ['Walking', 'Eating', 'Stand', 'Kneeling', 'Looking', 'Fighting', 'Drunk', 'Lying','Hanging','Jumping','Crying',
'Running','Dancing','Laughing','Working','Praying','Smoking','Washing','Celebrate','Waiting','Sick','Afraid','Paranoid','Cooking','Making',
'Meditate','Sleeping','Hiding','Intimate','Enjoying','Stun','Climbing','Talking','Travelling','Hobby','Sports',
'Building','Art','Reading','Presenting','Throwing','Falling','Give','Stealing','Demolishing','Playing','Playful','Proxy','Daylight','All',
'Shatter','Embarassment','Strange','Entertainment','Without','Overwhelmed','Ladder','Curiosity','Easy','Worship','Set',
'Ultimatum','Essay','Radiance','Welcome','Safety','Skin','Adapt','Betrayal','Physics','Asleep','Machine','Talk','Embrace',
'Tattoo','Dent','Village','Motivation','World','Cult','Colorful','Lush','Ride','Potatoes','Dust','Leaves','Vulnerable',
'Trade','Mourning','Grasping','Tramp','Exhaustion','Color','Perspective','Visible','Fuse','Jump','Dry','Wishes','Ego',
'Weddings','Photograph','Humiliation','Shout','Rare','Yellow','Hatred','Balloon','Audible','Cement','Irony','Chains',
'Serious','Orbit','Maturation','Accomplish','Virtuous','Despair','Luck','Subscription','Tag','Unless','Inconsequential',
'Fragile','Prison','Scream','Tranquility','Picture','Graham','Reflection','Clue','Time','Tree','Pound','Liar','Syndrome',
'Voices','Risk','Air','Window','Laughter','Cold','Essential','Knowing','Tranformation','Amp','Hollow','Sailor','Angel',
'Mom','Rivers','Soliloquy','Divine','Angels','Lost','Unsettling','Eyeshadow','Taint','Novels','Encouragement','Hill','Haven',
'Speaker','Bugs','Love','Video','Compliment','Lace','Coaxing','At','Priorities','Stir','Stable','Holding','Damned','Finish',
'Vanilla','Gift','Forget','Drug','Shame','Permanent','Tripped','Forest','Stubborn','Turban','Fine','Queer','City','Doodle','Spiritual',
'Rights','Watch','Markers','Vintage','Bloom','Ideas','Useless','Sleep','Flower','Battery','Vibrancy','Treat','Deviant','Stripes',
'Disgust','Number','Dead','Revelations','Twig','History','Project','Creepy','Dress','Echo','Excuses','Antibiotic','Lipstick',
'Apologies','Bumble','Circus','Shine','Rubber','Take','Choose','Ghosts','Construct','Astronomy','Break','Careful','Attention',
'Territory','Secondhand','Saint','Outside','Staircase','Rescue','Recharge','Jealousy','Abandon','Drum','Far','Last','Ambiguous',
'Enjoy','Counting','Making','Martini','Slave','Scrutiny','Slow','Discipline','Octopus','Boredom','Saving','Journey','Feelings',
'Whimsy','Penis','Shattered','Always','Sacrifice','Secret','Cemetery','Poison','Calm','Rope','Brook','Fun','Random','Preform','Wish',
'Weather','Feel','Dream','Lemon','Share','Stupidity','Intense','Draw','Numbers','Elves','Whisper','Piano','Memorial','Waste','List',
'Rumors','Catch','Establishment','Anxiety','Allow','Torn','Credit','Call','Domestic','Pickle','Boat','Slob','Sparks','Dice',
'Tradition','Trash','Tomorrow','Gravity','Wrong','Mercy','Cliff','Swamp','Confrontation','Pause','Beautiful','Constant','Blind',
'Rogue','Collapse','Sympathy','Advantage','Daisy','Wandering','Underground','Hard','Nomination','Giants','Regret','Nuance','Meat',
'Thunderstorm','Synchronized','Eternity','Suspenders','Insert','Power','Rocketship','Testament','Body','Friends','Toys','Fury',
'Vegetarian','Car','Pineapple','Hurt','Fortune','Fluffy','Cry','Sordid','Etiquette','Rash','Block','Reference','Ancient','Magic',
'Zipper','Index','Dragon','Drive','Folder','Hero','Wiggle','Meaningless','Building','Chore','Bend','Pain','Issues','Impairment',
'Gun','College','Online','Up','Reality','Rainbow','Holiday','Uncomfortable','Bright','Acid','View','Deer','Personal','Stupid',
'Pure','Department','Prepare','Champagne','Sex','How','Wasteland','Disable','Placid','Microwave','Vase','I','Blanket','Siren',
'Addiction','Vermilion','Luxury','Lecture','Romance','Waterfall','Apples','Trust','Clouds','Hate','Little','Hot-tubbing',
'Abused','Escape','Ink','Tide','Grace','Dance','Sorrow','Mittens','Give','Gay','Win','Look','Relax','Compel','Zombies','Infinity',
'Fearless','Stairs','Service','Minutes','Cream','Sacred','Completion','Shampoo','Date','Character','Mask','Tears','Snow','Upset',
'One','Stroke','Alarm','Jam','Cooperation','Pillow','Determination','Find','Tiled','Omen','Remember','Smirk','Locket','Ambition',
'Similar','Designer','Ballerina','Conclusion','Inventor','Yes','Sinister','Portable','Rating','Responsible','Tail','Iron','Taste',
'Robots','Target','Jacket','Start','Spirit','Prophecy','Shop','Drown','Pride','Pleased','Fatal','Closer','Useful','Unspoken',
'Games','Face paint','Realize','Try','Obligation','Professor','Instinct','Hurricane','Card','Fabulous','Argument','Plushie',
'Only','Voodoo','Thankful','Mystery','Styrofoam','Silent','Degraded','Dependence','Shock','Keep','Seek','Begin','Grease','Umbrella'];

var all_mensen = ['1', '2', '3', '4', '5', '6+'];

var all_kleurmodes = ['Black & White', 'Saturated', 'Saturated', 'Desaturated', 'Desaturated'];

var all_kleuren = ['red', 'orange', 'yellow', 'green', 'blue', 'cyan', 'magenta', 'white'];
var all_kleurenZW = [''];

var all_asps = ['16:9', '4:3', 'Cinemascope','16:9', '4:3', 'Cinemascope','16:9', '4:3', 'Cinemascope'];

var all_sauzen = ['Stroboscoop','Regen','Rook','Bojack Horseman intro','Greenscreen suits','Natural wipes','Turbulent displace','Snelle B-roll',
'Bubbels','Action cam','360 cam','Low shutterspeed','Vuur','Astera practical','Wind','Zaklamp practical','Prisma','miniDV selfie','Snijspot',
'Nightvision','glas voor lens'];

var all_forms = ['digitaal','digitaal','digitaal','digitaal','miniDV','8mm','16mm'];

var all_lichten = ['toplight','underlight','side light','backlight','meelicht'];

var all_lenzen = ['fisheye', 'wide', 'medium', 'long', 'tele','zoom'];
var all_lenzenGP = ['stock'];
var all_lenzenDV = ['stock'];

var all_kads = ['extreme wide', 'wide', 'medium wide', 'medium', 'medium close', 'close', 'extreme close','zoom'];

var all_shots = ['birdseye', 'frog perspective', 'dutch angle','leveled','leveled','leveled'];

var all_zooms = ['in', 'uit', 'niet','niet','niet','niet'];

var all_grips = ['tripod', 'handheld', 'shaky','handheld'];

var all_moves = ['omheen draaien','draaien','beweeg in','beweeg in','beweeg uit','beweeg uit','vast','vast','vast','vast','vast'];

var all_perfs = ['energiek', 'droog', 'geen','samen','boos','blij','serieus','half'];

var button = 0;

var all_effecten = ['triptych', 'diptych', 'lightleaks','random pictures','pictures on set','pictures BTS','speed up','slowmotion','glitches','fades','overlays',
'picture in picture','archival footage','digital zoom','karaoke text'];