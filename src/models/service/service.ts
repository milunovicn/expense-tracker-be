export interface Service<T> {
  readonly get?: (id: number) => Promise<T | null>
  readonly list?: () => Promise<T[]>
  readonly create?: (entity: T) => Promise<T>
  readonly update?: ({ id, entity }: {id: number, entity: T}) => Promise<T>
  readonly delete?: (id: number ) => Promise<void>
}