import { INestedFlatData } from '@/types/utils'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const menu_id = getRouterParam(event, "menu")

  const res = await fetch(`${config.wpApiUrl}/menu/${menu_id}`)
    .then((response) => response.json())
    .catch((err) => {
      console.log(err);
    });

  const data = res.map((item: any) : INestedFlatData => {
    return {
      id: item.ID,
      parentId: item.menu_item_parent,
      attrs: {
        title: item.title,
        type: item.type,
      }
    }
  })

  return data
});
