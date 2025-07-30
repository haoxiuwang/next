export function set(key,val) {
  localStorage.setItem(key,typeof(val)=='object'?JSON.stringify(val):val)
}
export function get(keys) {
  return keys.reduce((last,key)=>{
    const val = localStorage.getItem(key)
    try {
      last[key] = JSON.parse(val)
    } catch (e) {
      last[key] = val
    } finally {
      return last
    }
  },{})
}
export default function loadStorage(ctx) {
  let local = get(["last","freed"])
  ctx.last = local.last
  if(local.freed)
  local.freed.map((name)=>ctx.book.find((book)=>book.chapters.find((chapter)=>{
    if(chpater.name==name){
      return chpater.freed = true
    }
  })))
}