# Telescope
An API for the sky.

Telescope provides access to information on over 15,000 stars, and all 88 constellations.

Of course there are many, many more stars in space, but Telescope only 
provides information for stars with a **magnitude of less than 7**.

### API
-----
 `/stars`

#### Options
`?limit=<number>`

This option will limit the number of stars in the response. 

Example: `http://telescope.io/stars?limit=20`

This would reply with the JSON for the first 20 stars.

Default: 50

`?page=<number>`

This option will define what page you want back.

Example: `http://telescope.io/stars?page=2`

This would reply with the JSON for the stars 51-100.

Example: `http://telescope.io/stars?limit=10&page=2`

This would reply with the JSON for the stars 11-20.

Default: 1

`?con=<string>`

This option allows you to filter the stars by their constellation. 

Example: `http://telescope.io/stars?con=And`

This would reply with the JSON for the first 50 stars in the Andromeda constellation.

`?mag=<number>`

This option allows you to filter the stars by their magnitude.

Example: `http://telescope.io/stars?mag=3`

This would reply with the JSON for the first 50 stars that contain a magnitude less than 3.

`?magparam=<string>`

This option will allow you to select how the magnitude option is interpreted.

There are two options, lt and gt, *less than* and *greater than* respectively. 

Example: `http://telescope.io/stars?mag=5&magparam=gt`

This would reply with the JSON for the first 50 stars that contain a magnitude gretter than 5.

Default: lt

`?search=<string>`

This option will allow you to perform a text query on the database. 

This is really only useful to find stars using their Bayer designation.

Example: `http://telescope.io/stars?search=18Alp%20Cas`

This would reply with the JSON for 18Alp Cas and perhaps a few other, less relative matches.


