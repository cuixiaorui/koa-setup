
module.exports = class BaseTask{
    constructor(type) {
        this.name = ""
        this.type = type
    }

    getType(){
        return this.type
    }
    
}