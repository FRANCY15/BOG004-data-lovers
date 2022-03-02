import { filtrarPeliculas, organizarPeliculasAZ, peliculasxAño  } from '../src/data.js';

let muestraPeliculas = [
{"title": "Castle in the Sky",
  "release_date": "1986",
},
{ "title": "My Neighbor Totoro",
  "release_date": "1988",
},
{ "title": "Kiki's Delivery Service",
  "release_date": "1989",
},
{ "title": "Grave of the Fireflies",
  "release_date": "1988",
},
{ "title": "Only Yesterday",
  "release_date": "1991",
},
{"title": "Castle in the Sky",
  "release_date": "1986",
},
];

let resultadosPeliculas = [
    { "title": "My Neighbor Totoro",
    "release_date": "1988",
  },
];

describe('filtrarPeliculas', () => {
  it('is a function', () => {
    expect(typeof filtrarPeliculas).toBe('function');
  });

  it('returns `filtrarPeliculas`', () => {
    expect(filtrarPeliculas(muestraPeliculas, 'totoro')).toEqual(resultadosPeliculas);
  });
  
});

describe('organizarPeliculasAZ', () => {
  it('is a function', () => {
    expect(typeof organizarPeliculasAZ).toBe('function');
  });

  it('returns `organizarPeliculasAZ`', () => {
    const result = organizarPeliculasAZ(muestraPeliculas);
    expect(result[0].title).toEqual('Castle in the Sky');
  });
});

describe('peliculasxAño', () => {
  it('is a function', () => {
    expect(typeof peliculasxAño).toBe('function');
  });

  it('returns `peliculasxAño`', () => {
    const resultadoxAño = peliculasxAño(muestraPeliculas);
    expect(resultadoxAño[5].release_date).toEqual('1991');
  });
});



