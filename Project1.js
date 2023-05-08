class Hotel {
  constructor(address, numberOfRooms, minFloor, maxFloor, rooms) {
    this.address = address;
    this.numberOfRooms = numberOfRooms;
    this.#minFloor = minFloor;
    this.#maxFloor = maxFloor;
    this.rooms = rooms;
  }
  
  #minFloor;
  #maxFloor;
  
  printAdvertisement() {
    console.log(`Welcome to our hotel located at ${this.address}`);
    console.log(`We have ${this.numberOfRooms} rooms available for booking.`);
    console.log(`Our hotel is located between floors ${this.#minFloor} and ${this.#maxFloor}`);
    console.log(`To book a room, please visit our website or give us a call.`);
  }
  
  listBookedRooms() {
    const bookedRooms = this.rooms.filter(room => room.isBooked());
    console.log(`The following rooms have been booked:`);
    bookedRooms.forEach(room => console.log(`Floor ${room.floorNum}, Room ${room.roomNum}`));
  }
}

class Room {
  constructor(floorNum, roomNum, price, isBooked) {
    this.floorNum = floorNum;
    this.roomNum = roomNum;
    this.price = price;
    this.#isBooked = isBooked;
  }
  
  #isBooked;
  
  printRoom() {
    console.log(`Floor ${this.floorNum}, Room ${this.roomNum}`);
    console.log(`Price per night: ${this.price}`);
    console.log(`Status: ${this.#isBooked ? 'Booked' : 'Available'}`);
  }
  
  book() {
    this.#isBooked = true;
  }
  
  isBooked() {
    return this.#isBooked;
  }
}

class RoomWithView extends Room {
  constructor(floorNum, roomNum, price, isBooked, view, numberOfBeds) {
    super(floorNum, roomNum, price, isBooked);
    this.view = view;
    this.numberOfBeds = numberOfBeds;
  }
}

class SleepingRoom extends Room {
  constructor(floorNum, roomNum, price, isBooked, personCapacity) {
    super(floorNum, roomNum, price, isBooked);
    this.personCapacity = personCapacity;
  }
}
const room1 = new Room(1, "101", 100, false);
const room2 = new Room(1, "102", 80, true);
const room3 = new RoomWithView(2, "201", 150, false, "Ocean", 2);
const room4 = new SleepingRoom(2, "202", 120, false, 3);
const hotel = new Hotel("123 Main St", 4, 1, 2, [room1, room2, room3, room4]);

hotel.printAdvertisement(); 
room1.printRoom(); 
room2.printRoom(); 
room3.printRoom(); 
room3.book();
room3.printRoom();
room4.printRoom(); 
hotel.listBookedRooms(); 
