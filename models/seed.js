const db = require('./')


const newCars =
[
    {
        name: 'Nissan R34 Skyline',
        description: 'The legendary Skyline, first introduced in 1957, was originally built by Japan’s Prince Motor Company. Production of the Prince Skyline lasted from 1957 until 1966, when Prince and Nissan merged. With humble origins as a rather modest 4-door luxury car, the Skyline began to evolve into a performance-bred sportscar following the merger. Today the Skyline is most recognized as the influential predecessor to the modern GT-R.',
        img: 'http://www.stancenation.com/wp-content/uploads/2013/11/IMG_9838-6-copy.jpg',
        price: "250000"
    }, {
        name: 'Toyota Supra MK4',
        description: 'The legendary Mk4 Supra was propelled to fame by the immortal 2JZ engine. The Mk4 Supras immortality is due to the legendary 2JZ engine. This engine was over engineered to the point where it could produce over 1000 horsepower without requiring any internal modifications.',
        img: 'https://i.pinimg.com/originals/df/15/d1/df15d19ba4c9d6136afc8060a9d96a54.jpg',
        price: "125000",
    }, {
        name: 'Porsche GT3 RS',
        description: 'The new GT3 RS uses a similar 4.0-litre naturally aspirated flat-six engine as the GT3. New camshafts help it feel snappier at high revs (the redline doesnt curtail your fun until you hit 9,000rpm) and boost power from 510hp in the GT3 to 525hp in this RS model.',
        img: 'https://www.ccarprice.com/products/Porsche-911-GT3-RS-2019.png',
        price: "314000",
    }
]
  

const newLocations = [
    {
        road: "Pikes Peak",
        creator: 'Milad',
        location: 'CO, USA',
        description: "Clocking in at a magnificent 14,115 feet, Pikes Peak is one of the 53 mountains in Colorado that achieves a height of 14,000 feet+, offering it further bragging rights as one of the top 100 mountains in the United States.",
        difficulty: 'advanced',
        visited: 'Yes',
        img: 'http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcSAbQSo6qP3-m5XCy2x65Oa2WbMaNwcTjdm3881tGVQxOv8P_FiTt9KTEnlJvkhW5PF'

    }, {
        road: "Twin Peaks",
        creator: 'Mark',
        location: 'CA, USA',
        description: "At 922 feet in elevation, Twin Peaks is second only to Mt. Davidson in height, offers spectacular views of the Bay Area, and is a world-famous tourist attraction. Originally called “Los Pechos de la Choca” (Breasts of the Maiden) by early Spanish settlers, these two adjacent peaks provide postcard views and a treasure trove of animal and plant diversity. Most visitors to Twin Peaks drive (or take a tourist bus), walk or bike to the north peak parking lot to enjoy 180-degree views of the Bay Area.",
        difficulty: 'average',
        visited: 'No',
        img: 'https://www.inside-guide-to-san-francisco-tourism.com/images/twin-peaks-san-francisco-city-view.jpg'

    }, {
        road: "Highway 1",
        creator: 'Bryan',
        location: 'CA, USA',
        description: "Travel the route that hugs the California coast, providing access to austere, windswept cypress trees, fog-shrouded cliffs and the crashing surf of the Pacific Ocean. Views include rugged canyons, towering redwoods, sea lions, and other marine life.",
        difficulty: 'advanced',
        visited: 'Yes',
        img: 'https://content.fortune.com/wp-content/uploads/2016/05/bla06_a.jpg?w=1440&q=75'

    }
]


db.Car.deleteMany({}, (err,cars) => {
    if(err) {
        console.log('Error occured in remove', err)
    } else {
        console.log('Removed all cars')
        
        db.Car.insertMany(newCars, (err, cars) => {
            if(err) {
                console.log('Error occured inserting', err)
            } else {
                console.log('Created', cars.length, "cars")
                process.exit()
            }
        })
    }
})

db.Locations.deleteMany({}, (err, Locations) => {
    if (err) {
        console.log('Error occured in remove', err)
    } else {
        console.log('Removed all locations')

        db.Locations.insertMany(newLocations, (err, Locations) => {
            if (err) {
                console.log('Error occured in insertMany', err)
            } else {
                console.log('Created', Locations.length, "locations")
            }
        })
    }
})
