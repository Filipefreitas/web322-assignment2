//an object literal
const fakeDB = 
{
    //a property. An array of products
    products :
    [
        {
            id: 1
            , title: "Into the Wild"
            , gender: "Adventure, Biography, Drama"
            , year: "2007"
            , categoryId: 1
            , category: "Movie"
            , src: "poster_into_the_wild.jpg"
            , alt: "poster of the movie into the wild"
            , backImg: "background_into_the_wild.jpg"
            , director: "Sean Penn"
            , creators: ""
            , writers: "Sean Penn (screenplay), Jon Krakauer (book)"
            , stars: "Stars: Emile Hirsch, Vince Vaughn, Catherine Keener"
            , rating: "Rating: 10/10"
            , description: "After graduating from Emory University, top student and athlete Christopher McCandless abandons his possessions, gives his entire $24,000 savings account to charity and hitchhikes to Alaska to live in the wilderness. Along the way, Christopher encounters a series of characters that shape his life"
            , trailer: "https://www.youtube.com/embed/XZG1FzyB8DI"
            , rentPrice: 3.99
            , purchasePrice: 4.99
            , featured: "Y"
            , favorite: "N"
        }
        
        , {
            id: 2
            , title: "Knives Out"
            , gender: "Comedy, Crime, Drama"
            , year: "2019"
            , categoryId: 1
            , category: "Movie"
            , src: "poster_knives_out.jpg"
            , alt: "poster of the movie knives out"
            , backImg: "background_knives_out.jpg"
            , director: "Rian Johnson"
            , creators: ""
            , writers: "Rian Johnson"
            , stars: "Daniel Craig, Chris Evans, Ana de Armas"
            , rating: "10/10"
            , description: "A detective investigates the death of a patriarch of an eccentric, combative family."
            , trailer: "https://www.youtube.com/embed/sL-9Khv7wa4"
            , rentPrice: 3.99
            , purchasePrice: 4.99
            , featured: "Y"
            , favorite: "N"
        }
        
        , {
            id: 3
            , title: "Toy Story 4"
            , gender: " Animation, Adventure, Comedy"
            , year: "2019"
            , categoryId: 1
            , category: "Movie"
            , src: "poster_toy_story_4.jpg"
            , alt: "poster of the toy story 4"
            , backImg: "background_toy_story_4.jpg"
            , director: "Josh Cooley"
            , creators: ""
            , writers: "John Lasseter (original story by), Andrew Stanton (original story by)"
            , stars: "Stars: Tom Hanks, Tim Allen, Annie Potts"
            , rating: "10/10"
            , description: 'When a new toy called "Forky" joins Woody and the gang, a road trip alongside old and new friends reveals how big the world can be for a toy.'
            , trailer: "https://www.youtube.com/embed/wmiIUN-7qhE"
            , rentPrice: 3.99
            , purchasePrice: 4.99
            , featured: "Y"
            , favorite: "N"
        }
        
        , {
            id: 4
            , title: "Gran Torino"
            , gender: "Drama"
            , year: "2008"
            , categoryId: 1
            , category: "Movie"
            , src: "poster_gran_torino.jpg"
            , alt: "poster of the movie gran torino"
            , backImg: "background_gran_torino.png"
            , director: "Clint Eastwood"
            , creators: ""
            , writers: "Nick Schenk (screenplay), Dave Johannson (story)"
            , stars: "Clint Eastwood, Bee Vang, Christopher Carley"
            , rating: "10/10"
            , description: "Disgruntled Korean War veteran Walt Kowalski sets out to reform his neighbor, Thao Lor, a Hmong teenager who tried to steal Kowalski's prized possession: a 1972 Gran Torino."
            , trailer: "https://www.youtube.com/embed/RMhbr2XQblk"
            , rentPrice: 3.99
            , purchasePrice: 4.99
            , featured: "Y"
            , favorite: "N"
        }
        
        , {
            id: 5
            , title: "Bohemian Rhapsody"
            , gender: " Biography, Drama, Music"
            , year: "2018"
            , categoryId: 1
            , category: "Movie"
            , src: "poster_bohemian_rhapsody.jpg"
            , alt: "poster of the movie bohemian rhapsody"
            , backImg: "background_bohemian_rhapsody.jpg"
            , director: "Bryan Singer"
            , creators: ""
            , writers: "Anthony McCarten (story by), Peter Morgan (story by)"
            , stars: "Rami Malek, Lucy Boynton, Gwilym Lee"
            , rating: "10/10"
            , description: "The story of the legendary British rock band Queen and lead singer Freddie Mercury, leading up to their famous performance at Live Aid (1985)."
            , trailer: "https://www.youtube.com/embed/6S9c5nnDd_s"
            , rentPrice: 4.99
            , purchasePrice: 5.99
            , featured: "N"
            , favorite: "Y"
        }
        
        , {
            id: 6
            , title: "Get Out!"
            , gender: "Horror, Mystery, Thriller"
            , year: "2017"
            , categoryId: 1
            , category: "Movie"
            , src: "poster_get_out.jpg"
            , backImg: "background_get_out.jpg"
            , director: "Jordan Peele"
            , creators: ""
            , writers: "Jordan Peele"
            , stars: "Daniel Kaluuya, Allison Williams, Bradley Whitford"
            , rating: "10/10"
            , description: "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point."
            , trailer: "https://www.youtube.com/embed/DzfpyUB60YY"
            , rentPrice: 4.99
            , purchasePrice: 5.99
            , featured: "N"
            , favorite: "Y"
        }
        
        , {
            id: 7
            , title: "The Wolf of Wall Street"
            , gender: " Biography, Crime, Drama"
            , year: "2013"
            , categoryId: 1
            , category: "Movie"
            , src: "poster_the_wolf_of_wall_street.jpg"
            , alt: "poster of the movie the wolf of wall street"
            , backImg: "background_the_wolf_of_wall_street.jpg"
            , director: "Martin Scorsese"
            , creators: ""
            , writers: "Terence Winter (screenplay), Jordan Belfort (book)"
            , stars: "Leonardo DiCaprio, Jonah Hill, Margot Robbie"
            , rating: "10/10"
            , description: "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government."
            , trailer: "https://www.youtube.com/embed/iszwuX1AK6A"
            , rentPrice: 3.99
            , purchasePrice: 4.59
            , featured: "N"
            , favorite: "Y"
        }    
       
        , {
            id: 8
            , title: "Wonder Woman"
            , gender: "Action, Adventure, Fantasy"
            , year: "2007"
            , categoryId: 1
            , category: "Movie"
            , src: "poster_wonder_woman.jpg"
            , alt: "poster of the movie wonder woman"
            , backImg: "background_wonder_woman.jpg"
            , director: "Patty Jenkins"
            , creators: ""
            , writers: "Writers: Allan Heinberg (screenplay by), Zack Snyder (story by)"
            , stars: "Stars: Gal Gadot, Chris Pine, Robin Wright"
            , rating: "10/10"
            , description: "When a pilot crashes and tells of conflict in the outside world, Diana, an Amazonian warrior in training, leaves home to fight a war, discovering her full powers and true destiny."
            , trailer: "https://www.youtube.com/embed/1Q8fG0TtVAY"
            , rentPrice: 3.99
            , purchasePrice: 4.59
            , featured: "N"
            , favorite: "Y"
        }

        , {
            id: 9
            , title: "Prison Break"
            , gender: "Action, Crime, Drama"
            , year: "2005-2017"
            , categoryId: 2
            , category: "TV-Serie"
            , src: "poster_prison_break.jpg"
            , alt: "poster of prison break"
            , backImg: "background_prison_break.jpg"
            , director: ""
            , creators: " Paul T. Scheuring"
            , writers: ""
            , stars: "Dominic Purcell, Wentworth Miller, Amaury Nolasco"
            , rating: "10/10"
            , description: "Due to a political conspiracy, an innocent man is sent to death row and his only hope is his brother, who makes it his mission to deliberately get himself sent to the same prison in order to break the both of them out, from the inside."
            , trailer: "https://www.youtube.com/embed/der8A7Z9u7c"
            , rentPrice: 3.99
            , purchasePrice: 4.59
            , featured: "Y"
            , favorite: "N"
        }

        , {
            id: 10
            , title: "How I Met Your Mother"
            , gender: "Comedy, Romance"
            , year: "2005-2014"
            , categoryId: 2
            , category: "TV-Serie"
            , src: "poster_how_i_met_your_mother.jpg"
            , alt: "poster of how i met your mother"
            , backImg: "background_himym.jpg"
            , director: ""
            , creators: "Carter Bays, Craig Thomas"
            , writers: ""
            , stars: "Josh Radnor, Jason Segel, Cobie Smulders"
            , rating: "10/10"
            , description: "A father recounts to his children - through a series of flashbacks - the journey he and his four best friends took leading up to him meeting their mother."
            , trailer: "https://www.youtube.com/embed/p09jkpmapKs"
            , rentPrice: 3.99
            , purchasePrice: 4.59
            , featured: "Y"
            , favorite: "N"
        }

        , {
            id: 11
            , title: "Friends"
            , gender: "Comedy, Romance"
            , year: "1994-2004"
            , categoryId: 2
            , category: "TV-Serie"
            , src: "poster_friends.jpg"
            , alt: "poster of friends"
            , backImg: "background_friends.jpg"
            , director: ""
            , creators: "David Crane, Marta Kauffman"
            , writers: ""
            , stars: "Jennifer Aniston, Courteney Cox, Lisa Kudrow"
            , rating: "10/10"
            , description: "Follows the personal and professional lives of six twenty to thirty-something-year-old friends living in Manhattan."
            , trailer: "https://www.youtube.com/embed/ekYGfU0XIx0"
            , rentPrice: 3.99
            , purchasePrice: 4.59
            , featured: "Y"
            , favorite: "N"
        }

        , {
            id: 12
            , title: "The Fresh Prince of Bel Air"
            , gender: "Comedy"
            , year: "1990-1996"
            , categoryId: 2
            , category: "TV-Serie"
            , src: "poster_the_fresh_prince_of_bel_air.jpg"
            , alt: "poster of the fresh prince of bel air"
            , backImg: "background_fpoba.jpg"
            , director: ""
            , creators: "Andy Borowitz, Susan Borowitz"
            , writers: ""
            , stars: "Will Smith, James Avery, Alfonso Ribeiro"
            , rating: "10/10"
            , description: "A streetwise, poor young man from Philadelphia is sent by his mother to live with his aunt, uncle and cousins in their Bel-Air mansion."
            , trailer: "https://www.youtube.com/embed/_u6vYpbfCmQ"
            , rentPrice: 3.99
            , purchasePrice: 4.59
            , featured: "Y"
            , favorite: "N"
        }

        , {
            id: 13
            , title: "Cosmos: A Spacetime Odyssey"
            , gender: "Documentary"
            , year: "2014"
            , categoryId: 2
            , category: "TV-Serie"
            , src: "poster_cosmos.jpg"
            , alt: "poster of cosmos"
            , backImg: "background_cosmos.jpg"
            , director: ""
            , creators: ""
            , writers: "" 
            , stars: "Neil deGrasse Tyson, Stoney Emshwiller, Piotr Michael"
            , rating: "10/10"
            , description: "An exploration of our discovery of the laws of nature and coordinates in space and time."
            , trailer: "https://www.youtube.com/embed/_erVOAbz420"
            , rentPrice: 3.99
            , purchasePrice: 4.59
            , featured: "Y"
            , favorite: "N"
        }

        , {
            id: 14
            , title: "Breaking Bad"
            , gender: "Crime, Drama, Thriller"
            , year: "2008-2013"
            , categoryId: 2
            , category: "TV-Serie"
            , src: "poster_breaking_bad.jpg"
            , alt: "poster of breaking bad"
            , backImg: "background_breaking_bad.jpg"
            , director: ""
            , creatros: "Vince Gilligan"
            , writers: ""
            , stars: " Bryan Cranston, Aaron Paul, Anna Gunn"
            , rating: "10/10"
            , description: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future."
            , trailer: "https://www.youtube.com/embed/ceqOTZnhgY8"
            , rentPrice: 3.99
            , purchasePrice: 4.59
            , featured: "Y"
            , favorite: "N"
        }

        , {
            id: 15
            , title: "A Star is Born"
            , gender: "Drama, Music, Romance"
            , year: "2018"
            , categoryId: 1
            , category: "Movie"
            , src: "poster_a_star_is_born.jpg"
            , alt: "poster of a star is born"
            , backImg: "background_a_star_is_born.jpg"
            , backImg: "background_a_star_is_born.jpg"
            , director: "Bradley Cooper"
            , creators: ""
            , writers: "Eric Roth (screenplay by), Bradley Cooper (screenplay by)"
            , stars: "Lady Gaga, Bradley Cooper, Sam Elliott"
            , rating: "10/10"
            , description: "A musician helps a young singer find fame as age and alcoholism send his own career into a downward spiral."
            , trailer: "https://www.youtube.com/embed/nSbzyEJ8X9E"
            , rentPrice: 3.99
            , purchasePrice: 4.59
            , featured: "Y"
            , favorite: "N"
        }

        , {
            id: 16
            , title: "Elite Squad 2: The Enemy Within"
            , gender: "Action, Crime, Drama"
            , year: "2010"
            , categoryId: 1
            , category: "Movie"
            , src: "poster_elite_squad_2.jpg"
            , alt: "poster of elite squad 2"
            , backImg: "background_elite_squad_2.jpg"
            , director: "José Padilha"
            , creators: ""
            , writers: "Bráulio Mantovani (screenplay), Bráulio Mantovani (story)"
            , stars: "Wagner Moura, Irandhir Santos, André Ramiro"
            , rating: "10/10"
            , description: "After a prison riot, former-Captain Nascimento, now a high ranking security officer in Rio de Janeiro, is swept into a bloody political dispute that involves government officials and paramilitary groups."
            , trailer: "https://www.youtube.com/embed/_gnJB10WTpE"
            , rentPrice: 3.99
            , purchasePrice: 4.59
            , featured: "Y"
            , favorite: "N"
        }

        , {
            id: 17
            , title: "Ralph Breaks the Internet"
            , gender: "Animation, Adventure, Comedy "
            , year: "2018"
            , categoryId: 1
            , category: "Movie"
            , src: "poster_ralph_breaks_the_internet.jpg"
            , alt: "poster of ralph breaks the internet"
            , backImg: "background_ralph_breaks_the_internet.jpg"
            , director: "Phil Johnston, Rich Moore"
            , creators: ""
            , writers: "Phil Johnston (screenplay by), Pamela Ribon (screenplay by)"
            , stars: "John C. Reilly, Sarah Silverman, Gal Gadot"
            , rating: "10/10"
            , description: "Six years after the events of 'Wreck-It Ralph', Ralph and Vanellope, now friends, discover a wi-fi router in their arcade, leading them into a new adventure."
            , trailer: "https://www.youtube.com/embed/_BcYBFC6zfY"
            , rentPrice: 3.79
            , purchasePrice: 5.49
            , featured: "N"
            , favorite: "Y"
        }

        , {
            id: 18
            , title: "Joker"
            , gender: "Crime, Drama, Thriller"
            , year: "2019"
            , categoryId: 1
            , category: "Movie"
            , src: "poster_joker.jpg"
            , backImg: "background_joker.jpg"
            , alt: ""
            , director: "Todd Phillips"
            , creators: ""
            , writers: "Todd Phillips, Scott Silver"
            , stars: "Joaquin Phoenix, Robert De Niro, Zazie Beetz"
            , rating: "10/10"
            , description: "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker."
            , trailer: "https://www.youtube.com/embed/zAGVQLHvwOY"
            , rentPrice: 3.79
            , purchasePrice: 5.49
            , featured: "N"
            , favorite: "Y"
        }
    ],
    
    /*
    getAllProducts()
    {
        return this.products;
    },

    getaProduct(id)
    {
        const product = this.products.find((product)=>{
            return product.id == id;
        })
        return product;
    },

    getFeaturedMovies()
    {
        const featuredMovies = this.products.filter(product=>(product.categoryId == 1 && product.featured == "Y"));
        return featuredMovies;
    },

    getFeaturedSerie()
    {
        const featuredMovies = this.products.filter(product=>(product.categoryId == 2 && product.featured == "Y"));
        return featuredMovies;
    },

    getFavoriteMovies()
    {
        const featuredMovies = this.products.filter(product=>(product.favorite == "Y"));
        return featuredMovies;
    },

    getTitle(id)
    {
        const product = this.products.find((product)=>{
            return product.id == id;
        })
        return product.title;
    }
    */
}
module.exports=fakeDB;