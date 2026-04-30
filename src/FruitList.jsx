 export default function FruitList()
 {
    const fruits=["apple","banana","mango"]         // creating list
    return(
        <div>
            <ul>
                {fruits.map((fruit,index)=>
                <li key={index}>{fruit}</li>           // printing list by li
                )}
            </ul>
        </div>
    )
 }