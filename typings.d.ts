interface SanityBody{
    _createdAt:string,
    _id: string,
    _rev: string,
    _updatedAt: string,
}

interface Image {
    _type: "image"
    asset:{
        ref:string,
        _type: "refrence"
    }
}

export interface PageInfo extends SanityBody{
    _type: "pageInfo",
    address: string,
    backgroundInformation: string,
    email: string;
    role: string;
    heroImage: Image;
    name:string;
    phoneNumber: string;
    profilePic: Image;
}

export interface Technology extends SanityBody{
    _type: "skill",
    title: string,
    progrees: number,
    image: Image,
}

export interface Skill extends SanityBody{
    _type: "skill",
    title: string,
    progrees: number,
    image: Image,
}


export interface Experience extends SanityBody{
    _type: "experience",
    company: string,
    companyImage: Image,
    dateStarted:date,
    dateEnded:date,
    isCurrentlyWorkingHere: boolean,
    jobTitle: string,
    points: string[],
    technologies: Technology[],
}

export interface Project extends SanityBody{
    _type: "project",
    title: string,
    image: Image,
    linkToBuild:string,
    technologies: Technology[],
}

export interface Social extends SanityBody{
    _type: "social",
    title: string,
    url: string,
}