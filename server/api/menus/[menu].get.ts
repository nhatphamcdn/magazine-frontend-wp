export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const menu_id = getRouterParam(event, "menu")

  const res = await fetch(`${config.wpApiUrl}/menu/${menu_id}`)
    .then((response) => response.json())
    .catch((err) => {
      console.log(err);
    });

  return res;
});
