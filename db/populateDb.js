const { Client } = require('pg');

const SQL = `
    CREATE TABLE IF NOT EXISTS brands (
        brand_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        name VARCHAR(50) NOT NULL,
        description TEXT,
        origin VARCHAR(50)
    );

    CREATE TABLE IF NOT EXISTS category (
        category_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        name VARCHAR(50) NOT NULL,
        description TEXT
    );

    CREATE TABLE IF NOT EXISTS status (
        status_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        name VARCHAR(50) NOT NULL
    );

    CREATE TABLE IF NOT EXISTS bikes (
        bike_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        model_name VARCHAR(50) NOT NULL,
        model_year INTEGER,
        color VARCHAR(50),
        brand_id INTEGER NOT NULL REFERENCES brand(brand_id),
        category_id INTEGER NOT NULL REFERENCES category(category_id),
        status_id INTEGER NOT NULL REFERENCES status(status_id) DEFAULT 1
    );

    INSERT INTO brands (name, description, origin)
    VALUES
        ('Giant', 'Giant Manufacturing Co. Ltd. (commonly known as Giant) is a Taiwanese bicycle manufacturer, recognized as the world's largest bicycle designer and manufacturer.', 'Taiwan'),
        ('Cannondale', 'Cannondale Bicycle Corporation is an American division of Dutch conglomerate Pon Holdings that supplies bicycles and electric bicycles.', 'USA'),
        ('Specialized', 'Specialized Bicycle Components, Inc., colloquially known as and stylized as SPECIALIZED, is an American company that designs, manufactures and markets bicycles, bicycle components and related products under the brand name "Specialized", the premium and professional oriented "S-Works" badge, and high end components represented by the "Roval" name.', 'USA');

    INSERT INTO category (name, description)
    VALUES
        ('Road Bike', 'The term road bicycle is used to describe bicycles built for traveling at speed on paved roads.'),
        ('Mountain Bike', 'A mountain bike (MTB)[1] or mountain bicycle is a bicycle designed for off-road cycling (mountain biking). Mountain bikes share some similarities with other bicycles, but incorporate features designed to enhance durability and performance in rough terrain, which often makes them heavier, more complex and less efficient on smooth surfaces.'),
        ('Gravel Bike', 'A gravel bicycle is a type of bicycle intended for gravel cycling, including gravel racing.[1] They are also sometimes known as "adventure bicycles", particularly ones intended for harsher off-road terrain.');
`;