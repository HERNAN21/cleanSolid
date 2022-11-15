import { JsonDataBaseServices, LocalDataBaseService, PostProvider } from "./05-dependency-c";

export interface Post {
    body:   string;
    id:     number;
    title:  string;
    userId: number;
}


export class PostService {

    private posts: Post[] = [];

    constructor(
        private postprovider: PostProvider
    ) {}

    async getPosts() {
        // const jsonDB = new LocalDataBaseService();
        // this.posts = await jsonDB.getFakePosts();
        // const jsonDB = new JsonDataBaseServices();
        this.posts = await this.postprovider.getPosts();

        return this.posts;
    }
}
