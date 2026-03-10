export interface Service<T> {
  readonly get?: (id: string) => T | undefined
  readonly list?: () => T[]
  readonly create?: (entity: T) => T | void
  readonly update?: ({ id, entity }: {id: string, entity: T}) => T | void
  readonly delete?: (id: string) => void
}