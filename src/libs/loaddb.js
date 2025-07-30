import { IDB } from "./indexeddb-promise";

export default async function loadDB(ctx){
    ctx.db = new IDB("audible",1,{
        books:{keyPath:"id"}
    })
    await ctx.db.open()
    ctx.books = ctx.db.getAll("books")
}