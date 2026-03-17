import conf from "../Conf/conf.js";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;
      
    constructor(){
        this.client
              .setEndpoint("https://sgp.cloud.appwrite.io/v1")
              .setProject("69a2c0100010a6a9e14c");
              this.databases = new Databases(this.client);
              this.bucket = new Storage(this.client);         
    }

    async createPost({title, slug, content, featuredImage,
        status, userId}){
           try {
                 return await this.databases.createDocument(
                    "69a2c1aa000e6777ae20",
                    "articles",
                    slug,
                    {
                        title,
                        content,
                        featuredImage,
                        status,
                        userId,
                    }
                 )
           } catch (error) {
                console.log("Appwrite service :: getCurrentuser :: error", error);
                
           }
    }
    async updatePost(slug, {title, content, featuredImage, status, userId}){
        try {
            return await this.databases.updateDocument(
                 "69a2c1aa000e6777ae20",
                    "articles",
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        } catch (error) {
            console.log("Appwrite service :: updatePost :: error", error);
            
            
        }
    }
    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                  "69a2c1aa000e6777ae20",
                    "articles",
                 slug  
                 
                ) 
                return true 
        } catch (error) {
            console.log("Appwrite service :: deletePost :: error", error);
            return false
        }
    }
    async getPost(slug){
        try {
            return await this.databases.getDocument(
                 "69a2c1aa000e6777ae20",
                    "articles",
                slug

            )
        } catch (error) {
            console.log("Appwrite service :: getPost :: error", error);
            
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(
                 "69a2c1aa000e6777ae20",
                    "articles",
                queries,
            )
            
        } catch (error) {
            console.log("appwrite service :: getPosts :: error", error);
            return false
            
        }
    }
    // file upload service 

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                "69a325160004c9f7adb8",
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite service :: uploadFile :: error", error);
            return false
        }
    }

    async deleteFile(fileId){
    try {
        await this.bucket.deleteFile(
            "69a325160004c9f7adb8",
            fileId
        )
        return true 
    } catch (error) {
        console.log("Appwrite service :: deleteFile :: error", error);
        return false
    }  
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            "69a325160004c9f7adb8",
            fileId
        )
    }
}


const service = new Service()
export default service
