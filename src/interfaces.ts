export interface Personaje {

    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: string;
    location: string;
    image: string;
    episodes: Episodio[];

}

export interface Episodio{

    name: string,
    episode: string,
    air_date: string,

}

export interface Info{
    next: string,
    prev: string,
    count: number,
    pages: number,
}

export interface User{
    email: string,
    password: string,
}