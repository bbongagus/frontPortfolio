function guidGenerator(){
    return '_' + Math.random().toString(36).substr(2, 9);
}
export default class GalleryItem{
    constructor(path, description, id){
        this.path = path;
        this.description = description || '';
        this.id = id || guidGenerator();
    }
}