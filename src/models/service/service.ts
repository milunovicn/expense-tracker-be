// TODO: Think about these type params little bit better
export interface Service<T, TCreate extends Partial<T> = Partial<T>, DTO extends Partial<T> = Partial<T>> {
  readonly get?: (id: number) => Promise<DTO | null>
  readonly list?: () => Promise<DTO[]>
  readonly create?: (entity: TCreate) => Promise<DTO>
  readonly update?: ({ id, entity }: {id: number, entity: T}) => Promise<DTO>
  readonly delete?: (id: number ) => Promise<DTO>
}