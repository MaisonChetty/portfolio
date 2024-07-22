export interface social{
    title: string,
    url: string,
}

export interface Technology{
    image:any;
    progress:number;
    title:string
}

export interface experience{
    title: string,
  technologies: Technology[],
  company:string,
  companyImage:any,
  points: string[],
  dateStarted:Date,
  dateEnded:Date,
  jobTitle:string
}

export interface skill{
    progress:string,
  image:any
} 

export interface pageInfo{
    backgroundInfo:string,
    profilePic:any

}