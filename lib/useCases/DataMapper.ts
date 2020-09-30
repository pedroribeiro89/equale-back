export interface BaseDTO {}

export interface DataMapper<T> {
    toDomain(json: any): T;
    toPersistence(data: T): any;
    toDTO(data: T): BaseDTO;
}
