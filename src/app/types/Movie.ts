export type Movies = {
  data: Movie[];
};

export type Movie = {
  id: string;
  title: string;
  description: string;
  yearLaunched: number;
  opened: boolean;
  duration: number;
  categories: string[];
  castMembers: string[];
  thumbFileURL: string;
  bannerFileURL: string;
  bannerHalfFileURL: string;
  trailerFileURL: string;
  videoFileURL: string;
  createdAt: Date;
  updatedAt: Date;
};