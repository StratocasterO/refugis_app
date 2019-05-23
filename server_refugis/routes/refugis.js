var express = require('express');
var router = express.Router();
var database = require('./refugis_db');

// http://localhost:3000/refugis/new?name=&description=&temp=&wind=&rain=&long=&lat=&rating=
router.get('/new', function(req, res, next) {
    const name = req.query.name;
    const description = req.query.description;
    const temp = req.query.temp;
    const wind = req.query.wind;
    const rain = req.query.rain;
    const long = req.query.long;
    const lat = req.query.lat;
    const rating = req.query.rating;

    database.query('INSERT INTO refugis SET ?,?,?,?,?,?,?,?',[{nombre:name},{descripcio:description},{wind:wind},{temp:temp},{rain:rain},{longitud:long},{latitud:lat},{rating:rating}], function(error,filas){
		if(error){            
			console.log('Se ha producido un error al escribir en la base de datos');
			return;
		};    
	});
	console.log("Se ha añadido una entrada a la base de datos");
	res.writeHead(200);
	res.end(); 
});

// http://localhost:3000/refugis/edit?name=&description=&temp=&wind=&rain=&long=&lat=&rating=&id=
router.get('/edit', function(req, res, next) {
    const name = req.query.name;
    const description = req.query.description;
    const temp = req.query.temp;
    const wind = req.query.wind;
    const rain = req.query.rain;
    const long = req.query.long;
    const lat = req.query.lat;
    const rating = req.query.rating;

    database.query('UPDATE refugis SET ?,?,?,?,?,?,?,? WHERE ?',[{nombre:name},{descripcio:description},{wind:wind},{temp:temp},{rain:rain},{longitud:long},{latitud:lat},{rating:rating},{id:id}], function(error,filas){
		if(error){            
			console.log('Se ha producido un error al escribir en la base de datos');
			return;
		};    
	});
	console.log("Se ha añadido una entrada a la base de datos");
	res.writeHead(200);
	res.end();
});

// http://localhost:3000/refugis/delete?id=
router.get('/delete', function(req, res, next) {
    const id = req.query.id;

    database.query('DELETE FROM refugis WHERE ?',{id:id}, function(error,filas){
		if(error){            
			console.log('Se ha producido un error al escribir en la base de datos');
			return;
		};    
	});
	console.log("Se ha borrado una entrada de la base de datos");
	res.writeHead(200);
	res.end(); 
});

// http://localhost:3000/refugis/comment?user=&comment=&rating=&id=
router.get('/comment', function(req, res, next) {
    const user = req.query.user;
    const comment = req.query.comment;
    const rating = req.query.rating;
    const id = req.query.id;

    database.query('INSERT INTO comments SET ?,?,?,?,?',[{user:user},{comment:comment},{rating:rating},{id:id}], function(error,filas){
		if(error){            
			console.log('Se ha producido un error al escribir en la base de datos');
			return;
		};    
	});
	console.log("Se ha añadido una entrada a la base de datos");
	res.writeHead(200);
	res.end();
});

// http://localhost:3000/refugis/fetch?id=
router.get('/fetch', function(req, res, next) {
    const id = req.query.id;

	database.query('SELECT * FROM refugis WHERE ?',{id:id}, function(error,filas){
		if(error){            
			console.log('Se ha producido un error al leer la base de datos');
			return;
        };    
        
        filas = JSON.stringify(filas);
        
        database.query('SELECT * FROM comments WHERE ?',{id:id}, function(error,filas2){
            if(error){            
                console.log('Se ha producido un error al leer la base de datos');
                return;
            };    

            filas2 = JSON.stringify(filas2);
        });

        const cont = {"refugi":filas,"comments":filas2}
        cont = JSON.stringify(cont);

		res.writeHead(200);
		res.write(cont);
		res.end(); 
	});
	console.log("Se ha consultado una entrada de la base de datos");
});

module.exports = router;