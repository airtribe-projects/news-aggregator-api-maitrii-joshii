class InMemoryRepository {
    constructor() {
        this.storage = new Map();
        this.currentId = 1;
    }

    // Create a new user
    create(entity) {
        entity.id = this.currentId;
        this.storage.set(this.currentId, entity);
        this.currentId++;
        return entity;
    }
}


module.exports = InMemoryRepository;