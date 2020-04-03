CREATE TABLE IF NOT EXISTS people (
   id integer PRIMARY KEY,
   name text
);

CREATE TABLE IF NOT EXISTS vehicle (
   id integer PRIMARY KEY,
   name text
);

CREATE TABLE IF NOT EXISTS pet (
   id integer PRIMARY KEY,
   name text
);

CREATE TABLE IF NOT EXISTS people_vehicle (
  people_id integer NOT NULL REFERENCES people(id),
  vehicle_id integer NOT NULL REFERENCES vehicle(id)
);

CREATE TABLE IF NOT EXISTS people_pet (
  people_id integer NOT NULL REFERENCES people(id),
  pet_id integer NOT NULL REFERENCES pet(id)
);

INSERT INTO people VALUES (1, 'John');
INSERT INTO people VALUES (2, 'Mary');
INSERT INTO people VALUES (3, 'Chen');

INSERT INTO vehicle VALUES (1, 'Truck');
INSERT INTO vehicle VALUES (2, 'Car');
INSERT INTO vehicle VALUES (3, 'Bike');

INSERT INTO pet VALUES (1, 'Dog');
INSERT INTO pet VALUES (2, 'Cat');
INSERT INTO pet VALUES (3, 'Parrot');

-- Mary has a truck
INSERT INTO people_vehicle VALUES (2, 1); 

-- John has 2 cars and 2 trucks
INSERT INTO people_vehicle VALUES (1, 2); 
INSERT INTO people_vehicle VALUES (1, 2); 
INSERT INTO people_vehicle VALUES (1, 1); 
INSERT INTO people_vehicle VALUES (1, 1); 

-- John has a dog
INSERT INTO people_pet VALUES (1, 1); 
-- Chen has a parrot and cat
INSERT INTO people_pet VALUES (3, 2); 
INSERT INTO people_pet VALUES (3, 3); 
