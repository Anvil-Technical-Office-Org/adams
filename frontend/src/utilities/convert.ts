import { System } from "~/core/entities";

/**
 * @param createdAt
 * @param updatedAt
 * @returns
 */
export const convertSystem = <T extends { created_at?: string, updated_at?: string }>(model: T): System => {
  const createdAt = new Date(model.created_at || '')
  const updatedAt = new Date(model.updated_at || '')
  return new System(new Date(createdAt),new Date(updatedAt))
}
