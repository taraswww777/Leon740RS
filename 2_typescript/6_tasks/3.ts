{
  import fetch from "node-fetch";

  const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';

  interface IntComment {
    id: number,
    email: string
  }

  const fnGetComments = async (url: string): Promise<IntComment[]> => {
    try {
      const objResponse = await fetch(url);
      const arrData = await objResponse.json();
      return arrData;
    } catch (error: string | any) {
      throw new Error(error);
    }
  };

  fnGetComments(COMMENTS_URL)
    .then((arrFetchedComments: IntComment[]) => {
      const arrModifiedComments: IntComment[] = arrFetchedComments.map((comment) => ({
        id: comment.id,
        email: comment.email,
      }));
      return arrModifiedComments;
    })
    .then((objComments) => console.log(objComments));
}