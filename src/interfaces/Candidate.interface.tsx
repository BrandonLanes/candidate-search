// TODO: Create an interface for the Candidate objects returned by the API
export interface Candidate {
    id: number | null;
    login: string | null;
    name: string | null;
    username: string | null;
    location: string | null;
    avatar: string | null;
    email: string | null;
    html_url: string | null;
    company: string | null;
}