interface ImageType {
  png: string;
  webp: string;
}

export interface DestinationType {
  name: string;
  images: ImageType;
  description: string;
  distance: string;
  travel: string;
}

interface CrewType {
  name: string;
  images: ImageType;
  role: string;
  bio: string;
}

interface TechnologyType {
  name: string;
  images: ImageType;
  description: string;
}

export interface DisplayDataType {
  destinations: DestinationType[];
  crew: CrewType[];
  technology: TechnologyType[];
}
