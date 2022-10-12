export const allQuizesData = async () =>{
    const productsData = await fetch('https://openapi.programming-hero.com/api/quiz')
  const allQuizes = await productsData.json()

  return allQuizes;
}