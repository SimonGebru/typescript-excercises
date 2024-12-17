export type Trip = {
    destination: string,
    departureDate: string | number,
    returnDate: string | number
}

export type House = {
    address: string,
    rooms: number,
    price: number
}

export type Game = {
    title: string,
    platform: string,
    genre: string
}

export type Music={
    title: string,
    artist: string,
    numberOfTracks: number
}

export type Restaurant={
    name:string,
    address: string,
    menu: object
}

export type MovieCharacter={
    name: string,
    actor: string,
    movie: string
}

export type Teacher={
    name: string,
    subject: string,
    classroom: string | number
}

export type Library={
    name: string,
    location: string,
    numberOfBooks: number
}


export type Conference={
    name: string,
    date: string | number,
    participants: object
}

export type Weather={
    date: string | number,
    temperature: number,
    precipitation: string
}
