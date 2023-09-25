interface ImageType {
  png: string;
  webp: string;
}
interface TechnologyImageType {
  portrait: string;
  landscape: string;
}
export interface DestinationType {
  name: string;
  images: ImageType;
  description: string;
  distance: string;
  travel: string;
}

export interface CrewType {
  name: string;
  images: ImageType;
  role: string;
  bio: string;
}

export interface TechnologyType {
  name: string;
  images: TechnologyImageType;
  description: string;
}

export interface DisplayDataType {
  destinations: DestinationType[];
  crew: CrewType[];
  technology: TechnologyType[];
}
