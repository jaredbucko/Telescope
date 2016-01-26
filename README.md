# Telescope
An API for the sky.

Telescope provides access to information on over 15,000 stars, and all 88 constellations.

Of course there are many, many more stars in space, but Telescope only 
provides information for stars with a **magnitude of less than 7**.

### API
-----
 `/stars`
 
 Example Query: `/stars?limit=20&page=2&con=Ori&mag=3&magparam=gt`

#### Options
Query | Example | Explanation | Default
----|----|----|----
`limit`|`?limit=20`|Limit the number of stars in the response.| 50
`page`|`?page=2`|Define what page you want back.|1
`con`|`?con=Ori`|Filter the stars by their constellation.|All
`mag`|`?mag=3`|Filter the stars by their magnitude.|All
`magparam`|`?magparam=gt`|Changes how the mag query is interpreted.|lt
`search`|`?search=18Alp%20Cas`|Performs a text search| *none*
