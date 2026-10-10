export default function Array()
 {
    const user=[
        {id:1,name:"Hemant",age:20},
        {id:2,name:"Rohan",age:19}
    ];
    return(
        <div>
        <ul>
            {user.map((ul) => (
            <li key={ul.id}>
                {ul.id}.
                {ul.name}.
                {ul.age}</li>
            ))}
        </ul>
        </div>
    )}