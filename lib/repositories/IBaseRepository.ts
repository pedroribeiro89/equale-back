export interface IBaseRepository<T> {
    exists(data: T): Promise<boolean>;
    delete(data: T): Promise<any>;
    getById(id: number): Promise<T>;
    list(): Promise<T[]>;
    save(data: T): Promise<T>;
}
