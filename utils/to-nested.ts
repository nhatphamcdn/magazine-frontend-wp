import { INestedFlatData } from '@/types/utils'

export function toNested(flatData: INestedFlatData[], parentId: number|string = 0) {
  return flatData.reduce((r: INestedFlatData[], e) => {
    if (parentId == e.parentId) {
      const object = { ...e };
      const children = toNested(flatData, e.id);

      if (children.length) {
        object.children = children;
      }

      r.push(object);
    }

    return r;
  }, []);
}
