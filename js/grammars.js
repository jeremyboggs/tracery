/**
 * @author Jeremy Boggs
 */

var grammars = {
    diddle : {
        subject : [
            "Hanky Panky",
            "Tom and Jerry",
            "Lord Voldemort",
            "Robert Pattinson",
            "Professor Kirschenbaum",
            "Twilight cast",
            "Fall Out Boy",
            "Homestar Runner",
            "Kardashians",
            "Modern Languages Association",
            "UVA Honor Committee"
        ],
        noun : [
            "bot",
            "coffee mug",
            "trampoline",
            "fence",
            "lizard",
            "protractor",
            "glass"
        ],
        noun2 : [
            "computer",
            "book",
            "window",
            "watch",
            "clown",
            "rule",
            "cooperage",
            "box",
            "Instructor",
            "power point slide",
            "robot"
        ],
        verb : [
            "jumped",
            "played",
            "melted",
            "ran",
            "tripped",
            "frowned",
            "chuckled"],
        adjective: [
            "sticky",
            "pointy",
            "large",
            "old",
            "frozen",
            "sibilant",
            "loquacious",
            "defenstratory",
            "burnt",
            "haughty",
            "glowing",
            "smug",
            "rancid",
            "obsequious"
        ],
        verbPast : [
            "chuffed",
            "sighed",
            "smiled",
            "frowned",
            "vomited",
            "slunk",
            "bailed",
            "edited",
            "despoiled",
            "cooked",
            "ate",
            "left no crumbs"
        ],
        origin : [
             "<h1>Hey #subject#</h1>"
           + "<p>Hey #subject#<br>"
           + "the #noun# and the #noun2#<br>"
           + "the #noun# #verb# the #noun#<br>"
           + "the #adjective# #noun2# #verbPast# to #verb# such #noun2#<br>"
           + "and the #noun# #verb# the #noun2#"
        ]
    }
}