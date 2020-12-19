export interface IContactsRepository<T> {
    listByMessages(userId: number): Promise<T>;
    listByStudents(userId: number): Promise<T>;
}
