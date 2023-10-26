import { client } from "./apiService";

export const getLaunches = async () => {
   const res =  await client.post('launches/query', {
        "query":{
           "upcoming":true
        },
        "options":{
           "limit":20,
           "sort":{
              "date_unix":"desc"
           }
        }
     });
     return res;
}


export const getPostDetails = async (id: string) => {
    const res =  await client.get('history/'+id);
      return res;
 }
