const db = require("../../models/index");

const sequelize = db.sequelize;

exports.findAllUserTicket = async () => {
  let [allUserTicket] = await sequelize.query(`
        SELECT 
            Users.id AS user_id, Users.email AS user_email, 
            Flights.id as flights_id, Flights.flightCode AS flight_code,
            Airlines.id as airline_id, Airlines.name AS airline_name, 
            departure_airport.city AS departure_city, departure_airport.country AS departure_country,
            arrival_airport.city AS arrival_city, arrival_airport.country AS arrival_country,
            Flights.departureAt AS departure_time,
            Seats.airlineClass AS airline_class, 
            CASE Seats.airlineClass 
                WHEN "ECONOMY" THEN Flights.priceEconomy
                WHEN "BUSINESS" THEN Flights.priceBussines
                WHEN "FIRST_CLASS" THEN Flights.priceFirstClass
            END AS price
        FROM HelperBookings
        INNER JOIN Bookings on Bookings.id = HelperBookings.bookingId
        INNER JOIN Users ON Users.id = Bookings.userId
        INNER JOIN Seats ON Seats.id = HelperBookings.seatId
        INNER JOIN Flights ON Flights.id = Seats.flightId
        INNER JOIN Airlines ON Airlines.id = Flights.airlineId
        INNER JOIN Airports AS departure_airport ON departure_airport.id = Flights.startAirportId
        INNER JOIN Airports AS arrival_airport ON arrival_airport.id = Flights.endAirportId
        ORDER BY HelperBookings.id DESC
        LIMIT 1000
    `);
  return allUserTicket;
};

exports.findAllUser = async () => {
  let [allUser] = await sequelize.query(`
        SELECT Flights.id, Flights.email FROM users
    `);
  return allUser;
};

exports.findAllAvailableTicket = async (limit, offset) => {
  let [allTicket] = await sequelize.query(`
        SELECT
            Flights.id as flights_id, Flights.flightCode AS flight_code,
            Airlines.id as airline_id, Airlines.name AS airline_name, 
            departure_airport.city AS departure_city, departure_airport.country AS departure_country,
            arrival_airport.city AS arrival_city, arrival_airport.country AS arrival_country,
            Flights.departureAt AS departure_time,
            Flights.capacityEconomy AS economy_capacity, Flights.priceEconomy AS economy_price,
            Flights.capacityBussines AS bussines_capacity, Flights.priceBussines AS bussines_price,
            Flights.capacityFirstClass AS first_class_capacity, Flights.priceFirstClass AS first_class_price,
            departure_airport.iataCode AS departure_iataCode,
            arrival_airport.iataCode AS arrival_iataCode,
            arrival_airport.picture AS picture,
            departure_airport.timezone AS departure_timezone
        FROM Flights
        INNER JOIN Airlines ON Airlines.id = Flights.airlineId
        INNER JOIN Airports AS departure_airport ON departure_airport.id = Flights.startAirportId
        INNER JOIN Airports AS arrival_airport ON arrival_airport.id = Flights.endAirportId
        WHERE (Flights.capacityEconomy > 0 OR Flights.capacityBussines > 0 OR Flights.capacityFirstClass > 0)
        AND Flights.departureAt >= NOW()
        ORDER BY Flights.id DESC
        LIMIT 1000
    `);

  return allTicket;
};

exports.findAllUser = async () => {
  let [allUser] = await sequelize.query(`
        SELECT Users.id, Users.email FROM Users
    `);

  return allUser;
};
