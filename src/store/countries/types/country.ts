export interface CountryName {
    common: string,
    official: string,
}

export interface CountryFlag {
    png: string,
    alt: string,
}

export interface CountryCoatOfArms {
    png: string;
}

export interface Country {
    name: CountryName,
    capital: string[],
    flags: CountryFlag,
    populations: string | number,
    coatOfArms: CountryCoatOfArms,
}