

 const getData = async () =>  {
    const res = await fetch('https://63ec999932a08117239df65b.mockapi.io/api/v1/jobs');

    if(!res.ok) {
        throw new Error('fail to fetch');
    };

    return res.json();
}

const List = async () => {

    const listData : any = await getData();

    return (
        <div>
            {
                listData.map((item : any, ind : number) => {
                    return <div key={ind}>{item}</div>
                })
            }
        </div>
    )
};

export default List;