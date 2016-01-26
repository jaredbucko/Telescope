# Telescope
An API for the sky.

Telescope provides access to information on over 15,000 stars, and all 88 constellations.

Of course there are many, many more stars in space, but Telescope only 
provides information for stars with a **magnitude of less than 7**.

### API
-----
#### `/stars`

A `GET` request to this endpoint will return JSON defining stars. Here is an example: 
```javascript
{
"count": 15588, // A count of stars that match this query in the database
"stars": {
	"32263": { 
	    "id": 32263, // The star's ID in David's HYG database.
	    "bf": "9Alp CMa", // The Bayer/Flamsteed designation, if known. 
	    "hd": 48915, // The star's ID in the Henry Draper catalog, if known.
	    "con": "CMa", // The star's constellation.
	    "dec": -16.716116, // The star's declination.
	    "ra": 6.752481, // The star's right ascension.
	    "dist": 2.6371, // The star's distance from Earth in light years.
	    "incon": true, // True if star is in the star set representating its constellation.
	    "mag": -1.44, // The star's apparent visual magnitude.
	    "proper": "Sirius", // The star's common name, if known.
	}
}
}
```

 
Example Query: `/stars?limit=20&page=2&con=Ori&mag=3&magparam=gt` 
*(This will return JSON for stars 11-20 in the constellation of Orion that have a magnitude greater than 3)*

*(Stars are ordered by magnitude in ascending order)*

#### Options
Query | Example | Explanation | Default
----|----|----|----
`limit`|`?limit=20`|Limit the number of stars in the response.| 50
`page`|`?page=2`|Define what page you want back.|1
`con`|`?con=Ori`|Filter the stars by their constellation.|All
`mag`|`?mag=3`|Filter the stars by their magnitude.|All
`magparam`|`?magparam=gt`|Changes how the mag query is interpreted.|lt
`search`|`?search=18Alp%20Cas`|Performs a text search.| *none*
-----
#### `/constellations`
 
Example Query: `/constellations?con=Tau`
*(This will return JSON for the constellation of Taurus)*

#### Options
Query | Example | Explanation | Default
----|----|----|----
`con`|`?con=Tau`|Select a single constellation|*none*

*(?con takes a constellation abbreviation, (here is a good list of them)[https://en.wikipedia.org/wiki/88_modern_constellations])*