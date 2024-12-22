export default async function DynamicObj(props: any) {
    // console.log(props);
    const url = await fetch(`https://jsonplaceholder.typicode.com/todos/${props.params.id}`);
    const res = await url.json();
    // console.log(res.title);

    return (
        <div>
            <h1 className="text-center text-5xl font-bold p-10">
                {props.params.id} &nbsp; {res.title}
            </h1>
        </div>
    )
}
