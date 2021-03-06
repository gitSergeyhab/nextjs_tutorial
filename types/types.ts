export interface Geo {
    lat: string;
    lng: string;
}

export interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}

export interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

export interface UserType {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}

export interface PostType {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface ProductType {
    id: number;
    title: string;
    price: number;
    description: string;
}

export interface NewsType {
    id: number;
    title: string;
    category: string;
    description: string;
}

export interface DashboardType {
    posts: number;
    likes: number;
    followers: number;
    following: number;
}

export interface EventType extends NewsType {
    date: string;
}

export interface CommentType {
    id: string;
    comment: string;
}
