const Queue = require('../queue/Queue')
const store = require('../../store')

// Set up initial data.
// --------------------

const pets = {
  cats: new Queue(),
  dogs: new Queue()
}

store.cats.forEach(cat => pets.cats.enqueue(cat))
store.dogs.forEach(dog => pets.dogs.enqueue(dog))

// --------------------

const Pets = {
  getCats() {
    // Return the cats next in line to be adopted.
    return pets.cats.all();
  },

  getDogs() {
    //REturn dogs next in line
    return pets.dogs.all();
  },

  dequeueCat(type) {
    // Remove a cat from the queue.
    pets.cats.dequeue()
  },

  dequeueDog(type) {
    // Remove a dog from the queue.
    pets.dogs.dequeue()
  }

}
module.exports = Pets
