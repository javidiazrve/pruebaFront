import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Episodio, Personaje } from 'src/interfaces';
import { catchError, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PersonajesService {

    private url = 'https://rickandmortyapi.com/api/';

    constructor(private http: HttpClient){
        console.log('servicio activo');
    }


    getPersonajes(){

        return new Promise((resolve,rejected) => {

            this.http.get(`${this.url}character`).subscribe(async (res: any) => {
                
                let personajes = await res.results.map((el: any) => {        
                  let personaje: Personaje = {
                    ...el,
                    origin: el.origin.name,
                    location: el.location.name,
                  };
                  return personaje;
                });
        
                resolve({
                    info: res.info,
                    personajes: personajes
                });
              
            },(error) => {
                rejected(true);
            });;
        })

    }

    getPage(pagina: number){

        return new Promise((resolve,rejected) => {
            this.http.get(`${this.url}character/?page=${pagina}`).subscribe((res:any) => {
                resolve(res);
            },(err) => {
                rejected(true);
            });
        })
    }

    getPersonaje(id: string){

        let personaje: Personaje;

        return new Promise((resolve,rejected) => {

            this.http.get(`${this.url}character/${id}`).subscribe((res: any) => {
    
                    this.getEpisodios(res.episode).subscribe((ep: any) => {

                        let episodes: Episodio[];
                        
                        episodes = ep.length == undefined? [ep] : ep as Episodio[];

                      personaje = {
                        id: res.id,
                        name: res.name,
                        status: res.status,
                        species: res.species,
                        gender: res.gender,
                        image: res.image,
                        location: res.location.name,
                        origin: res.origin.name,
                        type: res.type,
                        episodes: episodes,
                      }

                      resolve(personaje);
              
                    }, (error: any) => rejected(true));
            },(error: any)=> rejected(true));
        });


    };
        
    getEpisodios(episodios: string[]){
            
            let episodes = episodios.map((el: string) => {

                return el.split('/').pop();
                
            })
            
            return this.http.get(`${this.url}episode/${episodes}`);
    }
}