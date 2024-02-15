const list = document.querySelector("ul")
const buttonShowAll = document.querySelector(".show-all")
const buttonMapAll = document.querySelector(".map-all")
const sumAll = document.querySelector(".sum-all")
const filterAll = document.querySelector(".filter-all")

function formatCurrency(value){
  const newValue =value.toLocaleString("pt-br", {style: "currency",
   currency: "BRL" 
  })
  return newValue // para corrigir os valores final e não aparecer numeros quebredos
}                //  por exemplo R$ 29,578 <= valor quebrado
//..............//...............R$ 29,57  <= Valor corrigido  
function showAll(productArray) {
  let myLi = ""
  productArray.forEach((product) => {
    myLi += `
             <li>
                <img src=${product.src}>
                <p>${product.name}</p>
                <p class="item-price">R$ ${formatCurrency(product.price)}</p>
            </li>
           `
  })

  list.innerHTML = myLi
}
function mapAllItems(){
  const newPrices =  menuOptions.map( (product) =>({
    ...product, // Spread Operator => vai espalhar todo o arrey, e mater sem alteração
    price: product.price * 0.9, // * 0.9 = isso e 10% de desconto
    
  })) 
  showAll(newPrices)
}

function sumAllItems(){
   const totalValue = menuOptions.reduce( (acc, curr) => acc + curr.price, 0)
   list.innerHTML = `
    <li>
      <p>O valor total dos itens é R$ ${formatCurrency(totalValue)}</p>
    </li>
   `
}
function filterAllItems(){
  const filterJustVegan = menuOptions.filter( (product) => product.vegan)
  showAll(filterJustVegan)
}

buttonShowAll.addEventListener("click", () => showAll(menuOptions))
buttonMapAll.addEventListener("click", mapAllItems )
sumAll.addEventListener("click", sumAllItems)
filterAll.addEventListener("click", filterAllItems)
