class InMemoryRepository {
    constructor() {
        this.storage = new Map();
        this.currentId = 1;
    }

    // Create a new entity
    create(entity) {
        entity.id = this.currentId;
        this.storage.set(this.currentId, entity);
        this.currentId++;
        return entity;
    }

    // Update an existing entity
    update(id, updatedData) {
        const existing = this.storage.get(id);
        if(!existing) {
            return null;
        }

        const updated = { ...existing, ...updatedData, id };
        this.storage.set(id, updated);
        return updated;
    }
}


module.exports = InMemoryRepository;