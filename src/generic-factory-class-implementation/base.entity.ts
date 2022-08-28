export class BaseEntity<EntityDataType> {
  get<K extends keyof EntityDataType>(
    prop?: keyof EntityDataType,
  ): EntityDataType[K] | EntityDataType {
    const data = Object.assign({}, this) as unknown as EntityDataType;
    return prop ? (data[prop] as EntityDataType[K]) : (data as EntityDataType);
  }

  set<K extends keyof EntityDataType>(
    prop: keyof EntityDataType,
    value: EntityDataType[K],
  ): void {
    Object.assign(this, { [prop]: value });
  }
}
