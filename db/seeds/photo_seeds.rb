#########
# PHOTOS
#########

captions = [
  "New toys for the holidays",
  "The game doesn't wait for anyone",
  "You're next",
  "the bees knees",
  "Candid AF",
  "nothing beats some good ole avocado egg toast",
  "Reminds me of the Brick Prison",
  "Woke up early to get this photo",
  "The go to spot",
  "The new new",
  "Achievement unlocked: AMNY Friday crossword puzzle",
  "Duomo, Milan!!! This place was beautiful... actually Milan in general was just a great place over #abroad",
  "Everyday, we hustlin",
  "Am I hipster yet?",
  "Just do it",
  "Defend the LAND",
  "Keep your head up!",
  "YUM!",
  "In the moment...",
  "Got me some new Jordans!",
  "I want these shoes...",
  "Flyknit Racers lookin' good. Just got a pair like these over the weekend.",
  "Sup?",
  "Never settle, #1. Keep hustlin, stay on the grind. 10% luck, 90% hard work",
  "Beautiful",
  "Can you tell crème is one of my favorite colors?",
  "Found this relic walking downtown today!",
  "*~NYC~*, lived here my whole life and still amazes me",
  "Reach for the stars",
  "hands down the best cookies on planet earth",
  "Waiting for his treat",
  "Down Under the Manhattan Bridge Overpass #DUMBO",
  "Tower Eifel, Paris",
  "Bougie brunchin #brunch",
  "😏",
  "Probably one of the prettiest things i've ever seen",
  "Hands up",
  "Sunday mornings",
  "the Hanji river",
  "never settle",
  "cool and scary at the same time 🔥👀",
  "views from the window seat",
  "USA USA USA USA USA",
  "home",
  "prepared a nice breakfast for my boyfriend and I today. 😏",
  "the old stomping grounds",
  "This the good stuff",
  "Got me feelin some kinda way",
  "stay floatin",
  "study sesh at The Local! Come out if you're in the area! #grind",
  "got myself some new succulents today! ❤️",
  "da boyz 🔥, rooftop chillin and grabbin some nice shots of the sunset",
  "it took me longer than I am willing to admit to set up this photo 😂 #thatlightingdoe",
  "👀 👀",
  "not sure how I feel about this one",
  "what're you looking at?",
  "my go to coffee 🔥",
  "autumn is upon us! 😊😊😊",
  "The new occulus down by the old WTC #beauty",
  "😑",
  "They got me... #applelife",
  "Rain rain, go away🌧️☂️🌧️☂️",
  "The Tube, 1am",
  "Bruh 😂😂😂 #burgers #letsgo #foodporn",
  "👀",
  "winners never quit ⭐",
  "❤️",
  "favorite time of year",
  "what am I doing here ... 😂",
  "bucket list: capilano bridge ✅ #vancouver #ahh",
  "🤘🏽🤘",
  "don't let the journey end",
  "A few of my favorites 😍",
  "❤️",
  "Don't mind if I do",
  "eat sleep ball repeat #life",
  "This photo was taken last year when I went to visit my cousin. One of the most beautiful places I've ever seen #tbt",
  "goodreads",
  "❤️",
  "this damn city never sleeps",
  "no filter 🔥",
  "the time my best friend and I borrowed a shopping cart and rode around town 😂😂😂",
  "😊",
  "take the road less traveled",
  "taken with my galaxy S8",
  "I spy",
  "low key feelin my outfit today 🔥🔥🔥"
]


Photo.destroy_all

PHOTO_IDS = []

(0..86).each do |num|
  new_photo = Photo.create!({
    author_id: USER_IDS.reject { |id| id == KELBY_ID }.sample,
    caption: captions[num],
    created_at: Faker::Time.backward(90, :all),
    image: File.open("app/assets/images/seeds/pxl#{num}.jpg")
    })

  PHOTO_IDS.push(new_photo.id)
end
